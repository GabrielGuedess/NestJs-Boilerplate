import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { exec } from 'child_process';
import helpers from "handlebars-helpers"
import pluralize from 'pluralize';
import { camelCase, snakeCase, pascalCase, kebabCase } from 'change-case';

import fs from 'node:fs';
import path from 'node:path';

import handlebars from "handlebars"

import { parsePrismaSchema } from "./generator.mjs"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const plopConfig = (/** @type {import('plop').NodePlopAPI} */ plop) => {
  handlebars.registerHelper(helpers());

  // snake_case
  handlebars.registerHelper('snakeCase', function (str) {
    return snakeCase(str);
  });

  // camelCase
  handlebars.registerHelper('camelCase', function (str) {
    return camelCase(str);
  });

  // camelCase plural
  handlebars.registerHelper('camelCasePlural', function (str) {
    return camelCase(pluralize(str));
  });

  // PascalCase plural
  handlebars.registerHelper('pascalCasePlural', function (str) {
    return pascalCase(pluralize(str));
  });

  // kebab-case plural
  handlebars.registerHelper('kebabCasePlural', function (str) {
    return kebabCase(pluralize(str));
  });

  handlebars.registerHelper('some', (items, key) => {
    return items.some(item => item[key]);
  });

  handlebars.registerHelper('and', (a, b) => a && b);

  handlebars.registerHelper('defaultValue', field => {
    if (field.required) return `props.${field.name}`;
    if (field.type === 'boolean') return 'false';
    if (field.type === 'string') return `''`;
    if (field.type === 'number') return '0';
    if (field.type === 'Date') return 'new Date()';

    return 'undefined';
  });

  handlebars.registerHelper('join', function(fields, separator, prefix) {
    const uniqueFields = fields.filter(field => field.isUnique);

    const expressions = uniqueFields.map(field => `item.${field.name} === ${prefix}.${field.name}`);

    return new handlebars.SafeString(expressions.join(separator));
  });

  handlebars.registerHelper('includes', function (str, substring) {
    return str.includes(substring);
  });

  handlebars.registerHelper('mapTypeToGraphQLClass', function(type) {
    const map = {
      string: 'String',
      number: 'Number',
      boolean: 'Boolean',
      Date: 'GraphQLDateTimeISO',
    };

    return map[type] || 'String';
  });

  handlebars.registerHelper('hasMoreUniques', function hasMoreUniques(fields) {
    return fields.some((f) => f.isUnique && f.name !== 'id');
  })

  handlebars.registerHelper('uniqueUnion', function (fields) {
    const keys = fields
      .filter((f) => f.isUnique && f.name !== 'id')
      .map((f) => `'${f.name}'`);

    return keys.length ? keys.join(' | ') : '';
  });

  const schema = parsePrismaSchema(join(__dirname, '../prisma/schema.prisma'));

  function convertType(prismaType) {
    const cleanType = prismaType.replace('?', '');

    switch (cleanType) {
      case 'String':
        return 'string';
      case 'Boolean':
        return 'boolean';
      case 'DateTime':
        return 'Date';
      case 'Int':
      case 'Float':
        return 'number';
      default:
        return cleanType;
    }
  }

  plop.setActionType('eslint-fix', (answers, config, plop) => {
    return new Promise((resolve, reject) => {
      console.log('Running ESLint fix...');

      exec('npx eslint --fix "{src,apps,libs,test}/**/*.ts"', (err, stdout, stderr) => {
        if (err) {
          reject(err);
        } else {
          console.log(stdout);
          console.error(stderr);
          resolve('ESLint fix applied');
        }
      });
    });
  });

  plop.setActionType('database.module', function (answers, config, plopInstance) {
    const { name } = config.data;
    const databaseModulePath = path.resolve(__dirname, '../src/infrastructure/database/database.module.ts');

    const pascalName = plopInstance.getHelper('pascalCase')(name);

    let fileContent = fs.readFileSync(databaseModulePath, 'utf-8');

    const importBlock = `
  import { ${name}Repository } from 'domain/repositories/${name}Repository';
  import { Prisma${name}Repository } from 'infrastructure/database/prisma/repositories/Prisma${name}Repository';
    `;

    const providerBlock = `
      // ${pascalName}
      {
        provide: ${name}Repository,
        useClass: Prisma${name}Repository,
      },
    `;

    const exportBlock = `${name}Repository,`;

    const importRegex = /import { JwtService } from '@nestjs\/jwt';/;

    if (!importRegex.test(fileContent)) {
      throw new Error('Import insertion point not found');
    }
    fileContent = fileContent.replace(importRegex, `${importBlock}\n$&`);

    const providersRegex = /providers: \[(.*)\],/s;

    if (!providersRegex.test(fileContent)) {
      throw new Error('Providers insertion point not found');
    }

    fileContent = fileContent.replace(providersRegex, (match, p1) => {
      return `providers: [${p1}\n${providerBlock}],`;
    });

    const exportsRegex = /exports: \[(.*)\],/;

    if (!exportsRegex.test(fileContent)) {
      throw new Error('Exports insertion point not found');
    }

    fileContent = fileContent.replace(exportsRegex, (match, p1) => {
      return `exports: [${p1}, ${exportBlock}],`;
    });

    fs.writeFileSync(databaseModulePath, fileContent);

    return `Repository for ${name} successfully added to DatabaseModule!`;
  });

  plop.setActionType('http.module', (answers, config, plopInstance) => {
    const httpModulePath = path.resolve(__dirname, '../src/infrastructure/http/http.module.ts');

    const { name } = answers;

    const pascalName = plopInstance.getHelper('pascalCase')(name);
    const camelName = plopInstance.getHelper('camelCase')(name);
    const snakeName = plopInstance.getHelper('snakeCase')(name);
    const pluralPascal = plopInstance.getHelper('pascalCase')(pluralize(name));

    const importBlock = `
import { ${pascalName}Resolver } from 'infrastructure/http/graphql/resolvers/${snakeName}.resolver';
import { Count${pluralPascal}UseCase } from 'application/useCases/${camelName}/count${pluralPascal}/Count${pluralPascal}UseCase';
import { Update${pascalName}UseCase } from 'application/useCases/${camelName}/update${pascalName}/Update${pascalName}UseCase';
import { Delete${pascalName}UseCase } from 'application/useCases/${camelName}/delete${pascalName}/Delete${pascalName}UseCase';
import { Create${pascalName}UseCase } from 'application/useCases/${camelName}/create${pascalName}/Create${pascalName}UseCase';
import { FindAll${pluralPascal}UseCase } from 'application/useCases/${camelName}/findAll${pluralPascal}/FindAll${pluralPascal}UseCase';
import { Activate${pascalName}UseCase } from 'application/useCases/${camelName}/activate${pascalName}/Activate${pascalName}UseCase';
import { FindFirst${pascalName}UseCase } from 'application/useCases/${camelName}/findFirst${pascalName}/FindFirst${pascalName}UseCase';
import { Deactivate${pascalName}UseCase } from 'application/useCases/${camelName}/deactivate${pascalName}/Deactivate${pascalName}UseCase';
import { FindUnique${pascalName}UseCase } from 'application/useCases/${camelName}/findUnique${pascalName}/FindUnique${pascalName}UseCase';
import { CreateMany${pluralPascal}UseCase } from 'application/useCases/${camelName}/createMany${pluralPascal}/CreateMany${pluralPascal}UseCase';
import { DeleteMany${pluralPascal}UseCase } from 'application/useCases/${camelName}/deleteMany${pluralPascal}/DeleteMany${pluralPascal}UseCase';
import { UpdateMany${pluralPascal}UseCase } from 'application/useCases/${camelName}/updateMany${pluralPascal}/UpdateMany${pluralPascal}UseCase';
import { PaginationCursor${pluralPascal}UseCase } from 'application/useCases/${camelName}/paginationCursor${pluralPascal}/PaginationCursor${pluralPascal}UseCase';
import { PaginationOffset${pluralPascal}UseCase } from 'application/useCases/${camelName}/paginationOffset${pluralPascal}/PaginationOffset${pluralPascal}UseCase';
`;

    const providerBlock = `
// ${pascalName}
    ${pascalName}Resolver,
    Count${pluralPascal}UseCase,
    Update${pascalName}UseCase,
    Delete${pascalName}UseCase,
    Create${pascalName}UseCase,
    FindAll${pluralPascal}UseCase,
    Activate${pascalName}UseCase,
    FindFirst${pascalName}UseCase,
    Deactivate${pascalName}UseCase,
    FindUnique${pascalName}UseCase,
    CreateMany${pluralPascal}UseCase,
    DeleteMany${pluralPascal}UseCase,
    UpdateMany${pluralPascal}UseCase,
    PaginationCursor${pluralPascal}UseCase,
    PaginationOffset${pluralPascal}UseCase,`;

    let fileContent = fs.readFileSync(httpModulePath, 'utf8');

    const importRegex = /import { DatabaseModule } from 'infrastructure\/database\/database.module';/;

    if (!importRegex.test(fileContent)) {
      throw new Error('Import insertion point not found');
    }

    fileContent = fileContent.replace(importRegex, `${importBlock}\n$&`);

    const providersRegex = /(\/\/ User[\s\S]+?PaginationOffsetUsersUseCase,)/;

    if (!providersRegex.test(fileContent)) {
      throw new Error('Providers insertion point not found');
    }

    fileContent = fileContent.replace(providersRegex, `$1\n${providerBlock}`);

    fs.writeFileSync(httpModulePath, fileContent);

    return `Resolver and UseCases for ${name} successfully added to HttpModule!`;
  });

  plop.setGenerator('module', {
    description: 'Create a Module',
    prompts: [
      {
        type: 'list',
        name: 'name',
        message: 'What is your module name?',
        choices: schema.map(item => item.name)
      },
    ],
    actions: (choice) => {
      const model = schema.find(item => item.name === choice.name).fields.filter(item => item.name !== "///")
      const name = choice.name;

      const fields = model
        .filter(field => field.name !== 'id' && field.name !== '///')
        .map(field => ({
          name: field.name,
          type: convertType(field.type, name),
          required: !field.type.includes('?'),
          isUnique: field.isUnique,
          isEnum: field.isEnum,
          enumType: field.enumType,
          isHideField : field.isHideField ,
          isObjectId: field.isObjectId,
          hasDefault: field.hasDefault,
          defaultValue: field.defaultValue,
          isOptional: field.isOptional,
        }));

      var actions = [
        // Domain

        // Entity
        {
          type: 'add',
          path: '../src/domain/entities/{{camelCase name}}/{{pascalCase name}}.ts',
          templateFile: 'templates/domain/entities/entity.hbs',
          data: {
            name,
            fields,
          },
        },

        // Entity Spec
        {
          type: 'add',
          path: '../src/domain/entities/{{camelCase name}}/{{pascalCase name}}.spec.ts',
          templateFile: 'templates/domain/entities/entity.spec.hbs',
          data: {
            name,
            fields,
          },
        },

        // Repository
        {
          type: 'add',
          path: '../src/domain/repositories/{{pascalCase name}}Repository.ts',
          templateFile: 'templates/domain/repositories/repository.hbs',
          data: {
            name,
            fields,
          },
        },

        // Repository DTO
        {
          type: 'add',
          path: '../src/domain/dtos/repositories/{{pascalCase name}}RepositoryDTO.ts',
          templateFile: 'templates/domain/dtos/repository.hbs',
          data: {
            name,
            fields,
          },
        },


        // UseCases DTO

        // Activate
         {
          type: 'add',
          path: '../src/application/dtos/{{camelCase name}}/Activate{{pascalCase name}}UseCaseDTO.ts',
          templateFile: 'templates/application/dtos/activateDTO.hbs',
          data: {
            name,
            fields,
          },
        },

        // Count
        {
          type: 'add',
          path: '../src/application/dtos/{{camelCase name}}/Count{{pascalCasePlural name}}UseCaseDTO.ts',
          templateFile: 'templates/application/dtos/countDTO.hbs',
          data: {
            name,
            fields,
          },
        },

        // Create
        {
          type: 'add',
          path: '../src/application/dtos/{{camelCase name}}/Create{{pascalCase name}}UseCaseDTO.ts',
          templateFile: 'templates/application/dtos/createDTO.hbs',
          data: {
            name,
            fields,
          },
        },

        // Deactivate
         {
          type: 'add',
          path: '../src/application/dtos/{{camelCase name}}/Deactivate{{pascalCase name}}UseCaseDTO.ts',
          templateFile: 'templates/application/dtos/deactivateDTO.hbs',
          data: {
            name,
            fields,
          },
        },

        // Delete
        {
          type: 'add',
          path: '../src/application/dtos/{{camelCase name}}/Delete{{pascalCase name}}UseCaseDTO.ts',
          templateFile: 'templates/application/dtos/deleteDTO.hbs',
          data: {
            name,
            fields,
          },
        },

        // Find All
        {
          type: 'add',
          path: '../src/application/dtos/{{camelCase name}}/FindAll{{pascalCasePlural name}}UseCaseDTO.ts',
          templateFile: 'templates/application/dtos/findAllDTO.hbs',
          data: {
            name,
            fields,
          },
        },

        // Find First
        {
          type: 'add',
          path: '../src/application/dtos/{{camelCase name}}/FindFirst{{pascalCase name}}UseCaseDTO.ts',
          templateFile: 'templates/application/dtos/findFirstDTO.hbs',
          data: {
            name,
            fields,
          },
        },

        // Find Unique
        {
          type: 'add',
          path: '../src/application/dtos/{{camelCase name}}/FindUnique{{pascalCase name}}UseCaseDTO.ts',
          templateFile: 'templates/application/dtos/findUniqueDTO.hbs',
          data: {
            name,
            fields,
          },
        },

        // Pagination Cursor
        {
          type: 'add',
          path: '../src/application/dtos/{{camelCase name}}/PaginationCursor{{pascalCasePlural name}}UseCaseDTO.ts',
          templateFile: 'templates/application/dtos/paginationCursorDTO.hbs',
          data: {
            name,
            fields,
          },
        },

        // Pagination Offset
        {
          type: 'add',
          path: '../src/application/dtos/{{camelCase name}}/PaginationOffset{{pascalCasePlural name}}UseCaseDTO.ts',
          templateFile: 'templates/application/dtos/paginationOffsetDTO.hbs',
          data: {
            name,
            fields,
          },
        },

        // Update
        {
          type: 'add',
          path: '../src/application/dtos/{{camelCase name}}/Update{{pascalCase name}}UseCaseDTO.ts',
          templateFile: 'templates/application/dtos/updateDTO.hbs',
          data: {
            name,
            fields,
          },
        },

        // UseCases

        // Activate
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/activate{{pascalCase name}}/Activate{{pascalCase name}}UseCase.ts',
          templateFile: 'templates/application/useCases/activate/activate.hbs',
          data: {
            name,
            fields,
          },
        },

        // Activate Spec
         {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/activate{{pascalCase name}}/Activate{{pascalCase name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/activate/activate.spec.hbs',
          data: {
            name,
            fields,
          },
        },

        // Count
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/count{{pascalCasePlural name}}/Count{{pascalCasePlural name}}UseCase.ts',
          templateFile: 'templates/application/useCases/count/count.hbs',
          data: {
            name,
            fields,
          },
        },

        // Count Spec
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/count{{pascalCasePlural name}}/Count{{pascalCasePlural name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/count/count.spec.hbs',
          data: {
            name,
            fields,
          },
        },

        // Create Many
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/createMany{{pascalCasePlural name}}/CreateMany{{pascalCasePlural name}}UseCase.ts',
          templateFile: 'templates/application/useCases/createMany/createMany.hbs',
          data: {
            name,
            fields,
          },
        },

        // Create Many Spec
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/createMany{{pascalCasePlural name}}/CreateMany{{pascalCasePlural name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/createMany/createMany.spec.hbs',
          data: {
            name,
            fields,
          },
        },

        // Create
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/create{{pascalCase name}}/Create{{pascalCase name}}UseCase.ts',
          templateFile: 'templates/application/useCases/create/create.hbs',
          data: {
            name,
            fields,
          },
        },

        // Create Spec
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/create{{pascalCase name}}/Create{{pascalCase name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/create/create.spec.hbs',
          data: {
            name,
            fields,
          },
        },

        // Deactivate
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/deactivate{{pascalCase name}}/Deactivate{{pascalCase name}}UseCase.ts',
          templateFile: 'templates/application/useCases/deactivate/deactivate.hbs',
          data: {
            name,
            fields,
          },
        },

        // Deactivate Spec
         {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/deactivate{{pascalCase name}}/Deactivate{{pascalCase name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/deactivate/deactivate.spec.hbs',
          data: {
            name,
            fields,
          },
        },

        // Delete Many
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/deleteMany{{pascalCasePlural name}}/DeleteMany{{pascalCasePlural name}}UseCase.ts',
          templateFile: 'templates/application/useCases/deleteMany/deleteMany.hbs',
          data: {
            name,
            fields,
          },
        },

        // Delete Many Spec
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/deleteMany{{pascalCasePlural name}}/DeleteMany{{pascalCasePlural name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/deleteMany/deleteMany.spec.hbs',
          data: {
            name,
            fields,
          },
        },

        // Delete
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/delete{{pascalCase name}}/Delete{{pascalCase name}}UseCase.ts',
          templateFile: 'templates/application/useCases/delete/delete.hbs',
          data: {
            name,
            fields,
          },
        },

        // Delete Spec
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/delete{{pascalCase name}}/Delete{{pascalCase name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/delete/delete.spec.hbs',
          data: {
            name,
            fields,
          },
        },

        // Find All
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/findAll{{pascalCasePlural name}}/FindAll{{pascalCasePlural name}}UseCase.ts',
          templateFile: 'templates/application/useCases/findAll/findAll.hbs',
          data: {
            name,
            fields,
          },
        },

        // Find All Spec
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/findAll{{pascalCasePlural name}}/FindAll{{pascalCasePlural name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/findAll/findAll.spec.hbs',
          data: {
            name,
            fields,
          },
        },

        // Find First
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/findFirst{{pascalCase name}}/FindFirst{{pascalCase name}}UseCase.ts',
          templateFile: 'templates/application/useCases/findFirst/findFirst.hbs',
          data: {
            name,
            fields,
          },
        },

        // Find First Spec
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/findFirst{{pascalCase name}}/FindFirst{{pascalCase name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/findFirst/findFirst.spec.hbs',
          data: {
            name,
            fields,
          },
        },

        // Find Unique
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/findUnique{{pascalCase name}}/FindUnique{{pascalCase name}}UseCase.ts',
          templateFile: 'templates/application/useCases/findUnique/findUnique.hbs',
          data: {
            name,
            fields,
          },
        },

        // Find Unique Spec
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/findUnique{{pascalCase name}}/FindUnique{{pascalCase name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/findUnique/findUnique.spec.hbs',
          data: {
            name,
            fields,
          },
        },

        // Pagination Cursor
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/paginationCursor{{pascalCasePlural name}}/PaginationCursor{{pascalCasePlural name}}UseCase.ts',
          templateFile: 'templates/application/useCases/paginationCursor/paginationCursor.hbs',
          data: {
            name,
            fields,
          },
        },

        // Pagination Cursor Spec
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/paginationCursor{{pascalCasePlural name}}/PaginationCursor{{pascalCasePlural name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/paginationCursor/paginationCursor.spec.hbs',
          data: {
            name,
            fields,
          },
        },

        // Pagination Offset
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/paginationOffset{{pascalCasePlural name}}/PaginationOffset{{pascalCasePlural name}}UseCase.ts',
          templateFile: 'templates/application/useCases/paginationOffset/paginationOffset.hbs',
          data: {
            name,
            fields,
          },
        },

        // Pagination Offset Spec
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/paginationOffset{{pascalCasePlural name}}/PaginationOffset{{pascalCasePlural name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/paginationOffset/paginationOffset.spec.hbs',
          data: {
            name,
            fields,
          },
        },

        // Update Many
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/updateMany{{pascalCasePlural name}}/UpdateMany{{pascalCasePlural name}}UseCase.ts',
          templateFile: 'templates/application/useCases/updateMany/updateMany.hbs',
          data: {
            name,
            fields,
          },
        },

        // Update Many Spec
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/updateMany{{pascalCasePlural name}}/UpdateMany{{pascalCasePlural name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/updateMany/updateMany.spec.hbs',
          data: {
            name,
            fields,
          },
        },

        // Update
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/update{{pascalCase name}}/Update{{pascalCase name}}UseCase.ts',
          templateFile: 'templates/application/useCases/update/update.hbs',
          data: {
            name,
            fields,
          },
        },

        // Update Spec
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/update{{pascalCase name}}/Update{{pascalCase name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/update/update.spec.hbs',
          data: {
            name,
            fields,
          },
        },

        // Repository In Memory
        {
          type: 'add',
          path: '../test/repositories/in-memory-{{kebabCase name}}-repository.ts',
          templateFile: 'templates/test/memory.hbs',
          data: {
            name,
            fields,
          },
        },

        // Prisma Mapper
        {
          type: 'add',
          path: '../src/infrastructure/database/prisma/mappers/Prisma{{pascalCase name}}Mapper.ts',
          templateFile: 'templates/infrastructure/prisma/prismaMapper.hbs',
          data: {
            name,
            fields,
          },
        },

        // Prisma Repository
        {
          type: 'add',
          path: '../src/infrastructure/database/prisma/repositories/Prisma{{pascalCase name}}Repository.ts',
          templateFile: 'templates/infrastructure/prisma/prismaRepository.hbs',
          data: {
            name,
            fields,
          },
        },

        // Http Response DTO
        {
          type: 'add',
          path: '../src/infrastructure/http/dtos/{{camelCase name}}/{{pascalCase name}}ResponseDTO.ts',
          templateFile: 'templates/infrastructure/http/dtos/responseDTO.hbs',
          data: {
            name,
            fields,
          },
        },

        // Http Request DTO
        {
          type: 'add',
          path: '../src/infrastructure/http/dtos/{{camelCase name}}/{{pascalCase name}}RequestDTO.ts',
          templateFile: 'templates/infrastructure/http/dtos/requestDTO.hbs',
          data: {
            name,
            fields,
          },
        },

        // Graphql Resolver
        {
          type: 'add',
          path: '../src/infrastructure/http/graphql/resolvers/{{kebabCase name}}.resolver.ts',
          templateFile: 'templates/infrastructure/http/resolvers/resolver.hbs',
          data: {
            name,
            fields,
          },
        },

        // Graphql Args
        {
          type: 'add',
          path: '../src/infrastructure/http/graphql/args/{{kebabCase name}}.args.ts',
          templateFile: 'templates/infrastructure/http/args/args.hbs',
          data: {
            name,
            fields,
          },
        },

        // Graphql Input
        {
          type: 'add',
          path: '../src/infrastructure/http/graphql/inputs/{{kebabCase name}}.input.ts',
          templateFile: 'templates/infrastructure/http/inputs/input.hbs',
          data: {
            name,
            fields,
          },
        },

        // Graphql Model
        {
          type: 'add',
          path: '../src/infrastructure/http/graphql/models/{{kebabCase name}}.model.ts',
          templateFile: 'templates/infrastructure/http/models/model.hbs',
          data: {
            name,
            fields,
          },
        },

        // Http ViewModel
        {
          type: 'add',
          path: '../src/infrastructure/http/view-models/{{pascalCase name}}ViewModel.ts',
          templateFile: 'templates/infrastructure/http/view/viewModel.hbs',
          data: {
            name,
            fields,
          },
        },

        {
          type: 'add',
          path: '../test/e2e/{{kebabCasePlural name}}.test.ts',
          templateFile: 'templates/test/e2e.test.hbs',
          data: {
            name,
            fields,
          },
        },

        {
          type: 'http.module',
          data: {
            name,
            fields,
          },
        },

        {
          type: 'database.module',
          data: {
            name,
            fields,
          },
        },

        {
          type: 'eslint-fix',
        },
      ];

      return actions;
    }
  });
};

export default plopConfig;

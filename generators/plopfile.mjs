import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { exec } from 'child_process';
import helpers from "handlebars-helpers"

import handlebars from "handlebars"

import { parsePrismaSchema } from "./generator.mjs"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const plopConfig = (/** @type {import('plop').NodePlopAPI} */ plop) => {
  handlebars.registerHelper(helpers());

  handlebars.registerHelper('contains', function (needle, haystack, options) {
    needle = handlebars.escapeExpression(needle);
    haystack = handlebars.escapeExpression(haystack);
    return (haystack.indexOf(needle) > -1) ? options.fn(this) : options.inverse(this);
  });

  handlebars.registerHelper('hasField', function (fields, fieldName, options) {
    if (!Array.isArray(fields)) {
      return options.inverse ? options.inverse(this) : false;
    }

    const hasField = fields.some(field =>
      field.name === fieldName ||
      field.name.toLowerCase() === fieldName.toLowerCase()
    );

    if (options.fn) {
      return hasField ? options.fn(this) : (options.inverse ? options.inverse(this) : '');
    }

    return hasField;
  });

  handlebars.registerHelper('some', (items, key) => {
    return items.some(item => item[key]);
  });

  handlebars.registerHelper('and', (a, b) => a && b);

  handlebars.registerHelper('replace', function (str, find, replace) {
    if (!find) return str;
    try {
      return str.replace(new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replace);
    } catch (e) {
      console.error(`Error in replace helper:`, e);
      return str;
    }
  });

  handlebars.registerHelper('snakeCase', function (str) {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase();
  });

  handlebars.registerHelper('dashCase', function(str) {
    if (typeof str !== 'string') {
      return str;
    }
    return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`).replace(/^-/, '');
  });

  handlebars.registerHelper('camelCase', function (str) {
    return str.replace(/_([a-z])/g, function (g) { return g[1].toUpperCase(); });
  });

  handlebars.registerHelper('includes', function (str, substr) {
    return str.includes(substr);
  });

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

  handlebars.registerHelper('camelCasePlural', function (input) {
    function toCamelCase(words) {
      return words
        .map((word, index) =>
          index === 0
            ? word.toLowerCase()
            : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
    }

    function pluralize(word) {
      if (word.endsWith('y')) {
        return word.slice(0, -1) + 'ies';
      }
      if (/(s|x|z|ch|sh)$/.test(word)) {
        return word + 'es';
      }
      return word + 's';
    }

    const words = input.match(/[A-Z][a-z0-9]*/g);

    if (!words || words.length === 0) return input;

    words[words.length - 1] = pluralize(words[words.length - 1]);

    return toCamelCase(words);
  });

  handlebars.registerHelper('pascalCasePlural', function (input) {
    function toPascalCase(words) {
      return words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
    }

    function pluralize(word) {
      if (word.endsWith('y')) {
        return word.slice(0, -1) + 'ies';
      }
      if (/(s|x|z|ch|sh)$/.test(word)) {
        return word + 'es';
      }
      return word + 's';
    }

    const words = input.match(/[A-Z][a-z0-9]*/g);

    if (!words || words.length === 0) return input;

    words[words.length - 1] = pluralize(words[words.length - 1]);

    return toPascalCase(words);
  });


  handlebars.registerHelper('snakeCaseToSpace', function (value) {
    if (typeof value === 'string') {
      return value
        .replace(/_/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase());
    }
    return value;
  });

  handlebars.registerHelper('notContains', function (substring, value, options) {
    if (value && !value.includes(substring)) {
      return options.fn(this);
    }
    return '';
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

  handlebars.registerHelper('convertToLowerWords', function (value) {
    if (typeof value === 'string') {
      return value
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .toLowerCase();
    }
    return value;
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
          type: 'eslint-fix',
        },
      ];

      return actions;
    }
  });
};

export default plopConfig;

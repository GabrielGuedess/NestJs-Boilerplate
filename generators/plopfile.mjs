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

  handlebars.registerHelper('typeWithoutQuestion', function (type) {
    return type.endsWith('?') ? type.slice(0, -1) : type;
  });

  handlebars.registerHelper('camelCasePlural', function (input) {
    function toCamelCase(str) {
      return str
        .toLowerCase()
        .split(/[^a-zA-Z0-9]/)
        .filter(Boolean)
        .map((word, index) =>
          index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
    }

    function pluralize(str) {
      if (str.endsWith('y')) {
        return str.slice(0, -1) + 'ies';
      }
      if (str.endsWith('s') || str.endsWith('x') || str.endsWith('z') ||
        str.endsWith('ch') || str.endsWith('sh')) {
        return str + 'es';
      }
      return str + 's';
    }

    const camelCaseStr = toCamelCase(input);
    return pluralize(camelCaseStr);
  });

  handlebars.registerHelper('pascalCasePlural', function (input) {
    function toPascalCase(str) {
      return str
        .toLowerCase()
        .split(/[^a-zA-Z0-9]/)
        .filter(Boolean)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
    }

    function pluralize(str) {
      if (str.endsWith('y')) {
        return str.slice(0, -1) + 'ies';
      }
      if (str.endsWith('s') || str.endsWith('x') || str.endsWith('z') ||
        str.endsWith('ch') || str.endsWith('sh')) {
        return str + 'es';
      }
      return str + 's';
    }

    const pascalCaseStr = toPascalCase(input);
    return pluralize(pascalCaseStr);
  });

  handlebars.registerHelper('notStartsWithUppercase', function (value, options) {
    if (value && /^[^A-Z]/.test(value)) {
      return options.fn(this);
    }

    return '';
  });

  handlebars.registerHelper('isString', function (type) {
    return type === 'String';
  });

  handlebars.registerHelper('isDate', function (value) {
    if (value instanceof Date) {
      return true;
    }

    const parsedDate = Date.parse(value);

    return !isNaN(parsedDate);
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

  handlebars.registerHelper('convertToLowerWords', function (value) {
    if (typeof value === 'string') {
      return value
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .toLowerCase();
    }
    return value;
  });

  handlebars.registerHelper('isNotPrismaType', function (type, options) {
    const prismaTypes = ['String', 'Int', 'Float', 'Boolean', 'DateTime'];
    if (prismaTypes.includes(type.replace(/\?$/, ''))) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  handlebars.registerHelper('convertPrismaType', function (type) {
    if (type.endsWith('?')) {
      type = type.slice(0, -1);
    }

    let tsType;

    switch (type) {
      case 'Int':
        tsType = 'number';
        break;
      case 'Boolean':
        tsType = 'boolean';
        break;
      case 'DateTime':
        tsType = 'Date';
        break;
      case 'String':
        tsType = 'string';
        break;
      default:
        tsType = 'any';
    }

    return tsType;
  });

  handlebars.registerHelper('generateInterface', function (fields) {
    const prismaTypes = ['String', 'Int', 'Float', 'Boolean', 'DateTime'];

    const lines = fields.map(field => {
      if (!prismaTypes.includes(field.type.replace(/\?$/, '')) || field.name === "///" || /^[A-Z]/.test(field.name)) return null;

      let { name, type } = field;
      const isOptional = type.endsWith('?');

      if (isOptional) {
        type = type.slice(0, -1);
      }

      let tsType;
      switch (type) {
        case 'Int':
          tsType = 'number';
          break;
        case 'DateTime':
          tsType = 'Date';
          break;
        case 'Boolean':
          tsType = 'boolean';
          break;
        case 'String':
          tsType = 'string';
          break;
        default:
          tsType = type;
      }

      return `${name}${isOptional ? '?' : ''}: ${tsType};`;
    });

    return lines.filter(line => line !== null).join('\n');
  });

  const schema = parsePrismaSchema(join(__dirname, '../prisma/schema.prisma'));

  plop.setActionType('eslint-fix', (answers, config, plop) => {
    return new Promise((resolve, reject) => {
      exec('npx eslint --fix \"{src,apps,libs,test}/**/*.ts\"', (err, stdout, stderr) => {
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
      const data = schema.find(item => item.name === choice.name).fields.filter(item => item.name !== "///")

      var actions = [
        // Domain Entity
        {
          type: 'add',
          path: '../src/domain/entities/{{camelCase name}}/{{pascalCase name}}.ts',
          templateFile: 'templates/domain/entities/entity.hbs',
          data: { ...data, data }
        },
        {
          type: 'add',
          path: '../src/domain/entities/{{camelCase name}}/{{pascalCase name}}.spec.ts',
          templateFile: 'templates/domain/entities/entity.spec.hbs',
          data: { ...data, data }
        },

        // Domain Repository
        {
          type: 'add',
          path: '../src/domain/repositories/{{pascalCase name}}Repository.ts',
          templateFile: 'templates/domain/repositories/repository.hbs',
          data: { ...data, data }
        },
        {
          type: 'add',
          path: '../src/domain/dtos/repositories/{{pascalCase name}}RepositoryDTO.ts',
          templateFile: 'templates/domain/dtos/repository.hbs',
          data: { ...data, data }
        },

        //UseCases DTO
        {
          type: 'add',
          path: '../src/application/dtos/{{camelCase name}}/Count{{pascalCasePlural name}}UseCaseDTO.ts',
          templateFile: 'templates/application/dtos/countDTO.hbs',
          data: { ...data, data }
        },
        {
          type: 'add',
          path: '../src/application/dtos/{{camelCase name}}/Create{{pascalCase name}}UseCaseDTO.ts',
          templateFile: 'templates/application/dtos/createDTO.hbs',
          data: { ...data, data }
        },
        {
          type: 'add',
          path: '../src/application/dtos/{{camelCase name}}/Delete{{pascalCase name}}UseCaseDTO.ts',
          templateFile: 'templates/application/dtos/deleteDTO.hbs',
          data: { ...data, data }
        },
        {
          type: 'add',
          path: '../src/application/dtos/{{camelCase name}}/FindAll{{pascalCasePlural name}}UseCaseDTO.ts',
          templateFile: 'templates/application/dtos/findAllDTO.hbs',
          data: { ...data, data }
        },
        {
          type: 'add',
          path: '../src/application/dtos/{{camelCase name}}/FindUnique{{pascalCase name}}UseCaseDTO.ts',
          templateFile: 'templates/application/dtos/findUniqueDTO.hbs',
          data: { ...data, data }
        },
        {
          type: 'add',
          path: '../src/application/dtos/{{camelCase name}}/Update{{pascalCase name}}UseCaseDTO.ts',
          templateFile: 'templates/application/dtos/updateDTO.hbs',
          data: { ...data, data }
        },

        //UseCases
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/count{{pascalCasePlural name}}/Count{{pascalCasePlural name}}UseCase.ts',
          templateFile: 'templates/application/useCases/count/count.hbs',
        },
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/count{{pascalCasePlural name}}/Count{{pascalCasePlural name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/count/count.spec.hbs',
        },

        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/create{{pascalCase name}}/Create{{pascalCase name}}UseCase.ts',
          templateFile: 'templates/application/useCases/create/create.hbs',
        },
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/create{{pascalCase name}}/Create{{pascalCase name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/create/create.spec.hbs',
        },

        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/deleteMany{{pascalCasePlural name}}/DeleteMany{{pascalCasePlural name}}UseCase.ts',
          templateFile: 'templates/application/useCases/deleteMany/deleteMany.hbs',
        },
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/deleteMany{{pascalCasePlural name}}/DeleteMany{{pascalCasePlural name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/deleteMany/deleteMany.spec.hbs',
        },

        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/delete{{pascalCase name}}/Delete{{pascalCase name}}UseCase.ts',
          templateFile: 'templates/application/useCases/delete/delete.hbs',
        },
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/delete{{pascalCase name}}/Delete{{pascalCase name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/delete/delete.spec.hbs',
        },

        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/findAll{{pascalCasePlural name}}/FindAll{{pascalCasePlural name}}UseCase.ts',
          templateFile: 'templates/application/useCases/findAll/findAll.hbs',
        },
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/findAll{{pascalCasePlural name}}/FindAll{{pascalCasePlural name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/findAll/findAll.spec.hbs',
        },

        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/findUnique{{pascalCase name}}/FindUnique{{pascalCase name}}UseCase.ts',
          templateFile: 'templates/application/useCases/findUnique/findUnique.hbs',
        },
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/findUnique{{pascalCase name}}/FindUnique{{pascalCase name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/findUnique/findUnique.spec.hbs',
        },

        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/updateMany{{pascalCasePlural name}}/UpdateMany{{pascalCasePlural name}}UseCase.ts',
          templateFile: 'templates/application/useCases/updateMany/updateMany.hbs',
        },
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/updateMany{{pascalCasePlural name}}/UpdateMany{{pascalCasePlural name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/updateMany/updateMany.spec.hbs',
        },

        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/update{{pascalCase name}}/Update{{pascalCase name}}UseCase.ts',
          templateFile: 'templates/application/useCases/update/update.hbs',
        },
        {
          type: 'add',
          path: '../src/application/useCases/{{camelCase name}}/update{{pascalCase name}}/Update{{pascalCase name}}UseCase.spec.ts',
          templateFile: 'templates/application/useCases/update/update.spec.hbs',
        },

        // In Memory
        {
          type: 'add',
          path: '../test/repositories/in-memory-{{kebabCase name}}-repository.ts',
          templateFile: 'templates/test/memory.hbs',
        },

        // Infra Prisma
        {
          type: 'add',
          path: '../src/infrastructure/database/prisma/mappers/Prisma{{pascalCase name}}Mapper.ts',
          templateFile: 'templates/infrastructure/prisma/prismaMapper.hbs',
        },
        {
          type: 'add',
          path: '../src/infrastructure/database/prisma/repositories/Prisma{{pascalCase name}}Repository.ts',
          templateFile: 'templates/infrastructure/prisma/prismaRepository.hbs',
        },

        // Infra Http DTO
        {
          type: 'add',
          path: '../src/infrastructure/http/dtos/{{camelCase name}}/{{pascalCase name}}ResponseDTO.ts',
          templateFile: 'templates/infrastructure/http/dtos/responseDTO.hbs',
        },
        {
          type: 'add',
          path: '../src/infrastructure/http/dtos/{{camelCase name}}/{{pascalCase name}}RequestDTO.ts',
          templateFile: 'templates/infrastructure/http/dtos/requestDTO.hbs',
        },

        // Infra Http Resolver
        {
          type: 'add',
          path: '../src/infrastructure/http/graphql/resolvers/{{kebabCase name}}.resolver.ts',
          templateFile: 'templates/infrastructure/http/resolvers/resolver.hbs',
        },

        // Infra Http Args
        {
          type: 'add',
          path: '../src/infrastructure/http/graphql/args/{{kebabCase name}}.args.ts',
          templateFile: 'templates/infrastructure/http/args/args.hbs',
        },

        // Infra Http Input
        {
          type: 'add',
          path: '../src/infrastructure/http/graphql/inputs/{{kebabCase name}}.input.ts',
          templateFile: 'templates/infrastructure/http/inputs/input.hbs',
        },

        // Infra Http Model
        {
          type: 'add',
          path: '../src/infrastructure/http/graphql/models/{{kebabCase name}}.model.ts',
          templateFile: 'templates/infrastructure/http/models/model.hbs',
        },

        // Infra Http ViewModel
        {
          type: 'add',
          path: '../src/infrastructure/http/view-models/{{pascalCase name}}ViewModel.ts',
          templateFile: 'templates/infrastructure/http/view/viewModel.hbs',
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

import js from '@eslint/js';
import globals from 'globals';
import zod from 'eslint-plugin-zod';
import jest from 'eslint-plugin-jest';
import unicorn from 'eslint-plugin-unicorn';
import promise from 'eslint-plugin-promise';
import prettier from 'eslint-plugin-prettier';
import { FlatCompat } from '@eslint/eslintrc';
import importPlugin from 'eslint-plugin-import';
import noSecrets from 'eslint-plugin-no-secrets';
import tsParser from '@typescript-eslint/parser';
import perfectionist from 'eslint-plugin-perfectionist';
import jestFormatting from 'eslint-plugin-jest-formatting';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import hexagonalArchitecture from 'eslint-plugin-hexagonal-architecture';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';

const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const config = [
  comments.recommended,

  ...compat.extends('airbnb'),
  ...compat.extends('@kesills/airbnb-typescript'),
  ...compat.extends('@kesills/airbnb-typescript'),

  {
    ignores: [
      'dist',
      '**/coverage',
      'node_modules',
      '**/generator.mjs',
      '**/plopfile.mjs',
      '**/generated/**',
    ],
  },

  {
    files: ['**/*.{js,mjs,ts}'],
    settings: {
      jest: {
        version: 'detect',
      },

      'import/resolver': {
        typescript: {},

        node: {
          extensions: ['.js', '.ts'],
        },
      },
    },

    languageOptions: {
      parser: tsParser,

      ecmaVersion: 2024,
      sourceType: 'module',

      parserOptions: {
        project: ['tsconfig.eslint.json'],
      },

      globals: {
        ...globals.node,
        ...globals.jest,
        ...jest.environments.globals.globals,
      },
    },

    plugins: {
      zod,
      jest,
      promise,
      unicorn,
      prettier,
      perfectionist,
      import: importPlugin,
      'no-secrets': noSecrets,
      'jest-formatting': jestFormatting,
      '@typescript-eslint': typescriptEslint,
      'prefer-arrow-functions': preferArrowFunctions,
      'hexagonal-architecture': hexagonalArchitecture,
      'no-relative-import-paths': noRelativeImportPaths,
    },

    rules: {
      'no-console': 'error',
      'sort-imports': 'off',
      'unicorn/no-null': 'off',
      'no-else-return': 'error',
      '@stylistic/indent': 'off',
      'zod/prefer-enum': 'error',
      'promise/no-native': 'off',
      'promise/avoid-new': 'warn',
      'operator-linebreak': 'off',
      'jest/valid-expect': 'error',
      'prettier/prettier': 'error',
      'n/no-missing-import': 'off',
      'promise/no-nesting': 'warn',
      'no-restricted-syntax': 'off',
      'zod/require-strict': 'error',
      'no-inline-comments': 'error',
      'object-curly-newline': 'off',
      'promise/valid-params': 'warn',
      'no-warning-comments': 'error',
      'promise/param-names': 'error',
      '@stylistic/brace-style': 'off',
      'function-paren-newline': 'off',
      'node/no-missing-import': 'off',
      'jest/no-focused-tests': 'error',
      'promise/always-return': 'error',
      'jest/no-disabled-tests': 'warn',
      'promise/no-return-wrap': 'error',
      'promise/no-new-statics': 'error',
      'implicit-arrow-linebreak': 'off',
      'jest/no-identical-title': 'error',
      'promise/catch-or-return': 'error',
      'unicorn/no-keyword-prefix': 'off',
      'unicorn/no-nested-ternary': 'off',
      'import/no-default-export': 'error',
      'node/no-unpublished-import': 'off',
      'unicorn/no-array-for-each': 'error',
      'jest/prefer-to-have-length': 'warn',
      'unicorn/no-static-only-class': 'off',
      'import/prefer-default-export': 'off',
      'promise/no-return-in-finally': 'warn',
      'arrow-parens': ['error', 'as-needed'],
      'promise/no-multiple-resolved': 'error',
      'promise/no-promise-in-callback': 'warn',
      'promise/no-callback-in-promise': 'warn',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      'arrow-body-style': ['error', 'as-needed'],
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      'quote-props': ['error', 'consistent-as-needed'],
      '@typescript-eslint/class-methods-use-this': 'off',
      'jest-formatting/padding-around-test-blocks': 'error',
      'jest-formatting/padding-around-describe-blocks': 'error',
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@eslint-community/eslint-comments/no-use': ['error', { allow: [] }],
      'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      'import/no-duplicates': [
        'error',
        {
          'prefer-inline': true,
        },
      ],

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],

      'perfectionist/sort-enums': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
        },
      ],

      'perfectionist/sort-exports': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
        },
      ],

      'perfectionist/sort-union-types': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
        },
      ],

      'perfectionist/sort-named-imports': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
        },
      ],

      'perfectionist/sort-named-exports': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
        },
      ],

      'perfectionist/sort-array-includes': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
        },
      ],

      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          ts: 'never',
        },
      ],

      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { prefix: '', rootDir: 'src', allowSameFolder: true },
      ],

      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
        },
      ],

      'lines-between-class-members': [
        'error',
        {
          enforce: [
            {
              prev: 'method',
              next: 'method',
              blankLine: 'always',
            },
          ],
        },
      ],

      'no-secrets/no-secrets': [
        'error',
        {
          ignoreContent: [
            'events.*',
            'providers.*',
            'decorators.*',
            'validation.*',
            'repositories.*',
          ],
        },
      ],

      'prefer-arrow-functions/prefer-arrow-functions': [
        'error',
        {
          singleReturnOnly: false,
          disallowPrototype: false,
          returnStyle: 'unchanged',
          allowNamedFunctions: false,
          classPropertiesAllowed: false,
        },
      ],

      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            ref: {
              reference: false,
            },

            args: {
              arguments: false,
            },

            env: {
              environment: false,
            },

            props: {
              properties: false,
            },
          },
        },
      ],

      'perfectionist/sort-classes': [
        'error',
        {
          order: 'asc',
          type: 'line-length',

          groups: [
            'index-signature',
            'static-property',
            'private-property',
            'property',
            'constructor',
            'static-method',
            'private-method',
            ['get-method', 'set-method'],
            'method',
            'unknown',
          ],
        },
      ],

      'perfectionist/sort-objects': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
          groups: [
            'id',
            'unknown',
            'active',
            'updated_at',
            'created_at',
            'deleted_at',
          ],

          customGroups: {
            id: '^id$',
            active: '^active$',
            updated_at: '^updated_at$',
            created_at: '^created_at$',
            deleted_at: '^deleted_at$',
          },
        },
      ],

      'perfectionist/sort-interfaces': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
          groups: [
            'id',
            'unknown',
            'active',
            'updated_at',
            'created_at',
            'deleted_at',
          ],

          customGroups: {
            id: '^id$',
            active: '^active$',
            updated_at: '^updated_at$',
            created_at: '^created_at$',
            deleted_at: '^deleted_at$',
          },
        },
      ],

      'perfectionist/sort-object-types': [
        'error',
        {
          order: 'asc',
          type: 'line-length',
          groups: [
            'id',
            'unknown',
            'active',
            'updated_at',
            'created_at',
            'deleted_at',
          ],

          customGroups: {
            id: '^id$',
            active: '^active$',
            updated_at: '^updated_at$',
            created_at: '^created_at$',
            deleted_at: '^deleted_at$',
          },
        },
      ],

      'padding-line-between-statements': [
        'error',
        {
          prev: '*',
          next: 'try',
          blankLine: 'always',
        },
        {
          next: '*',
          prev: 'try',
          blankLine: 'always',
        },
        {
          next: '*',
          prev: 'var',
          blankLine: 'always',
        },
        {
          prev: '*',
          next: 'throw',
          blankLine: 'always',
        },
        {
          prev: '*',
          next: 'return',
          blankLine: 'always',
        },
        {
          prev: '*',
          next: 'export',
          blankLine: 'always',
        },
        {
          prev: '*',
          next: 'block-like',
          blankLine: 'always',
        },
        {
          next: '*',
          prev: 'block-like',
          blankLine: 'always',
        },
      ],

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        {
          types: ['function'],
          selector: 'variable',
          format: ['PascalCase', 'camelCase'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],

          custom: {
            match: true,
            regex: '[A-Z]*Props$',
          },
        },
        {
          selector: 'interface',
          format: ['PascalCase'],

          custom: {
            match: true,
            regex: '^I[A-Z]',
          },
        },
        {
          types: ['boolean'],
          selector: 'variable',
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        },
      ],

      'perfectionist/sort-imports': [
        'error',
        {
          order: 'asc',
          type: 'line-length',

          newlinesBetween: 'always',

          groups: [
            'type',
            'node',
            'nestjs',
            ['builtin', 'external'],
            'test',
            'domain',
            'application',
            'infrastructure',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'side-effect',
            'internal-type',
            'internal',
            'style',
            'object',
            'unknown',
          ],
          customGroups: {
            type: {
              node: ['^node/*'],
              test: ['^@test/*'],
              domain: ['^domain/*'],
              application: ['^application/*'],
              nestjs: ['^nestjs/*', '^@nestjs/*'],
              infrastructure: ['^infrastructure/*'],
            },

            value: {
              node: ['^node/*'],
              test: ['^@test/*'],
              domain: ['^domain/*'],
              application: ['^application/*'],
              nestjs: ['^nestjs/*', '^@nestjs/*'],
              infrastructure: ['^infrastructure/*'],
            },
          },
        },
      ],
    },
  },

  {
    files: ['**/{domain,application,infrastructure}/**/*.ts'],
    rules: {
      'hexagonal-architecture/enforce': ['error'],
    },
  },

  {
    files: ['**/exception/i18n-validation-exception.filter.ts'],
    rules: {
      'no-param-reassign': 'off',
      'prefer-destructuring': 'off',
    },
  },

  {
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
          },
        },
      ],
    },

    files: [
      'test/repositories/**',
      'test/providers/**',
      '**/guard/strategies/**',
      '**/guard/*.ts',
      '**/exception/*.ts',
      '**/prisma/*.ts',
    ],
  },

  {
    files: [
      '**/AwsUploaderProvider.ts',
      '**/CloudinaryFileUploaderProvider.ts',
    ],

    rules: {
      'promise/avoid-new': 'off',
      'consistent-return': 'off',
      'no-promise-executor-return': 'off',
    },
  },

  {
    files: ['**/domain/entities/**/*.ts', '**/resolvers/**/*.ts'],

    rules: {
      'no-underscore-dangle': 'off',
      'perfectionist/sort-classes': 'off',
    },
  },

  {
    files: ['src/infrastructure/env.ts', 'src/infrastructure/app.module.ts'],

    rules: {
      'zod/require-strict': 'off',
      'perfectionist/sort-objects': 'off',
    },
  },

  {
    files: ['**/dtos/**'],

    rules: {
      'max-classes-per-file': 'off',
      'unicorn/filename-case': 'off',
      '@stylistic/lines-between-class-members': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            match: true,
            regex: '^I.*DTO$',
          },
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
          custom: {
            match: true,
            regex: '[A-Z]*DTO$',
          },
        },
      ],
    },
  },

  {
    files: ['**/models/**', '**/inputs/**', '**/args/**', '**/Notification.ts'],

    rules: {
      'max-classes-per-file': 'off',
      '@stylistic/lines-between-class-members': 'off',
    },
  },

  {
    files: ['**/health.controller.ts'],

    rules: {
      'no-secrets/no-secrets': 'off',
    },
  },

  {
    files: ['main.ts'],

    rules: {
      'unicorn/prefer-top-level-await': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
    },
  },

  {
    rules: {
      'import/no-default-export': 'off',
    },

    files: [
      'plopfile.mjs',
      'jest.config.ts',
      'jest.config.husky.ts',
      'commitlint.config.ts',
    ],
  },

  {
    files: ['**/jest.config.ts'],

    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        {
          types: ['function'],
          selector: 'variable',
          format: ['PascalCase', 'camelCase'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],

          custom: {
            match: true,
            regex: '[A-Z]*Props$',
          },
        },
        {
          selector: 'interface',
          format: ['PascalCase'],

          custom: {
            match: true,
            regex: '^I[A-Z]',
          },
        },
        {
          types: ['boolean'],
          selector: 'variable',
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        },
      ],
    },
  },
  {
    files: ['eslint.config.mjs'],

    rules: {
      'quote-props': 'off',
      'import/no-default-export': 'off',
    },
  },
  {
    files: ['**/**.js'],

    rules: {
      'no-undef': 'off',
      'unicorn/prefer-module': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.test.ts'],

    rules: {
      'no-new': 'off',
      'unicorn/prefer-module': 'off',
      '@typescript-eslint/return-await': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },

  {
    files: ['**/helpers/*.ts'],

    rules: {
      '@typescript-eslint/naming-convention': 'off',
    },
  },

  {
    files: ['**/decorators/**/*.ts', '**/pagination/**/*.ts'],

    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
    },
  },

  {
    files: ['**/**.d.ts'],

    rules: {
      'import/no-default-export': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',

      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
    },
  },

  {
    files: ['test/e2e/*.ts'],

    rules: {
      'no-secrets/no-secrets': 'off',
    },
  },
];

export default config;

import { type UserConfig, RuleConfigSeverity } from '@commitlint/types';

const configuration: UserConfig = {
  formatter: '@commitlint/format',
  parserPreset: 'conventional-changelog-atom',
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],
    'type-case': [2, 'always', 'lower-case'],
    'body-max-line-length': [2, 'always', 100],
    'footer-max-line-length': [2, 'always', 100],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'assets',
        'stylesheet',
      ],
    ],
  },
  prompt: {
    questions: {
      breaking: {
        description: 'Describe the breaking changes',
      },
      isBreaking: {
        description: 'Are there any breaking changes?',
      },
      body: {
        description: 'Provide a longer description of the change',
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?',
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)',
      },
      subject: {
        description:
          'Write a short, imperative tense description of the change',
      },
      scope: {
        description:
          'What is the scope of this change (e.g. component or file name)',
      },
      breakingBody: {
        description:
          'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
      },
      issuesBody: {
        description:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
      },
      type: {
        description: "Select the type of change that you're committing",
        enum: {
          fix: {
            emoji: '🐛',
            title: 'Bug Fixes',
            description: 'A bug fix',
          },
          feat: {
            emoji: '✨',
            title: 'Features',
            description: 'A new feature',
          },
          assets: {
            emoji: '🛹',
            title: 'Assets',
            description: 'Images, fonts, music',
          },
          revert: {
            emoji: '🗑',
            title: 'Reverts',
            description: 'Reverts a previous commit',
          },
          docs: {
            emoji: '�',
            title: 'Documentation',
            description: 'Documentation only changes',
          },
          stylesheet: {
            emoji: '🦋',
            title: 'StyleSheet',
            description: 'styling modifications, styling files',
          },
          test: {
            emoji: '🚨',
            title: 'Tests',
            description: 'Adding missing tests or correcting existing tests',
          },
          chore: {
            emoji: '♻️',
            title: 'Chores',
            description: "Other changes that don't modify src or test files",
          },
          perf: {
            emoji: '🚀',
            title: 'Performance Improvements',
            description: 'A code change that improves performance',
          },
          refactor: {
            emoji: '📦',
            title: 'Code Refactoring',
            description:
              'A code change that neither fixes a bug nor adds a feature',
          },
          build: {
            emoji: '🛠',
            title: 'Builds',
            description:
              'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
          },
          style: {
            emoji: '💎',
            title: 'Styles',
            description:
              'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
          },
          ci: {
            emoji: '⚙️',
            title: 'Continuous Integrations',
            description:
              'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
          },
        },
      },
    },
  },
};

export default configuration;

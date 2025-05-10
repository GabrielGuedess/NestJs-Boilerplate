/**
 * @type {import('semantic-release').GlobalConfig}
 */
const config = {
  branches: ['main', 'next'],
  plugins: [
    '@semantic-release/changelog',
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: 'expo-boilerplate.zip',
            name: 'expo-boilerplate-${nextRelease.gitTag}.zip',
            label: 'Expo Boilerplate - Build: ${nextRelease.gitTag}',
          },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            {
              type: 'feat',
              hidden: false,
              section: ':sparkles: Features',
            },
            {
              type: 'fix',
              hidden: false,
              section: ':bug: Bug Fixes',
            },
            {
              type: 'docs',
              hidden: false,
              section: ':memo: Documentation',
            },
            {
              type: 'style',
              hidden: false,
              section: ':barber: Styling',
            },
            {
              hidden: false,
              type: 'refactor',
              section: ':zap: Refactoring',
            },
            {
              type: 'perf',
              hidden: false,
              section: ':fast_forward: Performance',
            },
            {
              type: 'test',
              hidden: false,
              section: ':white_check_mark: Tests',
            },
            {
              type: 'ci',
              hidden: false,
              section: ':repeat: CI',
            },
            {
              hidden: true,
              type: 'chore',
            },
          ],
        },
      },
    ],
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          {
            type: 'refactor',
            release: 'patch',
          },
          {
            type: 'docs',
            release: 'patch',
          },
          {
            type: 'test',
            release: 'patch',
          },
          {
            type: 'style',
            release: 'patch',
          },
          {
            type: 'perf',
            release: 'patch',
          },
          {
            type: 'ci',
            release: 'patch',
          },
          {
            type: 'build',
            release: 'patch',
          },
        ],
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['yarn.lock', 'package.json', 'CHANGELOG.md', 'pnpm-lock.yaml'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};

export default config;

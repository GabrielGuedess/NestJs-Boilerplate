FROM node:20 AS development

RUN npm i -g pnpm

WORKDIR /usr/src/app

COPY --chown=node:node pnpm-lock.yaml ./

RUN pnpm fetch --prod

COPY --chown=node:node . .

RUN pnpm install

RUN pnpm prisma generate

USER node

# BUILD

FROM node:20 AS build

RUN npm i -g pnpm

WORKDIR /usr/src/app

COPY --chown=node:node pnpm-lock.yaml ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN pnpm build

ENV NODE_ENV production

RUN pnpm fetch --prod

RUN pnpm install

RUN pnpm prisma generate

USER node

# PRODUCTION

FROM node:20 AS production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/.docker ./.docker
COPY --chown=node:node --from=build /usr/src/app/prisma ./prisma
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

RUN chmod +x ./.docker/start.sh

ENTRYPOINT ["node", "dist/src/infrastructure/main.js"]

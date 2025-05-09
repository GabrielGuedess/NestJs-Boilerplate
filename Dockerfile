# BASE
FROM node:22.14-alpine AS base

RUN npm install -g pnpm@10.10.0

WORKDIR /usr/src/app

COPY --chown=node:node pnpm-lock.yaml package.json ./

# DEVELOPMENT
FROM base AS development

COPY --chown=node:node . .

RUN pnpm install
RUN pnpm prisma generate

USER node

# BUILD
FROM base AS build

COPY --chown=node:node --from=development /usr/src/app /usr/src/app

RUN pnpm build

ENV NODE_ENV=production
RUN pnpm install --prod
RUN pnpm prisma generate

USER node

# PRODUCTION
FROM node:22.14-alpine AS production

WORKDIR /usr/src/app

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/prisma ./prisma
COPY --chown=node:node --from=build /usr/src/app/.docker ./.docker

USER node

CMD ["sh", "-c", "npx prisma migrate deploy && pnpm start:prod"]

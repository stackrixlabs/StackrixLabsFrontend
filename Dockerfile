# syntax=docker/dockerfile:1.7

ARG NODE_VERSION=22-alpine

FROM node:${NODE_VERSION} AS deps
WORKDIR /app

ENV CI=true

RUN corepack enable

COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --immutable

FROM deps AS development
WORKDIR /app

COPY . .

EXPOSE 5173
CMD ["yarn", "dev", "--host", "0.0.0.0"]

FROM deps AS build
WORKDIR /app

COPY index.html vite.config.ts postcss.config.mjs eslint.config.js ./
COPY src ./src

RUN yarn build

FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html/src

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/src/ >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]

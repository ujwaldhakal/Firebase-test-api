FROM node:14.3.0-alpine3.11 as base

RUN apk add --no-cache git gcc g++

WORKDIR /var/www

FROM base as production

COPY package.json package-lock.json ./

RUN npm install

COPY ./ ./

ENV NODE_ENV "production"

RUN npm run build && npm prune --production

EXPOSE 8080
CMD ["npm", "run", "start:prod"]

FROM base as dev

RUN apk add --no-cache bash openssh make curl openssl

VOLUME $STD_HOME/.npm
VOLUME $STD_HOME/.yarn-cache

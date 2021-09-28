############################################################
# Dockerfile to build NodeJS 13 Installed Containers
# Based on Node:13
############################################################

# Builder image from full node image
FROM node:14 AS builder
WORKDIR /src/app
COPY --chown=node:node package.json ./package.json
RUN yarn install && yarn cache clean
COPY --chown=node:node . .
RUN yarn build && yarn --production


# Reduced production version from node alpine
FROM node:14-alpine
WORKDIR /app
COPY --from=builder --chown=node:node /src/app/package.json ./package.json
COPY --from=builder --chown=node:node /src/app/node_modules ./node_modules
COPY --from=builder --chown=node:node /src/app/.next ./.next
COPY --from=builder --chown=node:node /src/app/dist ./dist
COPY --from=builder --chown=node:node /src/app/public ./dist/public
COPY --from=builder --chown=node:node /src/app/locales ./locales
COPY --from=builder --chown=node:node /src/app/next.config.js ./next.config.js

# RUN chown -R node:node /app && chmod -R ug+rwx /app && chmod -R ug+s /app

VOLUME [ "/app" ]
EXPOSE 3000
# Change to working user
USER node

CMD ["yarn", "start"]

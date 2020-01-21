############################################################
# Dockerfile to build NodeJS 13 Installed Containers
# Based on Node:13
############################################################

FROM node:13

#RUN npm i npm pm2 -g
# Copy package json (lock file could be added to with *) and Install
COPY --chown=node:node package.json /app/

# Create data directory
EXPOSE 3000 9229
WORKDIR /app

# Install Dependencies on temp folder and clean cache
RUN npm install && npm cache clean --force
# Copy app files
COPY --chown=node:node . .
RUN npm run build
RUN chown -R node:node /app && chmod -R ug+rwx /app && chmod -R ug+s /app

VOLUME [ "/app" ]
# Change to working user
USER node


CMD ["npm", "start"]
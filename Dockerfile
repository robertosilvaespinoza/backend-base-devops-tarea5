FROM node:18.20.4-alpine3.20

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install --production

COPY ./dist ./dist

CMD [ "node","dist/src/index.js" ]
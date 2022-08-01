FROM node:16.14

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

EXPOSE 3000
CMD [ "node", "dist/main.js" ]

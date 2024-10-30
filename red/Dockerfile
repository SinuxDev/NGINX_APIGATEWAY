FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 9091 

EXPOSE 9092

CMD ["node", "index.js"]
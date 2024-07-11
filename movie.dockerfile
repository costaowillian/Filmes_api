FROM node:20.13.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3030

CMD ["node", "dist/src/app.js"]
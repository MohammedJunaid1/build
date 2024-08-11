FROM node:18

WORKDIR /backend

COPY package* /backend/
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm","run","start"]
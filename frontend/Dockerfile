FROM node:18

WORKDIR /frontend

COPY ./package* /frontend/
RUN npm install

COPY . /frontend/
RUN npm run build

EXPOSE 5173

CMD ["npm","run","start"]
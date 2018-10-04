FROM node:alpine

WORKDIR /usr/src/app
COPY package.json .
RUN npm install yarn -g
RUN yarn install

#RUN npm install webpack webpack-cli webpack-dev-server -g
#RUN npm link webpack

COPY . .

WORKDIR /usr/src/app/libs/mongo.io/client
RUN yarn install
WORKDIR /usr/src/app

CMD node_modules/.bin/webpack-dev-server --host 0.0.0.0 --mode development --hot
EXPOSE 8080

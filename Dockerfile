FROM node:boron

WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install yarn -g
RUN yarn install

RUN npm install webpack webpack-cli webpack-dev-server -g

#RUN npm link webpack

COPY . /usr/src/app


CMD ["webpack-dev-server", "--mode development --host 0.0.0.0 --hot"]

EXPOSE 8080
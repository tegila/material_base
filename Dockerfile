FROM node:boron

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install webpack 

RUN npm install yarn webpack-cli webpack-dev-server fsevents -g

RUN yarn install

RUN npm link webpack

COPY . /usr/src/app

EXPOSE 8080

CMD ["webpack-dev-server", "--disable-host-check"]

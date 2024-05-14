FROM node:current-alpine3.19

RUN mkdir -p /usr/app
WORKDIR /usr/app
ENV PATH /usr/app/node_modules/.bin:$PATH
COPY ./package*.json ./

RUN npm install --silent
RUN npm install @vue/cli -g
RUN npm install -g http-server
COPY ./ ./
RUN npm run build

CMD [ "http-server", "dist" ]

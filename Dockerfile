FROM node:14.16.1-alpine

USER root

WORKDIR /usr/movue.it/app

RUN apk update && apk add bash

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
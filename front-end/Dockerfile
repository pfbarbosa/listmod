FROM ubuntu:latest AS builder

USER root

WORKDIR /home/app

COPY listmod /home/app

RUN apt-get update

RUN apt-get -y install nodejs

RUN apt-get install npm -y

RUN npm install

RUN npm install -g @angular/cli

RUN npm install primeng --save

RUN npm install primeicons --save

RUN npm install @angular/animations --save --force

RUN ng build

RUN mkdir /opt/deploy && \
    cp -rf /home/app/dist/listmod /opt/deploy

FROM nginx:latest

COPY --from=builder /home/app/dist/listmod /usr/share/nginx/html

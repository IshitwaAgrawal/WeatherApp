FROM node:12 as build-stage

RUN mkdir /usr/app

COPY . /usr/app

WORKDIR /usr/app

RUN npm i

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm run build

#Stage 2

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build-stage /usr/app/build .

ENTRYPOINT ["nginx","-g","daemon off;"]

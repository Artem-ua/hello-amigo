# syntax=docker/dockerfile:1
FROM node:18.16.1-slim
COPY . /app
WORKDIR /app
RUN rm -fr node_modules
RUN npm install
EXPOSE 3000
CMD node index.js
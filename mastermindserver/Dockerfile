FROM node:alpine3.20
WORKDIR /mastermindserver
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 80
ENV PATH=$PATH:/mastermindserver/node_modules/.bin
CMD [ "nodemon","src/index.js" ]
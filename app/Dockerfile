FROM node:20

CMD apt update
CMD apt install telnet

WORKDIR /app/user-api

COPY package.json ./
COPY ./ ./
RUN npm install

EXPOSE 3000

CMD node server
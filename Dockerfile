FROM node:20

WORKDIR /work

COPY package.json ./
COPY index.js ./
RUN npm install

EXPOSE 3000

CMD node index
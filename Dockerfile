FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY app.js server.js ./

COPY public ./public

EXPOSE 3000

CMD ["node", "server.js"]
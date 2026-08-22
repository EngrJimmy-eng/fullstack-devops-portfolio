FROM node:22-alpine

WORKDIR /app

RUN npm install -g npm@12.0.2

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 5000

CMD ["npm", "start"]

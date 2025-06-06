FROM node:22-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json*  ./

RUN  npm ci

FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

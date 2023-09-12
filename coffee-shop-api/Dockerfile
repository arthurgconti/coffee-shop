FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]

COPY dist ./dist
COPY ./package*.json .

EXPOSE 3000

RUN npm ci --only=production

CMD ["npm","run","start:prod"]


FROM node:16.15.0-alpine

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api

WORKDIR /home/node/api

COPY package.json prisma/* ./

USER node
RUN npm i 
COPY --chown=node:node . .


RUN npm run build

EXPOSE 3333

CMD ["npm", "run", "start:migrate:prod"]
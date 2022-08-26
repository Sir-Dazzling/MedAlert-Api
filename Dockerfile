FROM node:17

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY yarn.lock ./

RUN yarn

# Bundle app source
COPY . .

# COPY .env.staging .env

RUN yarn build

ENV NODE_ENV staging

EXPOSE 8080
CMD ["node", "dist/src/index.js"]
USER node
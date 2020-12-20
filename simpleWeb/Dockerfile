# specify a base image
FROM node:alpine

# place all files into the /usr/app to avoid override original config
WORKDIR /usr/app

# install all dependencies
COPY ./ ./
RUN npm install

#define the default command line
CMD ["npm", "start"]
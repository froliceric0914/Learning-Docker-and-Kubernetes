# specify a base image
FROM node:alpine

# place all files into the /usr/app to avoid override original config
WORKDIR /usr/app

# use Cache, only rebuild the project when making change to the package.json
COPY ./package.json ./
# install all dependencies
RUN npm install

COPY ./ ./


#define the default command line
CMD ["npm", "start"]
# use an existing Dokcer image as a base
FROM alpine

# download and install all dependencies
RUN apk add --update redis
RUN apk add --update gcc


# tell the image what to do when it starts as a container
CMD ["redis-server"]

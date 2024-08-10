#download node version 18
FROM node:18

#setting the working directory to the container 
WORKDIR /usr/src/app

# copy the package.json to the working directory
COPY package*json ./

# RUN npm to install the packgaes into the container
RUN npm install

# copy all the file(from our local) to the working directory
COPY . .

# Our microservices will run into port 8080 in the container will be accessible outside
EXPOSE 8080

#To start my application
CMD ["node", "server.js"]
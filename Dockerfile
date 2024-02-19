FROM node:alpine

WORKDIR /usr/app

# Copying project files
COPY ./ /usr/app/

# Installing packages
RUN yarn

# Vite server port
EXPOSE 5173

# Yarn start command
CMD ["yarn", "start"]
FROM node:16

# Create directory
WORKDIR /usr/src/app

# Install all dependencies
COPY package*.json ./

RUN npm install

# Bundle source
COPY . .

# Expose port
EXPOSE 7500

CMD ["node", "server.js"]

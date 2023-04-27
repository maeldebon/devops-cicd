# Use the official Node.js image as a base
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the app source code
COPY . .

# Build the React app for production
RUN npm run build

# Use the official Nginx image as a base for the runtime
FROM nginx:stable-alpine

# Copy the React build output to the Nginx html directory
COPY --from=0 /app/build /usr/share/nginx/html

# Copy the Nginx configuration file (if you have one)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the web server
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]


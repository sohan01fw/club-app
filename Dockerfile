# Use an appropriate base image (e.g., node)
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

#copying all file
COPY . .

# Expose the port
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "run", "dev"]

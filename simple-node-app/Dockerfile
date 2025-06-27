# 1️⃣ Build stage
FROM node:18 AS builder

WORKDIR /appsource

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy app source code
COPY . .

# 2️⃣ Production stage
FROM node:18-slim

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /appsource /app

# Expose app port
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]

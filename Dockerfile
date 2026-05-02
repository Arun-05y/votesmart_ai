FROM node:18

# Set working directory
WORKDIR /app

# Copy only backend files
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy rest of backend code
COPY backend/ .

# Cloud Run requirement
ENV PORT=8080

# Expose port
EXPOSE 8080

# Start server
CMD ["node", "server.js"]

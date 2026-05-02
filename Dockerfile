# Stage 1: Build the React frontend
FROM node:18 AS frontend-build
WORKDIR /app/frontend
# Copy package files and install dependencies
COPY frontend/package*.json ./
RUN npm install
# Copy the rest of the frontend code and build
COPY frontend/ ./
RUN npm run build

# Stage 2: Build the Node.js backend
FROM node:18 AS backend-build
WORKDIR /app/backend
# Copy package files and install dependencies
COPY backend/package*.json ./
RUN npm install
# Copy the rest of the backend code
COPY backend/ ./

# Stage 3: Production image
FROM node:18
WORKDIR /app

# Copy built frontend assets
COPY --from=frontend-build /app/frontend/dist /app/frontend/dist

# Copy backend application
COPY --from=backend-build /app/backend /app/backend

# Set the working directory to where the server.js is located
WORKDIR /app/backend

# Cloud Run requirements
ENV PORT=8080
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]

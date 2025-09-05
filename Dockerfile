

# Stage 1: Build frontend
FROM node:20 as frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/. ./
RUN npm run build

# Stage 2: Build backend and serve frontend
FROM node:20 as backend
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/. ./
# Copy built frontend files into backend's public directory
COPY --from=frontend-build /app/frontend/public ./public

EXPOSE 5000
CMD ["npm", "start"]

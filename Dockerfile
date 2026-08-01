# Stage 1: build the React app
FROM node:20-alpine AS builder

# Declare build-time environment variables
ARG REACT_APP_BASE_URL

# Set as env vars so they're available to `npm run build`
ENV REACT_APP_BASE_URL=$REACT_APP_BASE_URL

WORKDIR /app

# Copy package files first for better layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source and build
COPY . .
RUN npm run build

# Stage 2: serve the built files with Nginx
FROM nginx:alpine

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output into nginx's serving directory
COPY --from=builder /app/build /usr/share/nginx/html

# Copy a custom nginx config (needed for React Router to work — see below)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

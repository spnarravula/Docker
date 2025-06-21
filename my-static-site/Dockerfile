# ========================
# Stage 1 — Prepare Static Files
# ========================
FROM alpine AS build

# Set working directory
WORKDIR /src

# Copy all HTML files into container
COPY html/ ./

# ========================
# Stage 2 — Nginx Server
# ========================
FROM nginx:alpine

# Remove default nginx html files
RUN rm -rf /usr/share/nginx/html/*

# Copy HTML files from build stage to Nginx html directory
COPY --from=build /src/ /usr/share/nginx/html/

# Optional: Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

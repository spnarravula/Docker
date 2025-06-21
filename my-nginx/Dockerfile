# Use official nginx image from Docker Hub
FROM nginx:alpine

# Copy custom web content to nginx's default html folder
COPY index.html /usr/share/nginx/html/

# Expose port 80 to host
EXPOSE 80

# Start nginx (this is default in nginx image, so optional)
CMD ["nginx", "-g", "daemon off;"]


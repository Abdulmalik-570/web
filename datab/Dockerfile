# Use an official MongoDB image as a parent image
FROM mongo:latest

COPY . .
# Expose the default MongoDB port
EXPOSE 27017

# Set the data directory for MongoDB
VOLUME ["/data/db"]

# Start MongoDB
CMD ["mongod"]

# Base image
FROM rabbitmq:3-management-alpine

# Set environment variables
ENV RABBITMQ_DEFAULT_USER=guest
ENV RABBITMQ_DEFAULT_PASS=guest
ENV RABBITMQ_NODENAME=rabbitmq
ENV RABBITMQ_DEFAULT_VHOST=vhost
# Expose ports
EXPOSE 5672 15672

 
CMD ["rabbitmq-server"]

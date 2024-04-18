FROM jenkins/jenkins:lts

USER root

# Install necessary packages for adding a repository
RUN apt-get update -qq && apt-get install -qqy \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    software-properties-common

# Add Docker’s official GPG key
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Set up the stable repository explicitly for Debian bullseye
RUN echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian bullseye stable" > /etc/apt/sources.list.d/docker.list

# Update package listings and attempt to install Docker
RUN apt-get update -qq && apt-cache madison docker-ce docker-ce-cli containerd.io
RUN apt-get install -qqy docker-ce docker-ce-cli containerd.io || echo "Docker packages not found, skipping installation."

# Manually create Docker group and add Jenkins user to it if the installation of Docker was skipped
RUN getent group docker || groupadd docker
RUN usermod -aG docker jenkins

# Switch back to the jenkins user
USER jenkins

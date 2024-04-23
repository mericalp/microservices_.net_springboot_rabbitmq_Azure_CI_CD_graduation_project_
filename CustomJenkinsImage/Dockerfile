FROM jenkins/jenkins:lts

USER root

# Install necessary packages for adding a repository
RUN apt-get update -qq && apt-get install -qqy \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    software-properties-common
# Install Docker CLI
RUN apt-get update -qq && apt-get install -qqy docker-ce-cli

# Install Docker Compose (optional)
RUN curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose \
    && chmod +x /usr/local/bin/docker-compose

# Add Docker’s official GPG key
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Set up the stable repository explicitly for Debian bullseye
RUN echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian bullseye stable" > /etc/apt/sources.list.d/docker.list

# Update package listings and attempt to install Docker
RUN apt-get update -qq && apt-cache madison docker-ce docker-ce-cli containerd.io
RUN apt-get install -qqy docker-ce docker-ce-cli containerd.io || echo "Docker packages not found, skipping installation."

# kubectl
RUN curl -L https://storage.googleapis.com/kubernetes-release/release/${KUBE_LATEST_VERSION}/bin/linux/amd64/kubectl -o /usr/local/bin/kubectl \
    chmod +x /usr/local/bin/kubectl 

# Manually create Docker group and add Jenkins user to it if the installation of Docker was skipped
RUN getent group docker || groupadd docker
RUN usermod -aG docker jenkins

# Switch back to the jenkins user
USER jenkins

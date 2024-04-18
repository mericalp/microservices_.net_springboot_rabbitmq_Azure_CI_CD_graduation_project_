FROM jenkins/jenkins:lts

USER root

# Install necessary packages
RUN apt-get update -qq && apt-get install -qqy \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    software-properties-common \
    lsb-release

# Add Docker’s official GPG key
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -

# Set up the stable repository
RUN add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/debian \
    $(lsb_release -cs) stable"

# Install Docker CE
RUN apt-get update -qq && apt-get install -qqy docker-ce

# Add Jenkins user to the Docker group
RUN usermod -aG docker jenkins

# Switch back to the jenkins user
USER jenkins

pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'mericalpp/animal_service'
        DOCKER_CREDENTIALS_ID = 'dockerhub_mericalpp'
        DIRECTORY = 'Services'  // Make sure this path is correct and relative to where the Jenkinsfile is located.
    }
    stages {
        stage('Build Docker Image') {
            steps {
                dir("${DIRECTORY}") {
                    script {
                        // Build the Docker image using shell commands
                        sh "docker build -t ${DOCKER_IMAGE}:${env.BUILD_NUMBER} ."
                    }
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    // Push the Docker image using shell commands
                    sh "echo $DOCKER_HUB_PASSWORD | docker login --username $DOCKER_HUB_USERNAME --password-stdin"
                    sh "docker push ${DOCKER_IMAGE}:${env.BUILD_NUMBER}"
                }
            }
        }
    }
    post {
        always {
            script {
                // Remove the Docker image to clean up space
                sh "docker rmi ${DOCKER_IMAGE}:${env.BUILD_NUMBER}"
            }
        }
    }
}

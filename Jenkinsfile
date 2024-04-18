
pipeline {
    agent any
    environment {
        // Define the Docker image name and the Docker Hub credentials ID
        DOCKER_IMAGE = 'mericalpp/animal_service'
        DOCKER_CREDENTIALS_ID = 'dockerhub_mericalpp'
        // Specify the directory where your Dockerfile is located
        DIRECTORY = 'Services/Dockerfile'
    }
    stages {
        stage('Build Docker Image') {
            steps {
                // Change to the directory containing the Dockerfile
                dir("${DIRECTORY}") {
                    script {
                        // Build the Docker image and tag it with the build number
                        docker.build("${DOCKER_IMAGE}:${env.BUILD_NUMBER}")
                    }
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_CREDENTIALS_ID}") {
                        docker.image("${DOCKER_IMAGE}:${env.BUILD_NUMBER}").push()
                    }
                }
            }
        }
    }
    post {
        always {
            script {
                // Optionally remove the Docker image to clean up the Jenkins agent
                docker.image("${DOCKER_IMAGE}:${env.BUILD_NUMBER}").remove()
            }
        }
    }
}
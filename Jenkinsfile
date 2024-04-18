pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'mericalpp/animal_service'
        DOCKER_CREDENTIALS_ID = 'dockerhub_mericalpp'
        DIRECTORY = 'Services'
        DOCKER_HUB_TOKEN = credentials('dockerhub_mericalpp')
    }
    stages {
        stage('Build Docker Image') {
            steps {
                dir("${DIRECTORY}") {
                    script {
                        sh "docker build -t ${DOCKER_IMAGE}:${env.BUILD_NUMBER} ."
                    }
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    // Log in to Docker Hub using the access token
                    sh "echo $DOCKER_HUB_TOKEN | docker login --username $DOCKER_HUB_USERNAME --password-stdin"
                    sh "docker push ${DOCKER_IMAGE}:${env.BUILD_NUMBER}"
                }
            }
        }
    }
    post {
        always {
            script {
                // Attempt to remove the Docker image to clean up space
                sh "docker rmi ${DOCKER_IMAGE}:${env.BUILD_NUMBER}" // This might need handling for cases where Docker isn't found
            }
        }
    }
}

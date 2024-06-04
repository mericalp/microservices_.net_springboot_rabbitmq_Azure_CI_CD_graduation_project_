pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'mericalpp/ui_animal_app'
        DOCKER_CREDENTIALS_ID = 'dockerhub_mericalpp2'
        DIRECTORY = 'client'
        DOCKER_TAG = 'jenkinspush_demo'
        KUBE_CONFIG = '/root/.kube/config'
        TF_LOG = 'DEBUG'
    }

    stages {
        stage('Docker Login') {
            steps {
                dir("${DIRECTORY}") {
                    script {
                        withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                            sh "docker login --username $DOCKER_HUB_USERNAME --password $DOCKER_HUB_PASSWORD"
                           
                        }
                    }
                }
            }
        }

             
        stage('Build and Push Docker Image') {
            steps {
               dir("${DIRECTORY}") {
                    script {
                          sh "docker buildx build --platform linux/amd64 -t ${DOCKER_IMAGE}:${DOCKER_TAG} . --push"
                    }
                }
            }
        }

        stage('Terraform Init') {
            steps {
                dir('terraform') {
                    script {
                        sh 'terraform init'
                    }
                }
            }
        }

         
    }

    post {
        always {
            script {
                sh "docker rmi ${DOCKER_IMAGE}:${DOCKER_TAG}" 
            }
        }
    }
}

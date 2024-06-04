pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'mericalpp/ui_animal_app'
        DOCKER_CREDENTIALS_ID = 'dockerhub_mericalpp'
        DIRECTORY = 'client'
        DOCKER_TAG = 'jenkinspush_demo'
        KUBE_CONFIG = '/root/.kube/config'
        TF_LOG = 'DEBUG'
    }

    stages {
        // stage('Push Docker Image') {
        //     steps {
        //         dir("${DIRECTORY}") {
        //             script {
        //                 sh "docker login --username $DOCKER_HUB_USERNAME --password $DOCKER_HUB_PASSWORD"
        //                 sh "docker buildx build --platform linux/amd64 -t ${DOCKER_IMAGE}:${DOCKER_TAG} . --push"
        //             }
        //         }
        //     }
        // }

        stage('Terraform Init') {
            steps {
                dir('terraform') {
                    script {
                        sh 'terraform init'
                    }
                }
            }
        }

        stage('Terraform Plan') {
            steps {
                dir('terraform') {
                    script {
                        sh 'terraform plan'
                    }
                }
            }
        }

        // stage('Terraform Apply') {
        //     steps {
        //         dir('terraform') {
        //             script {
        //                 sh 'terraform apply -auto-approve -var="access_key=${AZURE_STORAGE_ACCOUNT_KEY}"'
        //             }
        //         }
        //     }
        // }
    }

    post {
        always {
            script {
                sh "docker rmi ${DOCKER_IMAGE}:${DOCKER_TAG}" 
            }
        }
    }
}

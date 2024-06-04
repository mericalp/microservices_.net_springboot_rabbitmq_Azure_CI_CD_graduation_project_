pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'mericalpp/ui_animal_app'
        DOCKER_CREDENTIALS_ID = 'dockerhub_mericalpp'
        DIRECTORY = 'client'
        DOCKER_TAG = 'jenkinspush_demo'
        KUBE_CONFIG = '/root/.kube/config'
        // TF_VAR_storage_account_access_key değişkenini withCredentials içinde tanımlayacağız
    }

    stages {
        // stage('Push Docker Image') {
        //     steps {
        //         dir("${DIRECTORY}") {
        //             script {
        //                 withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
        //                     sh "docker login --username $DOCKER_HUB_USERNAME --password $DOCKER_HUB_PASSWORD"
        //                     sh "docker buildx build --platform linux/amd64 -t ${DOCKER_IMAGE}:${DOCKER_TAG} . --push"
        //                 }
        //             }
        //         }
        //     }
        // }

        stage('Terraform Init') {
            steps {
                dir('terraform') {
                    script {
                        withCredentials([string(credentialsId: 'my_credentials_for_azure', variable: 'TF_VAR_storage_account_access_key')]) {
                            sh 'terraform init'
                        }
                    }
                }
            }
        }

        stage('Terraform Plan') {
            steps {
                dir('terraform') {
                    script {
                        withCredentials([string(credentialsId: 'my_credentials_for_azure', variable: 'TF_VAR_storage_account_access_key')]) {
                            sh 'terraform plan'
                        }
                    }
                }
            }
        }

        // stage('Terraform Apply') {
        //     steps {
        //         dir('terraform') {
        //             script {
        //                 withCredentials([string(credentialsId: 'my_credentials_for_azure', variable: 'TF_VAR_storage_account_access_key')]) {
        //                     sh 'terraform apply -auto-approve'
        //                 }
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

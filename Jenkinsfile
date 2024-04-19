pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'mericalpp/animal_service'
        DOCKER_CREDENTIALS_ID = 'dockerhub_mericalpp'
        DIRECTORY = 'Services'
        KUBE_CONFIG = '/var/jenkins_home/.kube/config'
        K8S_DIR = 'k8s/animal_service' // Kubernetes files directory
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
                    withCredentials([usernamePassword(credentialsId: 'dockerhub_mericalpp', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                        sh "echo $DOCKER_HUB_PASSWORD | docker login --username $DOCKER_HUB_USERNAME --password-stdin"
                        sh "docker push ${DOCKER_IMAGE}:${env.BUILD_NUMBER}"
                    }
                }
            }
        }
        stage('Update Kubernetes Deployment') {
            steps {
                dir("${K8S_DIR}") {
                    script {
                        sh "kubectl --kubeconfig=${KUBE_CONFIG} set image deployment/animal-service animal-service=${DOCKER_IMAGE}:${env.BUILD_NUMBER}"
                        sh "kubectl --kubeconfig=${KUBE_CONFIG} apply -f ."
                    }
                }
            }
        }
    }

     
    post {
        always {
            script {
                sh "docker rmi ${DOCKER_IMAGE}:${env.BUILD_NUMBER}" 
            }
        }
    }
}

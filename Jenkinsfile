pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'mericalpp/animal_service'
        DOCKER_CREDENTIALS_ID = 'dockerhub_mericalpp'
        DIRECTORY = 'Services'
        DOCKER_TAG = 'lts'
        KUBE_CONFIG = '/root/.kube/config'
        K8S_DIR = 'k8s/animal_service' // Kubernetes files directory
    }
    stages {
      
        stage('Push Docker Image') {
            steps {
               dir("${DIRECTORY}") {
                    script {
                        withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                            sh "docker login --username $DOCKER_HUB_USERNAME --password $DOCKER_HUB_PASSWORD"
                            sh "docker buildx build --force-rm -t ${DOCKER_IMAGE}:${DOCKER_TAG} . --push"
                        }
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


     // stage('Update Kubernetes Deployment') {
        //     steps {
        //         dir("${K8S_DIR}") {
        //             script {
        //                 sh "kubectl --kubeconfig=${KUBE_CONFIG} set image deployment/animal-service animal-service=${DOCKER_IMAGE}:${env.BUILD_NUMBER}"
        //                 sh "kubectl --kubeconfig=${KUBE_CONFIG} apply -f ."
        //             }
        //         }
        //     }
        // }
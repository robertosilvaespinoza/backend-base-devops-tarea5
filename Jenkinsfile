pipeline{
    agent any 

environment {
        DOCKER_IMAGE = "mi-proyecto:${env.BUILD_NUMBER}"
        REGISTRY_URL = "https://nexus.tu-dominio.com/repository/docker"
        SONARQUBE_URL = "http://sonarqube.tu-dominio.com"
        SONARQUBE_SCANNER = "SonarQube Scanner" // El nombre del scanner configurado en Jenkins
        K8S_DEPLOYMENT = "mi-deployment" // Nombre del deployment en Kubernetes
        K8S_NAMESPACE = "mi-namespace" // Namespace en Kubernetes
        DOCKER_CREDENTIALS_ID = 'docker-credentials' // ID de las credenciales de Docker en Jenkins
        KUBERNETES_CREDENTIALS_ID = 'k8s-credentials' // ID de las credenciales de Kubernetes en Jenkins
    }

    stages {
        stage('Instalar dependencias') {
            steps {
                echo 'Instalando dependencias...'
                sh 'npm install'
            }
        }
    }

}
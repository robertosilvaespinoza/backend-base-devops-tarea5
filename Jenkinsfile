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

        stage('Testing') {
            steps {
                echo 'Ejecutando pruebas...'
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Construyendo el proyecto...'
                sh 'npm run build'
            }
        }


        stage('Construir imagen Docker') {
            steps {
                script {
                    echo 'Construyendo imagen Docker...'
                    sh 'sudo docker build -t backend-base-devops-tarea5 .'
                }
            }
        }
    }
}
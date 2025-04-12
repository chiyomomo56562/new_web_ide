pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'new_web_ide'
        DOCKER_TAG = "${BUILD_NUMBER}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh '''
                        # Node.js 버전 확인
                        node -v
                        
                        # crypto polyfill 설치
                        npm install crypto-browserify
                        
                        # 빌드 실행
                        npm install
                        npm run build
                    '''
                }
            }
        }
        
        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker-compose build'
            }
        }
        
        stage('Test') {
            steps {
                dir('frontend') {
                    sh 'npm test'
                }
                dir('backend') {
                    sh 'npm test'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
} 
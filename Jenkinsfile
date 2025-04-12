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
                        
                        # package.json 수정 - vite 버전 다운그레이드
                        npm install vite@4.5.1 --save-dev
                        
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
                    sh '''
                        # Java 버전 확인
                        java -version
                        
                        # gradlew 파일에 실행 권한 부여
                        chmod +x ./gradlew
                        
                        # Gradle 빌드 실행
                        ./gradlew build
                    '''
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
                    sh '''
                        # gradlew 파일에 실행 권한 부여
                        chmod +x ./gradlew
                        
                        # Gradle 테스트 실행
                        ./gradlew test
                    '''
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
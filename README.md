# new_web_ide

## Jenkins CI/CD 설정 방법

### 필수 요구사항
- Jenkins 서버
- Docker 및 Docker Compose
- Node.js 및 npm
- Git

### Jenkins 설정 단계

1. Jenkins 서버에 필요한 플러그인 설치:
   - Git Integration
   - Docker Pipeline
   - NodeJS Plugin
   - Pipeline: GitHub

2. Jenkins에서 새 파이프라인 프로젝트 생성:
   - Jenkins 대시보드에서 "새로운 Item" 선택
   - 파이프라인 이름 입력 (예: new_web_ide)
   - "Pipeline" 선택

3. 파이프라인 설정:
   - "Pipeline script from SCM" 선택
   - SCM으로 "Git" 선택
   - Repository URL에 프로젝트 Git 저장소 URL 입력
   - Branch Specifier에 "*/main" 입력 (또는 사용 중인 브랜치)
   - Script Path에 "Jenkinsfile" 입력

4. 빌드 트리거 설정:
   - "Build Triggers" 섹션에서 "GitHub hook trigger for GITScm polling" 선택
   - GitHub 웹훅 설정 (GitHub 저장소 설정 > Webhooks > Add webhook)

5. 환경 변수 설정 (필요한 경우):
   - Jenkins 대시보드 > Manage Jenkins > Configure System
   - "Global properties" 섹션에서 필요한 환경 변수 추가

### 파이프라인 단계 설명

1. Checkout: Git 저장소에서 코드 체크아웃
2. Build Frontend: 프론트엔드 빌드
3. Build Backend: 백엔드 빌드
4. Build Docker Image: Docker 이미지 빌드
5. Test: 프론트엔드 및 백엔드 테스트 실행
6. Deploy: Docker Compose를 사용하여 애플리케이션 배포

### 문제 해결

- 빌드 실패 시 Jenkins 콘솔 로그 확인
- Docker 관련 문제는 Docker 서비스 상태 확인
- 권한 문제는 Jenkins 사용자 권한 확인

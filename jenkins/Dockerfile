FROM jenkins/jenkins:lts

USER root

# 기본 패키지 업데이트 및 필요한 도구 설치
RUN apt-get update && \
    apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    wget

# Docker 저장소 키 및 저장소 추가
RUN install -m 0755 -d /etc/apt/keyrings && \
    curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg && \
    chmod a+r /etc/apt/keyrings/docker.gpg && \
    echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
    $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
    tee /etc/apt/sources.list.d/docker.list > /dev/null

# Docker CLI 설치
RUN apt-get update && \
    apt-get install -y docker-ce-cli

# Node.js 설치
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

USER jenkins 
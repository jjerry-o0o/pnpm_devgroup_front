# 빌드 환경 -slim:최소 패키지만 포함. -alpine:초경량 Alpine Linux 기반인 경우
FROM node:24.5.0-slim AS builder

# pnpm 설치
RUN npm install -g pnpm
WORKDIR /app

# 추후 빌드시 캐시 사용하도록 하기 위해 pnpm 작업 먼저 처리
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 전체 소스 copy & build
COPY . .
RUN pnpm build

#
FROM nginx:alpine

# 위에서 빌드된 내용물 가져오기
COPY --from=builder /app/dist /usr/share/nginx/html

# 외부 포트 80
EXPOSE 80

# 데몬이 백그라운드로 가지 않도록 off
CMD ["nginx", "-g", "daemon off;"]
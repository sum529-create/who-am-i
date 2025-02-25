# MBTI 테스트 웹 애플리케이션

## 프로젝트 소개
📆 프로젝트 기간 : 2025.02.20 ~ 2025.02.25

이 웹 애플리케이션은 사용자의 MBTI(Myers-Briggs Type Indicator) 성격 유형을 테스트하고 분석할 수 있는 서비스입니다. 16가지 성격 유형 중 사용자의 고유한 성격 특성을 발견하고 이해할 수 있습니다.


## 프로젝트 사용 기술 💻

### Environment
![React](https://img.shields.io/badge/-React-61DAFB?&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?&logo=javascript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?&logo=tailwindcss&logoColor=white)

### State Management
![Zustand](https://img.shields.io/badge/-Zustand-FFD700?&logo=react&logoColor=black)
![Tanstack Query](https://img.shields.io/badge/-Tanstack_Query-FF4154?&logo=reactquery&logoColor=white)

### Libraries
![Axios](https://img.shields.io/badge/-Axios-5A29E4?&logo=axios&logoColor=white)
![React Router](https://img.shields.io/badge/-React_Router-CA4245?&logo=reactrouter&logoColor=white)
![React Toastify](https://img.shields.io/badge/-React_Toastify-3498DB?&logo=react&logoColor=white)
![Headless UI](https://img.shields.io/badge/-Headless_UI-66E3FF?&logo=headlessui&logoColor=black)

### Tools
![Git](https://img.shields.io/badge/-Git-F05032?&logo=git&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/-VS_Code-007ACC?&logo=visualstudiocode&logoColor=white)

### Deploy
![Vercel](https://img.shields.io/badge/-Vercel-000000?&logo=vercel&logoColor=white)
![Glitch](https://img.shields.io/badge/-Glitch-3333FF?&logo=glitch&logoColor=white)

## 주요 기능

- 사용자 회원가입 및 로그인
- MBTI 성격 테스트 
- 개인 MBTI 결과 저장 및 조회
- 프로필 관리
- 테스트 결과 공유 기능 (링크복사 / 페이스북 / 카카오톡)

## 프로젝트 특징

🔒 공유하기 지원 (카카오, 페이스북)

📱 반응형 웹 디자인

🎨 Tailwind CSS를 활용한 모던한 UI

🔍 성격 유형 분석 및 인사이트 제공

## 주요 라이브러리 활용

### Headless UI
- 모달, 드롭다운 등 접근성 높은 UI 컴포넌트 구현
- 스타일링의 자유도가 높은 무헤드(Headless) 컴포넌트 활용

### Tanstack Query
- 서버 상태 관리 및 비동기 데이터 처리
- 자동 캐싱, 동기화, 백그라운드 업데이트 지원

### Zustand
- 간단하고 빠른 전역 상태 관리
- 최소한의 보일러플레이트로 효율적인 상태 관리

### React Toastify
- 사용자 알림을 위한 간편하고 스타일리시한 토스트 메시지 구현
- 다양한 알림 유형 (성공, 오류, 경고 등) 지원
- 애니메이션 및 커스터마이징 가능한 알림 컴포넌트
- 로그인, 회원가입, 프로필 업데이트 등 주요 액션에 활용

## 백엔드 서버

### JSON Server
- **플랫폼**: Glitch
- **목적**: 임시 데이터베이스 및 API 제공
- **배포 URL**: [Glitch JSON Server URL]

> **참고**: 이 JSON 서버는 개발 및 프로토타이핑 목적으로 사용됩니다.

## 프로젝트 구조

```
src/
├── api/           # API 관련 인스턴스 및 호출 함수
├── assets/        # 정적 자산
├── components/    # 컴포넌트들
├── constants/     # 상수 
├── data/          # 정적 데이터
├── hooks/         # 커스텀 훅
├── layout/        # 레이아웃 컴포넌트
├── pages/         # 페이지 컴포넌트
├── shared/        # 공유 컴포넌트 및 라우터
├── styles/        # 스타일 관련 파일
├── utils/         # 유틸리티 함수
└── zustand/       # 전역 상태 관리
```

## 시작하기

### 필수 조건
- Node.js 20.x 이상
- pnpm

### 설치 방법

1. 저장소 클론
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. 의존성 설치
```bash
pnpm install
```

3. 환경변수 설정
- `.env` 파일을 생성하고 필요한 환경변수 추가
  - `VITE_APP_AUTH_API_URL`
  - `VITE_APP_JSON_API_URL`
  - `VITE_APP_KAKAO_API_KEY`

4. 개발 서버 실행
```bash
pnpm run dev
```

## 빌드

```bash
pnpm run build
```
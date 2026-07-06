# 🖊️ 모나미(Monami) 홈페이지 클론 코딩

모나미 공식 브랜드스토어의 핵심 사용자 경험을 재해석하여 구현한 **React + TypeScript** 기반의 프론트엔드 모듈러 웹 애플리케이션입니다.

---

## 🛠️ 기술 스택 (Tech Stack)

- **Library**: React 18, React Router DOM v6
- **Language**: TypeScript (strict type checking)
- **Styling**: TailwindCSS v4, Custom Base CSS
- **Build Tool**: Vite
- **Icons**: Lucide React

---

## 🌟 핵심 기능 및 구현 (Core Features)

### 1. 동적 데이터 라우팅 (Dynamic Routing)

- `useParams` 훅을 활용한 단일 템플릿 상세 페이지(`DetailPage.tsx`) 아키텍처 구현
- 상품 클릭 시 고유 `id` 주소값을 통해 단일 템플릿으로 수십 개의 펜 상품 정보를 0.1초 만에 분기 렌더링

### 2. 하드웨어 가속 "MY CART" 사이드 드로어

- GPU 가속 애니메이션인 CSS `transform: translate-x` 제어를 이용한 무진동 60fps 슬라이딩 애니메이션 개폐 인터랙션 적용

### 3. 드래그 스크롤 캐러셀 사용성(UX) 고도화

- 마우스 드래그를 이용해 상품들을 슥슥 넘겨볼 수 있는 가로 스크롤 캐러셀 적용
- HTML5 기본 드래그 기능에 의한 이미지 고스트 현상 원천 차단
- 5px 미세 임계값 분기를 구현하여 단순 클릭과 스크롤 드래그 모션을 영리하게 구분

### 4. 1:1 디바이스 반응형 레이아웃

- PC 와이드 해상도부터 모바일 화면까지 픽셀 깨짐이나 잘림 현상 없는 완벽한 유동 그리드 레이아웃 확보

---

## 🏃 시작하기 (Getting Started)

### 설치 (Installation)

```bash
npm install
```

### 로컬 실행 (Local Development)

```bash
npm run dev
```

### 배포 빌드 (Production Build)

```bash
npm run build
```

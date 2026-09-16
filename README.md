# 식탁의 기준 — 외식업 전문 콘텐츠 허브

외식업 인사이트에서 컨설팅, 온라인 강의, 종이책, 상담으로 자연스럽게 이어지는 React 기반 MVP입니다.

## 로컬 실행

1. Node.js 20 이상을 설치합니다.
2. 터미널에서 이 폴더로 이동합니다.
3. `npm install`을 실행합니다.
4. `npm run dev`를 실행하고 표시된 주소를 브라우저에서 엽니다.
5. 배포 전에는 `npm run build`로 오류가 없는지 확인합니다.

## 내용을 바꾸는 곳

- 브랜드명·연락처: `src/data/siteConfig.ts`
- 인사이트 글: `src/data/insights.ts`
- 컨설팅 항목: `src/data/consulting.ts`
- 강의 정보: `src/data/courses.ts`
- 책 정보: `src/data/books.ts`
- 컨설턴트 프로필: `src/data/profile.ts`

현재 이미지는 Unsplash의 원격 예시 이미지입니다. 각 데이터 파일의 `image`, `cover` 주소를 소유한 사진의 경로로 바꾸면 됩니다. 직접 넣을 사진은 `public/images` 폴더를 만든 뒤 저장하고 `/images/파일명.jpg`처럼 입력하세요. 권장 비율은 히어로 4:3, 인사이트 3:2, 프로필 4:5입니다.

## 인사이트 추가

`src/data/insights.ts`의 `base` 목록에 카테고리, 제목, 요약을 추가합니다. 더 긴 실제 원고를 운영할 때는 생성되는 항목의 `content` 구조를 개별 데이터로 전환해 문단을 입력하면 됩니다. `slug`는 상세 페이지 주소로 사용되므로 서로 달라야 합니다.

## Netlify 배포

1. 이 저장소를 GitHub에 올립니다.
2. Netlify에서 **Add new site → Import an existing project**를 선택합니다.
3. 저장소를 연결하면 `netlify.toml` 설정에 따라 빌드 명령 `npm run build`, 결과 폴더 `dist`가 자동 적용됩니다.
4. **Deploy site**를 누릅니다. 새로고침 시 상세 페이지가 404가 되지 않도록 SPA 리다이렉트 설정도 포함되어 있습니다.

> 문의 폼은 화면 동작을 확인하기 위한 MVP 형태입니다. 실제 문의를 받으려면 Netlify Forms 또는 사용하는 이메일/CRM 서비스를 연결해야 합니다.

# 꿈빛마을 — GitHub 업로드용 전체 파일

지금까지 제작한 꿈빛마을 웹사이트의 전체 배포본입니다.

## 포함된 기능

- 마을 중앙에서 시작
- 고정된 3인칭 시점
- 방향키 이동, Space 점프, Enter 입장
- 지도에서 건물 클릭 시 즉시 이동
- Pretendard 적용, 최대 굵기 SemiBold(600)
- 선명한 야간 조명과 동화풍 마을
- 강아지 캐릭터와 나비

## 건물 순서

마을 중앙의 12시 방향부터 시계방향입니다.

1. 자기소개
2. AI 이미지
3. AI 영상
4. AI 노래
5. AI 3D 오브젝트
6. 가상공간

## 포함 콘텐츠

### AI 이미지
- 김밥 요정 캐릭터 시트
- 2026 인천 롤 페스타 포스터

### AI 영상
- 몬스터 결투

### AI 노래
- Forever Free

### AI 3D 오브젝트
- 별빛 수정핵
- 오렐리아 별빛검
- 푸른 수정 성채
- 푸른 수정 군락
- 푸른 기와집
- 에메랄드 양탄자
- 에테르 비행정

### 가상공간
- ShapesXR VR 영상

## GitHub에 업로드하는 방법

1. 이 ZIP 파일을 먼저 압축 해제합니다.
2. 압축을 푼 폴더 안의 파일과 폴더를 모두 선택합니다.
3. GitHub 저장소 최상단에 업로드합니다.
4. 저장소에서 `Settings → Pages`로 이동합니다.
5. `Build and deployment → Source`를 `GitHub Actions`로 선택합니다.
6. Actions 배포가 끝나면 GitHub Pages 주소로 접속합니다.

저장소 최상단에 `index.html`이 바로 보여야 합니다. ZIP 파일 자체만 올리면 사이트가 실행되지 않습니다.

## 반드시 함께 올려야 하는 항목

- `.github/`
- `models/`
- `index.html`
- `house-names.js`
- `gimbap-character-sheet.png`
- `incheon-roll-festa-poster.png`
- `monster-battle.mp4`
- `forever-free.mp3`
- `shapesxr.mp4`
- `.nojekyll`
- `vercel.json`

## 참고

영상과 음악은 브라우저의 자동재생 제한 때문에 방에 들어간 뒤 재생 버튼을 눌러야 합니다.
3D 오브젝트 뷰어와 Pretendard 웹폰트는 외부 CDN을 사용하므로 인터넷 연결이 필요합니다.

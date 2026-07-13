# 꿈빛마을 AI 포트폴리오

방향키로 마을을 이동하며 AI 작업물을 둘러보는 3D 포트폴리오입니다.

AI 영상 공간에는 `몬스터 결투` 영상이, AI 노래 공간에는 `Forever Free`가 포함되어 있습니다.

## 조작 방법

- 이동: 방향키
- 점프: `Space`
- 건물 입장: `Enter`
- 지도 이동: 우측 상단 지도 버튼에서 건물 선택

## GitHub에 업로드하기

1. ZIP 파일의 압축을 풉니다.
2. GitHub에서 새 저장소를 만듭니다.
3. 압축을 푼 **폴더 안의 파일 전체**를 저장소 최상단에 업로드합니다.
4. 변경 내용을 `main` 브랜치에 커밋합니다.

저장소를 열었을 때 `index.html`, `house-names.js`, `assets` 폴더가 바로 보여야 합니다.

## GitHub Pages로 웹에서 확인하기

1. GitHub 저장소의 `Settings`로 이동합니다.
2. 왼쪽 메뉴에서 `Pages`를 선택합니다.
3. `Build and deployment`의 `Source`를 **GitHub Actions**로 선택합니다.
4. 상단 `Actions` 메뉴에서 배포가 완료될 때까지 확인합니다.
5. 배포 후 `https://사용자명.github.io/저장소명/` 주소에서 확인합니다.

이 저장소에는 GitHub Pages 자동 배포 워크플로가 포함되어 있습니다. 이후 파일을 수정해 `main` 브랜치에 올리면 자동으로 다시 배포됩니다.

## Vercel 배포

Vercel에서 `Add New → Project`를 선택한 뒤 이 GitHub 저장소를 연결하고 `Deploy`를 누르면 됩니다. 별도의 빌드 명령은 필요하지 않습니다.

## 로컬 미리보기

```bash
python -m http.server 5500
```

브라우저에서 `http://localhost:5500`으로 접속합니다.

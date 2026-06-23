# Update Guide

## 1. 컨셉아트 교체

현재 컨셉아트는 JPG placeholder입니다. 실제 이미지로 교체할 경우 아래 파일명을 그대로 유지하면 HTML 수정 없이 교체됩니다.

```text
assets/images/light-concept.jpg
assets/images/afterrain-concept.jpg
assets/images/wings-of-l-concept.jpg
```

권장 크기는 1920×1080입니다.

## 2. PDF 교체

각 프로젝트 폴더의 PDF를 같은 파일명으로 덮어쓰기합니다.

```text
assets/pdfs/light/game-mechanics.pdf
assets/pdfs/afterrain/level-design.pdf
assets/pdfs/wings-of-l/development-proposal.pdf
```

## 3. YouTube 영상 연결

각 프로젝트 페이지의 `.video-frame` 부분을 iframe으로 교체하거나 `data-youtube-id` 값을 기준으로 확장하면 됩니다.

## 4. SEO / 공유 이미지

각 페이지 head 안의 항목을 수정합니다.

- `<title>`
- `<meta name="description">`
- `<link rel="canonical">`
- `og:title`
- `og:description`
- `og:image`
- `twitter:title`
- `twitter:description`
- `twitter:image`

`https://your-domain.com`은 실제 배포 도메인으로 교체해야 합니다.

## 5. 파비콘 / 앱 아이콘 교체

기본 아이콘은 `assets/meta/`에 들어 있습니다. 원본 아이콘을 바꾸려면 아래 파일을 512×512 PNG로 교체합니다.

```text
assets/meta/favicon.png
```

함께 들어간 아이콘 세트:

```text
assets/meta/favicon.ico
assets/meta/favicon.svg
assets/meta/favicon-32x32.png
assets/meta/favicon-16x16.png
assets/meta/apple-touch-icon.png
assets/meta/icon-192.png
assets/meta/icon-512.png
assets/meta/site.webmanifest
```

HTML head에는 이미 연결되어 있습니다.


## 6. 메인 카드 레이아웃

메인 페이지는 상단 텍스트 영역과 하단 3분할 카드 영역으로 분리되어 있습니다.
카드 내부에는 프로젝트 구분, 프로젝트명, 짧은 장르 설명만 표시합니다.


## 메인 카드 배경 영상

아래 위치에 MP4 파일을 넣습니다.

```text
assets/videos/light-card.mp4
assets/videos/afterrain-card.mp4
assets/videos/wings-of-l-card.mp4
```

파일명만 유지하면 HTML 수정 없이 교체됩니다.

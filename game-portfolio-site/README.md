# Game Design Portfolio Site v11

김재준 게임 디자인 포트폴리오 사이트입니다. HTML, 순수 CSS, 바닐라 JavaScript만 사용합니다.

## 구조

```text
game-portfolio-site/
├─ index.html                         # 메인 / 프로필 / 프로젝트 카드 3개
├─ projects/
│  ├─ light.html                      # Light 상세 페이지
│  ├─ afterrain.html                  # 쾌청: AfterRain 상세 페이지
│  └─ wings-of-l.html                 # 레오나르의 날개 상세 페이지
├─ assets/
│  ├─ images/
│  │  ├─ light-concept.jpg            # Light 컨셉아트 placeholder
│  │  ├─ afterrain-concept.jpg        # AfterRain 컨셉아트 placeholder
│  │  └─ wings-of-l-concept.jpg       # Wings of L 컨셉아트 placeholder
│  ├─ meta/
│  │  ├─ favicon.ico                 # 브라우저 탭 기본 아이콘
│  │  ├─ favicon.svg                 # 벡터 파비콘
│  │  ├─ favicon.png                 # 512×512 원본 아이콘
│  │  ├─ favicon-32x32.png
│  │  ├─ favicon-16x16.png
│  │  ├─ apple-touch-icon.png        # iOS 홈 화면 아이콘
│  │  ├─ icon-192.png                # Android/PWA 아이콘
│  │  ├─ icon-512.png                # Android/PWA 아이콘
│  │  └─ site.webmanifest
│  └─ pdfs/
│     ├─ light/
│     ├─ afterrain/
│     └─ wings-of-l/
├─ css/style.css
├─ js/site.js
├─ robots.txt
└─ sitemap.xml
```

## 페이지 구조

- 메인: 상단 타이틀 영역 + 하단 3분할 컨셉아트 카드 진입형
- 프로젝트 상세: 컨셉 아트 → 설명 → UE 영상 80% + PDF 목록 20%
- 각 프로젝트 상세 페이지는 개별 title, description, canonical, Open Graph, Twitter Card 메타 태그를 가집니다.

## 수정 위치

- 프로젝트 설명: `projects/*.html`
- 프로젝트 이미지: `assets/images/*-concept.jpg`를 같은 파일명으로 교체
- PDF 교체: `assets/pdfs/{project-id}/` 내부 PDF를 같은 파일명으로 덮어쓰기
- 도메인 반영: 각 HTML의 `https://your-domain.com`을 실제 도메인으로 교체
- 아이콘 교체: `assets/meta/favicon.png`를 512×512 PNG로 교체 후 favicon 세트를 다시 생성


## 메인 카드 배경 영상 교체 위치

```text
assets/videos/
├─ light-card.mp4
├─ afterrain-card.mp4
└─ wings-of-l-card.mp4
```

파일명을 그대로 맞춰 넣으면 메인 프로젝트 카드 배경이 영상으로 재생됩니다. 영상이 없으면 기존 컨셉아트 이미지가 대체 표시됩니다.

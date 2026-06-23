window.PORTFOLIO_PROJECTS = [
  {
    id: "light",
    order: "01",
    menuLabel: "Light",
    title: "LIGHT",
    type: "Personal Project",
    badge: "개인 프로젝트",
    genre: "Online PvPvE Extraction FPS",
    heroLine: "빛이 꺼진 격리 구역에서 루팅, 생존, 탈출을 반복하는 익스트랙션 FPS 프로젝트.",
    summary: "2040년대 근미래를 배경으로 빛과 어둠, 정신력, 전력 복구, 루팅과 탈출을 핵심 플레이 축으로 구성한 개인 기획 프로젝트입니다.",
    role: "시스템 기획 / 콘텐츠 구조 / 프로토타입 설계",
    cover: "assets/images/light-concept.jpg",
    youtubeId: "",
    videoNote: "Light UE 프로토타입 영상의 YouTube ID를 입력하세요.",
    tags: ["PvPvE", "Extraction", "Light/Dark", "Unreal Prototype"],
    points: [
      "MP와 빛/어둠 상태를 이용한 생존 압박 설계",
      "전력 복구, 루팅, 탈출을 연결한 세션 루프",
      "익스트랙션 FPS 기준의 전투·파밍·탈출 구조 설계"
    ],
    docs: makeDocs("light")
  },
  {
    id: "afterrain",
    order: "02",
    menuLabel: "쾌청: AfterRain",
    title: "쾌청: AfterRain",
    type: "Personal Project",
    badge: "개인 프로젝트",
    genre: "Action RPG / Narrative Adventure",
    heroLine: "비의 순환을 잃은 세계에서 결을 정화하고 용린목을 되돌리는 액션 RPG 프로젝트.",
    summary: "무결자, 린, 결, 상, 결화기 개념을 중심으로 지역을 탐색하고 오염된 지역을 회복하는 개인 기획 프로젝트입니다.",
    role: "세계관 기획 / 캐릭터·배경 컨셉 / 전투·레벨 구조 기획",
    cover: "assets/images/afterrain-concept.jpg",
    youtubeId: "",
    videoNote: "쾌청: AfterRain UE 프로토타입 영상의 YouTube ID를 입력하세요.",
    tags: ["Action RPG", "After Rain", "Worldbuilding", "Level Design"],
    points: [
      "무결자, 린, 결, 상을 중심으로 한 세계관 구조",
      "오염된 지역을 정화하고 회복시키는 지역 진행 루프",
      "맑은 하늘과 푸른 자연을 강조하는 반실사 서브컬처 톤"
    ],
    docs: makeDocs("afterrain")
  },
  {
    id: "wings-of-l",
    order: "03",
    menuLabel: "레오나르의 날개",
    title: "레오나르의 날개",
    type: "Team Project",
    badge: "팀 프로젝트",
    genre: "Open World Soulslike Action RPG",
    heroLine: "기계 날개, 갈고리, 메모리 장비를 이용해 수직 도시와 필드를 탐험하는 오픈월드 소울라이크 RPG.",
    summary: "Heat/과열, 기계 날개, 갈고리, 무기·장비·보조 메모리 조합을 중심으로 전투와 탐험을 설계한 팀 프로젝트입니다.",
    role: "메카닉스 기획 / 데이터 구조 / 레벨디자인 / 언리얼 블록아웃",
    cover: "assets/images/wings-of-l-concept.jpg",
    youtubeId: "",
    videoNote: "레오나르의 날개 UE 프로토타입 영상의 YouTube ID를 입력하세요.",
    tags: ["Soulslike", "Open World", "Mechanical Wings", "Heat System"],
    points: [
      "Heat와 과열을 중심으로 한 행동 리스크 설계",
      "갈고리와 기계 날개를 이용한 수직 탐험 구조",
      "베르나 도시 레벨, 승강탑, 기억 저장고 기반 레벨디자인"
    ],
    docs: makeDocs("wings-of-l")
  }
];

function makeDocs(projectId) {
  return [
    {
      key: "development-proposal",
      label: "개발제안서",
      description: "프로젝트 목표, 장르, 핵심 차별점, 개발 범위를 정리합니다.",
      path: `assets/pdfs/${projectId}/development-proposal.pdf`
    },
    {
      key: "story-scenario",
      label: "게임 스토리 & 시나리오",
      description: "세계관, 주요 사건, 캐릭터 목표, 진행 시나리오를 정리합니다.",
      path: `assets/pdfs/${projectId}/story-scenario.pdf`
    },
    {
      key: "character-concept",
      label: "캐릭터컨셉기획서",
      description: "주요 캐릭터의 역할, 외형 방향, 성격, 기능을 정리합니다.",
      path: `assets/pdfs/${projectId}/character-concept.pdf`
    },
    {
      key: "background-concept",
      label: "배경컨셉기획서",
      description: "공간, 지역, 분위기, 랜드마크, 배경 미술 기준을 정리합니다.",
      path: `assets/pdfs/${projectId}/background-concept.pdf`
    },
    {
      key: "game-mechanics",
      label: "게임 메카닉스 기획서",
      description: "입력, 조건, 공식, 판정, 결과값 등 실제 작동 규칙을 정리합니다.",
      path: `assets/pdfs/${projectId}/game-mechanics.pdf`
    },
    {
      key: "content-system",
      label: "게임 콘텐츠 시스템 기획서",
      description: "성장, 보상, 아이템, 콘텐츠 해금, 반복 플레이 구조를 정리합니다.",
      path: `assets/pdfs/${projectId}/content-system.pdf`
    },
    {
      key: "level-design",
      label: "레벨디자인기획서",
      description: "공간 구조, 루트, 체크포인트, 숏컷, 전투 배치를 정리합니다.",
      path: `assets/pdfs/${projectId}/level-design.pdf`
    },
    {
      key: "ui-design",
      label: "게임UI디자인기획서",
      description: "HUD, 메뉴, 피드백, 인터랙션 정보 구조를 정리합니다.",
      path: `assets/pdfs/${projectId}/ui-design.pdf`
    },
    {
      key: "service-plan",
      label: "게임서비스기획서",
      description: "서비스 구조, 운영 흐름, 업데이트 방향, 유저 경험 관리를 정리합니다.",
      path: `assets/pdfs/${projectId}/service-plan.pdf`
    }
  ];
}

/** 원문·구조 참고: http://www.seoulind.co.kr */

export const SITE_SOURCE_LABEL = "서울산업 공식 웹사이트 기준 정리";

export const nav = [
  { num: "01", label: "Products", href: "#products" },
  { num: "02", label: "Company", href: "#company" },
  { num: "03", label: "History", href: "#history" },
  { num: "04", label: "Quality", href: "#quality" },
  { num: "05", label: "R&D", href: "#rnd" },
  { num: "06", label: "Facilities", href: "#facilities" },
  { num: "07", label: "Careers", href: "#careers" },
  { num: "08", label: "Contact", href: "#contact" },
] as const;

export const CINEMATIC_POSTER =
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2400&q=80";

export const CINEMATIC_VIDEO_SRC = "/videos/cinematic.mp4";

export const heroImage = {
  src: "/images/seoulind-main.png",
  alt: "서울산업(주) 공장 및 사옥 전경(공식 홈페이지 메인 비주얼 기반)",
};

export const notice = {
  title: "공지",
  body: "서울산업 웹사이트가 새롭게 리뉴얼되었습니다. (공지 게시 기준)",
};

export const ceoMessage = {
  title: "CEO 인사말",
  body: `고객의 신뢰를 바탕으로 지속가능한 성장 추구 서울산업㈜는 1985년 자동차 부품 정밀 가공 업체로 설립되었습니다. 30년간의 정밀 가공 노하우로 국내 완성차 Maker와 유럽(독일, 이태리), 북/남미(미국, 캐나다, 멕시코), 아시아(일본, 중국) 등 Global Maker와의 견고한 파트너쉽 형성으로 지속적인 수출 향상 기업으로 성장 하고 있습니다. 전 임직원의 끊임없는 연구개발과 신기술 축적으로 고객이 원하는 품질 요구 사양을 명확히 이해하고 최적의 품질 수준을 유지하여 대한민국을 넘어 세계속의 자동차 부품 회사로 발돋움하기 위해 전 임직원이 창의적인 사고와 고객 중심적인 품질 수준으로 보답하도록 하겠습니다. 화합으로 창조하는 기업이라는 경영 철학으로 고객이 원하는 최고의 품질과 사회에 공헌하는 Global Leader 기업이 될 수 있도록 최선을 다하겠습니다.`,
};

export const historyIntro =
  "1985 ~ 현재 새로운 도전, 지속 성장 기업, 글로벌 경쟁력 확보. 자동차 부품 정밀 가공 업체 서울산업의 걸어온 발자취를 안내합니다.";

export const historyMilestones = [
  { date: "1985.05", title: "서울정밀 설립" },
  { date: "1996.11", title: "서울산업(주)으로 회사명 변경" },
  { date: "2001.02", title: "QS9000 / ISO9002 인증 획득" },
  { date: "2004.07", title: "ISO / TS16949 인증 획득" },
  { date: "2005.09", title: "기업부설 연구소 설립" },
  { date: "2006.03", title: "현 부지로 회사 확정 이전" },
  {
    date: "2013.10",
    title: "SQ 인증 획득(열처리-고주파열처리) — 현대모비스㈜",
  },
] as const;

export const customersNote =
  "공식 홈페이지 연혁 페이지에 국내·해외 주요 고객 구분이 안내되어 있습니다. 구체 고객사 명단은 별도 문의 바랍니다.";

export const partnerLineup = [
  {
    name: "Hyundai Mobis",
    href: "http://www.mobis.co.kr",
  },
  {
    name: "KDAC",
    href: "http://www.kdac.co.kr",
  },
  {
    name: "Myunghwa",
    href: "http://www.myunghwa.com",
  },
  {
    name: "Metaldyne",
    href: "http://www.metaldyne.com",
  },
  {
    name: "TRW",
    href: "http://www.trw.com",
  },
  {
    name: "Magna",
    href: "http://www.magna.com",
  },
  {
    name: "Metaldyne",
    href: "http://www.metaldyne.com",
  },
  {
    name: "ThyssenKrupp",
    href: "http://www.thyssenkrupp.com",
  },
  {
    name: "TRW",
    href: "http://www.trw.com",
  },
  {
    name: "Nexteer",
    href: "http://www.nexteer.com",
  },
  {
    name: "Spartan",
    href: "http://www.spartanlmp.com",
  },
  {
    name: "GKN",
    href: "http://www.gkn.com",
  },
] as const;

export const organizationNote =
  "조직도는 공식 홈페이지 기업정보 메뉴에서 확인할 수 있습니다.";

export const qualityPillars = [
  {
    title: "Customer",
    subtitle: "고객",
    body: "고객의 목소리와 고객의 필요 및 요구사항을 지향·실현하는 고객 중심의 일류 기업으로 성장한다.",
  },
  {
    title: "Quality",
    subtitle: "품질",
    body: "우리 모두는 품질 향상을 위한 지속적인 개선 활동으로 완벽 품질을 보장한다.",
  },
  {
    title: "Delivery",
    subtitle: "납기",
    body: "우리 모두는 완벽한 제품을 적기 납품하여 고객 만족을 극대화한다.",
  },
] as const;

export const qualitySystemNote =
  "품질시스템·예방 품질 활동 등 세부 프로세스는 공식 홈페이지 품질보증 메뉴(품질시스템, 예방품질활동)에서 다루고 있으며, 현장 설명·감사 시 상세 자료로 제공됩니다.";

export const qualitySummary = {
  policy:
    "서울산업의 품질보증은 Customer / Quality / Delivery 3대 방침을 중심으로 고객 요구사항 반영, 공정 안정화, 적기 납품을 동시에 달성하는 체계를 지향합니다.",
  operation:
    "개발-시작-양산 단계에서의 사전 검증과 피드백(Feed Back)을 통해 예방 중심의 품질 활동을 수행하며, 연구소/생산/품질 부문의 협업으로 반복 개선을 추진합니다.",
};

export const qualityCertifications = [
  {
    standard: "QS9000 / ISO9002",
    acquired: "2001.02",
    note: "품질 경영 시스템 구축 기반",
  },
  {
    standard: "ISO / TS16949",
    acquired: "2004.07",
    note: "자동차 산업 품질경영 요구 대응",
  },
  {
    standard: "SQ 인증 (열처리-고주파열처리)",
    acquired: "2013.10",
    note: "현대모비스(주) 인증",
  },
] as const;

export const qualityControlPlan = [
  {
    stage: "고객요구/기획",
    key: "요구사항 분석, 개발구상",
    output: "품질 목표/핵심특성 정의",
  },
  {
    stage: "시작설계/시작품",
    key: "시작품 제작·시험·평가",
    output: "부적합 원인 도출, 설계 보완",
  },
  {
    stage: "양산설계",
    key: "피드백 반영, 도면 확정",
    output: "양산 도면 배포, 공정 기준 확정",
  },
  {
    stage: "양산준비/파일럿",
    key: "생산 준비, 파이롯트 생산",
    output: "공정 안정화, 품질 리스크 사전 제거",
  },
  {
    stage: "양산/납품",
    key: "지속 모니터링, 개선활동",
    output: "완벽품질·적기납품·고객만족",
  },
] as const;

export const preventiveQualityActivities = [
  "개발 단계 반복 시험 및 부적합 재검증",
  "시작품/완성품 실험 결과의 관련 부문 Feed Back",
  "양산 이행 전 파이롯트 생산 기반 공정 점검",
  "공정/설계 변경 시 사양 변경 설계 및 재확인",
] as const;

export const qualityAttachments = [
  {
    title: "품질방침 (공식 페이지)",
    href: "http://www.seoulind.co.kr/menu3/menu3_sub1.php",
  },
  {
    title: "품질시스템 (공식 페이지)",
    href: "http://www.seoulind.co.kr/menu3/menu3_sub2.php",
  },
  {
    title: "예방품질활동 (공식 페이지)",
    href: "http://www.seoulind.co.kr/menu3/menu3_sub3.php",
  },
  {
    title: "회사소개 자료(PPTX)",
    href: "http://www.seoulind.co.kr/data/KOREAN-Seoul%20Industry-Company.pptx",
  },
] as const;

export const rndIntro = {
  title: "부품개발",
  lead: "서울산업의 끊임없는 열정과 노력 — 부품 디자인 확정 후 부품 제작을 통해 양산 설계를 거친 뒤, 양산용 부품 준비·시작 단계에서 제작되었던 시작 부품을 통해 발견된 문제점을 양산 설계 과정에서 보완하며, 배포된 양산 도면은 부품을 공급하게 될 부품 업체로 전달됩니다.",
  process: `설계는 부품 전체의 기본 레이아웃 계획, 개개 유닛 계획, 시작 설계, 양산 설계, 생산 후 개선·사양 변경 설계가 있습니다. 시작은 기본 계획이 결정되어 세부 설계 착수 전후에 시작품 제작으로 진행되며, 1회에 한하지 않고 개발 방침이 바뀌거나 시험에서 부적합한 경우 수차례 반복될 수 있습니다. 시험은 시작 부품·완성품 실험으로 목표에 대한 평가와 관련 부문 피드백을 통해 개선되도록 합니다. 연구개발에는 선행 개발(Advanced Development), 선행 시험 연구 단계 등 순수 의미의 R&D 단계가 있으며, 기초 연구와 신기술 개발·적용을 주된 업무로 합니다.`,
};

export const rndPhaseTable = [
  {
    phase: "기획단계",
    planning: "개발 구상",
    start: "-",
    massStart: "양산 이행 확인",
    mass: "-",
  },
  {
    phase: "설계부문",
    planning: "-",
    start: "시작 설계",
    massStart: "양산 설계",
    mass: "-",
  },
  {
    phase: "시작 및 시험",
    planning: "-",
    start: "완성품 제작",
    massStart: "시험 및 평가",
    mass: "-",
  },
  {
    phase: "생산부분",
    planning: "-",
    start: "생산 준비",
    massStart: "파이롯트 생산",
    mass: "양산 제작",
  },
  {
    phase: "판매부분",
    planning: "상품 계획",
    start: "-",
    massStart: "판매 준비",
    mass: "판매",
  },
] as const;

export const facilitiesIntro = {
  productionTitle: "생산설비",
  productionLead:
    "생산/측정설비 메뉴의 생산설비(Ass’y 등)는 공식 사이트에서 안내합니다. 세부 설비 리스트는 현장·제안서 자료를 참고해 주세요.",
  measurementTitle: "측정기 / 시험기",
  measurementLead:
    "사회에 기여하는 기업 — Measurement Facilities (공식 홈페이지 표 기준)",
};

export const measuringEquipment = [
  {
    left: {
      name: "기어측정기",
      spec: "TTI-302",
      maker: "도쿄 테크니컬",
      qty: "1",
    },
    right: {
      name: "형상/조도측정기",
      spec: "SURFCOM-1800D",
      maker: "TOKYO SEMITSU",
      qty: "1",
    },
  },
  {
    left: { name: "기어측정기", spec: "EFR400", maker: "HOFLER", qty: "1" },
    right: { name: "조도측정기", spec: "M4P1", maker: "MRHR", qty: "1" },
  },
  {
    left: { name: "3차원측정기", spec: "ACE-5000", maker: "덕인", qty: "1" },
    right: { name: "조도측정기", spec: "SE-3300", maker: "KOSAKA", qty: "3" },
  },
  {
    left: {
      name: "마이크로비커스",
      spec: "MCC-403ND",
      maker: "WILLSON",
      qty: "1",
    },
    right: { name: "투영기", spec: "PO-324", maker: "MUTUTOYO", qty: "1" },
  },
  {
    left: { name: "로크웰경도기", spec: "SRH-100", maker: "신풍", qty: "1" },
    right: { name: "투영기", spec: "HE-400", maker: "STARRETT", qty: "1" },
  },
  {
    left: {
      name: "로크웰경도기",
      spec: "HR-521",
      maker: "MUTUTOYO",
      qty: "1",
    },
    right: { name: "청정도테스터", spec: "에프텍", maker: "-", qty: "1SET" },
  },
  {
    left: { name: "이차원측정기", spec: "TVA-600", maker: "TRIMOS", qty: "1" },
    right: {
      name: "Semi Auto측정기",
      spec: "ME-AS",
      maker: "국일메카트로닉스",
      qty: "1",
    },
  },
  {
    left: { name: "이차원측정기", spec: "LH-600", maker: "MUTUTOYO", qty: "1" },
    right: {
      name: "전자현미경",
      spec: "DIMIS-M",
      maker: "MUTUTOYO",
      qty: "1",
    },
  },
] as const;

export const careersNote = {
  title: "채용정보 · 복지제도",
  body: "공식 홈페이지 채용정보·복지제도 메뉴가 마련되어 있습니다. 지원 및 세부 복지 안내는 인사 담당자에게 문의해 주세요.",
};

export const contactBlock = {
  addressLine: "경기도 화성시 양감면 요당길 320번길 51",
  postalCode: "(우) 445-934",
  tel: "+82-31-366-1141",
  fax: "+82-31-366-1150",
  mapNote: "찾아오시는 길: 공식 홈페이지 약도·위치 안내를 참고해 주세요.",
  brochureLabel: "회사 소개 자료 (PPTX)",
  brochureHref:
    "http://www.seoulind.co.kr/data/KOREAN-Seoul%20Industry-Company.pptx",
};

export const products = [
  {
    id: "bsm",
    title: "Balance Shaft Module",
    titleKo: "밸런스 샤프트 모듈",
    copy: "엔진 1차 진동을 상쇄해 진동·소음을 줄이고 승차감을 향상시키는 시스템.",
    cover: "/images/product-bsm.png",
    coverAlt: "Balance Shaft Module 카테고리 썸네일",
    sub: [
      {
        id: "housing",
        label: "HOUSING",
        images: [79, 80, 81].map((n) => `/images/products/file_${n}.png`),
      },
    ],
  },
  {
    id: "ev",
    title: "Electric Vehicle",
    titleKo: "전동화(EV) 부품",
    copy: "감속기 윤활 공급 등 전동화 핵심 기능성 부품.",
    cover: "/images/product-ev.png",
    coverAlt: "Electric Vehicle 카테고리 썸네일",
    sub: [
      {
        id: "oil-pump-housing-cover",
        label: "EV OIL PUMP HOUSING/COVER",
        images: [219, 220].map((n) => `/images/products/file_${n}.png`),
      },
      {
        id: "ev-2",
        label: "EV Parts (2)",
        images: [221, 222].map((n) => `/images/products/file_${n}.png`),
      },
    ],
  },
  {
    id: "steering",
    title: "Steering",
    titleKo: "조향 부품",
    copy: "조향 계통 정밀 가공 부품 라인업.",
    cover: "/images/product-steering.png",
    coverAlt: "SteERING 카테고리 썸네일",
    sub: [
      {
        id: "pinion",
        label: "Pinion",
        images: [100, 101, 102].map((n) => `/images/products/file_${n}.png`),
      },
      {
        id: "pinion-shaft",
        label: "Pinion shaft",
        images: [103, 104, 105, 106].map(
          (n) => `/images/products/file_${n}.png`,
        ),
      },
      {
        id: "piston",
        label: "Piston",
        images: [111, 112].map((n) => `/images/products/file_${n}.png`),
      },
      {
        id: "rack-bush",
        label: "Rack bush",
        images: [113, 114, 115].map((n) => `/images/products/file_${n}.png`),
      },
      {
        id: "torsion-bar",
        label: "Torsion bar",
        images: [116, 117].map((n) => `/images/products/file_${n}.png`),
      },
    ],
  },
  {
    id: "powertrain",
    title: "Powertrain",
    titleKo: "파워트레인",
    copy: "파워트레인 관련 부품(END PIECE 등).",
    cover: "/images/product-powertrain.png",
    coverAlt: "Powertrain 카테고리 썸네일",
    sub: [
      {
        id: "end-piece",
        label: "END PIECE",
        images: [118, 119, 120].map((n) => `/images/products/file_${n}.png`),
      },
    ],
  },
  {
    id: "driveline",
    title: "Driveline",
    titleKo: "드라이브라인",
    copy: "동력 전달 계통 — 디스크 캐리어/허브/샤프트 등.",
    cover: "/images/product-driveline.png",
    coverAlt: "Driveline 카테고리 썸네일",
    sub: [
      {
        id: "disk-carrier",
        label: "Disk carrier",
        images: [223, 224].map((n) => `/images/products/file_${n}.png`),
      },
      {
        id: "hub",
        label: "Hub",
        images: [124, 125].map((n) => `/images/products/file_${n}.png`),
      },
      {
        id: "input-shaft",
        label: "Input shaft",
        images: [126, 127].map((n) => `/images/products/file_${n}.png`),
      },
      {
        id: "shaft",
        label: "Shaft",
        images: [225, 226].map((n) => `/images/products/file_${n}.png`),
      },
      {
        id: "shaft-detail",
        label: "Shaft (detail)",
        images: [128, 129, 130, 131, 132].map(
          (n) => `/images/products/file_${n}.png`,
        ),
      },
    ],
  },
] as const;

export const reasons = [
  {
    title: "정밀 가공",
    body: "1985년 설립 이래 자동차 부품 정밀 가공을 핵심 역량으로 축적해 왔습니다.",
  },
  {
    title: "글로벌 OEM",
    body: "국내 완성차 메이커와 유럽·북미·아시아 등 글로벌 메이커와 파트너십을 유지합니다.",
  },
  {
    title: "인증·연구",
    body: "QS9000/ISO9002, ISO/TS16949, SQ(열처리-고주파) 등 인증과 기업부설연구소를 보유합니다.",
  },
  {
    title: "품질·납기",
    body: "고객·품질·납기 3대 방침 아래 지속 개선과 적기 납품을 지향합니다.",
  },
] as const;

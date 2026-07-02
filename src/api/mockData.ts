import type { Product, NewsItem, VideoItem, BannerSlide } from '../types';

export const BANNER_SLIDES: BannerSlide[] = [
  {
    id: 'slide-1',
    title: '어쩌면 삶은\n인생이라는 종이 위에\n써 내려가는\n펜의 기록 같습니다.',
    subtitle: '153 Premium Line',
    desc: '그중에서도 지우고 싶지 않은 기록이 있습니다.\n모나미는 언제나 당신의 행복한 기록과 함께 합니다.',
    bgImage: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1920&q=80',
    textColor: 'light'
  },
  {
    id: 'slide-2',
    title: '나만의 색을 찾아,\n다채로운 일상을 그리다.',
    subtitle: 'Monami Art Series',
    desc: '더 넓은 세상으로 나아가는 모나미 미술도구.\n상상하는 모든 색을 손끝에서 실현해보세요.',
    bgImage: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1920&q=80',
    textColor: 'light'
  },
  {
    id: 'slide-3',
    title: '손으로 전하는\n따뜻한 마음의 깊이.',
    subtitle: 'Monami Fountain Pen',
    desc: '아날로그 감성을 온전히 담아낸 모나미 만년필.\n서걱이는 필기감과 흐르는 잉크로 진심을 선물하세요.',
    bgImage: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1920&q=80',
    textColor: 'dark'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-153-id-refine',
    name: '153 리파인',
    engName: '153 REFINE',
    category: 'premium',
    price: 35000,
    description: '심플한 매력과 완벽한 메탈 바디의 153 리파인 볼펜',
    colors: ['#A0B2C6', '#2F3E46'],
    images: [
      'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['메탈 육각 바디', 'FX 4000 리필심 적용'],
    specs: { '원산지': '대한민국' },
    isBest: true
  },
  {
    id: 'prod-153-id-fountain',
    name: '153 아이디 만년필',
    engName: '153 ID FOUNTAIN PEN',
    category: 'fountain',
    price: 45000,
    description: '만년필',
    colors: ['#A83232', '#2F3E46'],
    images: [
      'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['스틸 펜촉', '클래식 153 육각 라인'],
    specs: { '원산지': '대한민국' },
    isBest: true
  },
  {
    id: 'prod-153-neo-ef',
    name: '153 네오 만년필 EF',
    engName: '153 NEO FOUNTAIN PEN EF',
    category: 'fountain',
    price: 25000,
    description: '만년필',
    colors: ['#111111', '#FFFFFF'],
    images: [
      'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['EF 펜촉 사양', '독일 슈미트 닙'],
    specs: { '원산지': '대한민국' },
    isBest: true
  },
  {
    id: 'prod-153-black-white',
    name: '153 블랙 & 화이트',
    engName: '153 BLACK & WHITE',
    category: 'premium',
    price: 20000,
    description: '프리미엄펜',
    colors: ['#111111', '#FFFFFF'],
    images: [
      'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['매트 가공 피니시', '심플한 매력'],
    specs: { '원산지': '대한민국' },
    isBest: true
  },
  {
    id: 'prod-153-gold',
    name: '153 GOLD (골드)',
    engName: '153 GOLD',
    category: 'premium',
    price: 50000,
    description: '프리미엄펜',
    colors: ['#D4AF37'],
    images: [
      'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['24K 골드 도금'],
    specs: { '원산지': '대한민국' },
    isBest: true
  },
  {
    id: 'prod-153-id',
    name: '153 아이디',
    engName: '153 ID',
    category: 'premium',
    price: 30000,
    description: '프리미엄펜',
    colors: ['#111111', '#A0B2C6'],
    images: [
      'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['견고한 황동 바디'],
    specs: { '원산지': '대한민국' },
    isBest: true
  },
  {
    id: 'prod-153-respect',
    name: '153 리스펙트',
    engName: '153 RESPECT',
    category: 'premium',
    price: 60000,
    description: '프리미엄펜',
    colors: ['#2F3E46', '#A83232'],
    images: [
      'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['묵직한 필기감', '메탈 캡타입'],
    specs: { '원산지': '대한민국' },
    isBest: true
  },
  {
    id: 'prod-153-white-edition',
    name: '153 리미티드 에디션 화이트',
    engName: '153 LIMITED WHITE',
    category: 'premium',
    price: 40000,
    description: '프리미엄펜',
    colors: ['#FFFFFF'],
    images: [
      'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['한정판 올화이트 에디션'],
    specs: { '원산지': '대한민국' },
    isBest: true
  },
  {
    id: 'prod-153-silver-platinum',
    name: '153 실버 플래티넘',
    engName: '153 SILVER PLATINUM',
    category: 'premium',
    price: 80000,
    description: '프리미엄펜',
    colors: ['#E5E4E7'],
    images: [
      'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['백금 도금 헤리티지 리미티드'],
    specs: { '원산지': '대한민국' },
    isBest: true
  },
  {
    id: 'prod-pluspen-3000',
    name: '프러스펜 3000 60색',
    engName: 'PLUS PEN 3000',
    category: 'marker',
    price: 36000,
    description: '마카·컬러링',
    colors: ['#EF4444', '#3B82F6', '#10B981'],
    images: [
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['수성펜 60색 패키지'],
    specs: { '원산지': '대한민국' },
    isBest: true
  },
  {
    id: 'prod-acrylic-marker',
    name: '아크릴 마카 460 24A색 세트',
    engName: 'ACRYLIC MARKER 460',
    category: 'marker',
    price: 48000,
    description: '마카·컬러링',
    colors: ['#F59E0B', '#10B981', '#3B82F6'],
    images: [
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['다양한 표면 채색 아크릴 마카'],
    specs: { '원산지': '대한민국' },
    isBest: true
  },
  {
    id: 'prod-notes',
    name: '모나미 라인 노트 A5',
    engName: 'MONAMI NOTE A5',
    category: 'office',
    price: 4500,
    description: '노트·사무용품',
    colors: ['#E5E4E7'],
    images: [
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['친환경 모나미 노트'],
    specs: { '원산지': '대한민국' },
    isBest: true
  },
  {
    id: 'prod-desk-organizer',
    name: '153 데스크 오거나이저 세트',
    engName: 'DESK ORGANIZER SET',
    category: 'office',
    price: 24000,
    description: '노트·사무용품',
    colors: ['#111111', '#555555'],
    images: [
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80'
    ],
    features: ['깔끔한 정리를 위한 연필꽂이와 볼펜 트레이 세트'],
    specs: { '원산지': '대한민국' },
    isBest: true
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    title: '모나미, 창립 60주년 기념 "153 골든 에디션" 정식 출시',
    date: '2026-06-25',
    category: '보도자료',
    summary: '종합 디자인 문구 기업 모나미가 창립 60주년을 기념하여 역사를 재조명하는 헤리티지 기획 골든 에디션을 출시하고 다양한 오프라인 팝업 행사를...',
    imageUrl: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'news-2',
    title: '제45회 모나미 모나르떼 어린이 미술대회 예선 접수 마감',
    date: '2026-06-12',
    category: '공지사항',
    summary: '전국의 초등학생을 대상으로 한 대한민국 최대 어린이 미술 축제인 모나미 미술대회의 예선이 성황리에 종료되었습니다. 본선 발표 일정을 안내...',
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'news-3',
    title: '모나미 몰 신규 가입 혜택 및 첫 구매 무료 배송 이벤트 안내',
    date: '2026-06-01',
    category: '이벤트',
    summary: '새롭게 개편된 모나미 브랜드 통합 스토어 출시를 기념하여 가입 고객 전원에게 10% 웰컴 쿠폰 발급 및 첫 구매시 금액 무관 무료 배송...',
    imageUrl: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=400&q=80'
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: 'vid-1',
    title: '언제나 당신의 행복한 기록과 함께, 모나미 153 스토리',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
    date: '2026-05-10'
  },
  {
    id: 'vid-2',
    title: '[Monami Art] 아크릴 마카 460 컬러 믹싱 플레이 팁 가이드',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
    date: '2026-04-22'
  }
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

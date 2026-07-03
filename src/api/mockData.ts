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

// 펜 리믹스 이미지 경로를 반환하는 헬퍼 함수
const getPenImage = (index: number) => {
  return `/src/assets/pen${(index % 9) + 1}.jpg`;
};

// 각 4가지 카테고리별로 10개씩 상품을 일괄 생성하는 헬퍼 함수
const generateCategoryProducts = (category: string, catName: string, startIndex: number) => {
  const result: Product[] = [];
  for (let i = 1; i <= 10; i++) {
    const itemIndex = startIndex + i;
    result.push({
      id: `prod-${category}-${itemIndex}`,
      name: `${catName} 제품 ${itemIndex}`,
      engName: `${category.toUpperCase()} PRODUCT ${itemIndex}`,
      category: category,
      price: 15000 + (itemIndex * 2000),
      description: `${catName} 라인업의 특별한 필기구 시리즈 ${i}`,
      colors: ['#111111', '#A83232', '#A0B2C6'],
      images: [getPenImage(itemIndex)],
      features: ['인체공학적 그립', '부드러운 필기감'],
      specs: { '원산지': '대한민국' },
      isBest: true
    });
  }
  return result;
};

export const PRODUCTS: Product[] = [
  ...generateCategoryProducts('premium', '프리미엄 펜', 0),
  ...generateCategoryProducts('fountain', '펜 · 펜슬', 10),
  ...generateCategoryProducts('marker', '마카 · 컬러링', 20),
  ...generateCategoryProducts('office', '노트 · 사무용품', 30)
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

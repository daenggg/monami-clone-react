export interface Product {
  id: string;
  name: string;
  engName?: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  colors: string[]; // Hex codes or color names
  images: string[];
  features?: string[];
  specs?: { [key: string]: string };
  isBest?: boolean;
  isNew?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  imageUrl: string;
}

export interface VideoItem {
  id: string;
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  date: string;
}

export interface BannerSlide {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  bgImage: string;
  textColor: 'light' | 'dark';
}

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { BrandWidget } from '../../components/layout/BrandWidget';
import { BANNER_SLIDES, PRODUCTS, NEWS_ITEMS, VIDEOS } from '../../api/mockData';
import { ChevronLeft, ChevronRight, Play, ArrowRight, ArrowLeft } from 'lucide-react';

export const MainPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('premium');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Slide Auto-play Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length);
  };

  const filteredProducts = PRODUCTS.filter(p => p.category === selectedCategory);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // NEW ARRIVALS dummy data
  const newArrivals = [
    {
      id: 'arr-1',
      title: '153 하이라이터',
      category: 'HIGHLIGHTER',
      image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=400&q=80',
      isLarge: false
    },
    {
      id: 'arr-2',
      title: '지퀀스',
      category: 'NOTE',
      image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
      isLarge: true
    },
    {
      id: 'arr-3',
      title: '153 메탈 실리콘 케이스',
      category: 'CASE',
      image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=400&q=80',
      isLarge: false
    },
    {
      id: 'arr-4',
      title: '데스크 펜 세트',
      category: 'DESK PEN',
      image: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=400&q=80',
      isLarge: false
    },
    {
      id: 'arr-5',
      title: '프러스펜 3000 데스크 에디션',
      category: 'PLUS PEN',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80',
      isLarge: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Header */}
      <Header />

      {/* Hero Banner Section (Single Static Banner) */}
      <section className="relative w-full max-w-[1557px] mx-auto h-[652px] overflow-hidden bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${BANNER_SLIDES[0].bgImage})` }}
        >
          {/* Overlay mask */}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-24 max-w-5xl text-white">
          <span className="text-monami-red font-bold text-sm md:text-base tracking-widest mb-3 uppercase">
            {BANNER_SLIDES[0].subtitle}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 whitespace-pre-line text-white text-left">
            {BANNER_SLIDES[0].title}
          </h1>
          <p className="text-sm md:text-lg text-neutral-300 leading-relaxed whitespace-pre-line mb-8 text-left">
            {BANNER_SLIDES[0].desc}
          </p>
          <div className="text-left">
            <a
              href="#new-arrivals"
              className="inline-flex items-center gap-2 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all-300 font-medium text-sm"
            >
              <span>자세히 보기</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS Section */}
      <section id="new-arrivals" className="py-24 bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Main Grid: Left sidebar (Title area) + Cards Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Title / Description Area (Left Span 3) */}
            <div className="lg:col-span-3 flex flex-col justify-start text-left pt-6">
              <h2 className="text-3xl font-extrabold text-black tracking-widest leading-none mb-2">NEW<br />ARRIVALS</h2>
              <div className="w-8 h-0.5 bg-monami-red my-4"></div>
              <p className="text-neutral-500 text-xs tracking-wider">가장 먼저 만나는 설레는 기다림</p>
            </div>

            {/* Content Cards Area (Right Span 9) */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Large Card (Zequence Notebooks - Span 2 width, 1 height) */}
              <div 
                className="md:col-span-2 relative h-[300px] bg-neutral-100 rounded-3xl overflow-hidden group cursor-pointer transition-all-300 shadow-xs border border-neutral-100"
                onMouseEnter={() => setHoveredCardId(newArrivals[1].id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                <img 
                  src={newArrivals[1].image} 
                  alt={newArrivals[1].title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Red Overlay Cover on Hover */}
                <div 
                  className={`absolute inset-0 bg-[#a31d37] flex flex-col items-center justify-center text-white transition-opacity duration-300 ${
                    hoveredCardId === newArrivals[1].id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <span className="text-[10px] tracking-widest text-neutral-300 font-bold uppercase mb-2">
                    {newArrivals[1].category}
                  </span>
                  <h3 className="text-xl font-bold mb-6">{newArrivals[1].title}</h3>
                  <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-lg font-light leading-none">
                    +
                  </div>
                </div>
              </div>

              {/* Smaller Card 1 */}
              <div 
                className="relative h-[300px] bg-neutral-100 rounded-3xl overflow-hidden group cursor-pointer transition-all-300 shadow-xs border border-neutral-100"
                onMouseEnter={() => setHoveredCardId(newArrivals[0].id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                <img 
                  src={newArrivals[0].image} 
                  alt={newArrivals[0].title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div 
                  className={`absolute inset-0 bg-[#a31d37] flex flex-col items-center justify-center text-white transition-opacity duration-300 ${
                    hoveredCardId === newArrivals[0].id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <span className="text-[10px] tracking-widest text-neutral-300 font-bold uppercase mb-2">
                    {newArrivals[0].category}
                  </span>
                  <h3 className="text-xl font-bold mb-6">{newArrivals[0].title}</h3>
                  <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-lg font-light leading-none">
                    +
                  </div>
                </div>
              </div>

              {/* Smaller Card 2 */}
              <div 
                className="relative h-[300px] bg-neutral-100 rounded-3xl overflow-hidden group cursor-pointer transition-all-300 shadow-xs border border-neutral-100"
                onMouseEnter={() => setHoveredCardId(newArrivals[2].id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                <img 
                  src={newArrivals[2].image} 
                  alt={newArrivals[2].title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div 
                  className={`absolute inset-0 bg-[#a31d37] flex flex-col items-center justify-center text-white transition-opacity duration-300 ${
                    hoveredCardId === newArrivals[2].id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <span className="text-[10px] tracking-widest text-neutral-300 font-bold uppercase mb-2">
                    {newArrivals[2].category}
                  </span>
                  <h3 className="text-xl font-bold mb-6">{newArrivals[2].title}</h3>
                  <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-lg font-light leading-none">
                    +
                  </div>
                </div>
              </div>

              {/* Smaller Card 3 */}
              <div 
                className="relative h-[300px] bg-neutral-100 rounded-3xl overflow-hidden group cursor-pointer transition-all-300 shadow-xs border border-neutral-100"
                onMouseEnter={() => setHoveredCardId(newArrivals[3].id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                <img 
                  src={newArrivals[3].image} 
                  alt={newArrivals[3].title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div 
                  className={`absolute inset-0 bg-[#a31d37] flex flex-col items-center justify-center text-white transition-opacity duration-300 ${
                    hoveredCardId === newArrivals[3].id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <span className="text-[10px] tracking-widest text-neutral-300 font-bold uppercase mb-2">
                    {newArrivals[3].category}
                  </span>
                  <h3 className="text-xl font-bold mb-6">{newArrivals[3].title}</h3>
                  <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-lg font-light leading-none">
                    +
                  </div>
                </div>
              </div>

              {/* Smaller Card 4 */}
              <div 
                className="relative h-[300px] bg-neutral-100 rounded-3xl overflow-hidden group cursor-pointer transition-all-300 shadow-xs border border-neutral-100"
                onMouseEnter={() => setHoveredCardId(newArrivals[4].id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                <img 
                  src={newArrivals[4].image} 
                  alt={newArrivals[4].title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div 
                  className={`absolute inset-0 bg-[#a31d37] flex flex-col items-center justify-center text-white transition-opacity duration-300 ${
                    hoveredCardId === newArrivals[4].id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <span className="text-[10px] tracking-widest text-neutral-300 font-bold uppercase mb-2">
                    {newArrivals[4].category}
                  </span>
                  <h3 className="text-xl font-bold mb-6">{newArrivals[4].title}</h3>
                  <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-lg font-light leading-none">
                    +
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* BEST PRODUCT Section (Refactored to match user's screenshot layout) */}
      <section id="products" className="py-24 bg-monami-light-gray w-full border-b border-monami-light overflow-hidden">
        <div className="w-full text-center">
          
          {/* Title Area */}
          <h2 className="text-3xl font-extrabold text-black tracking-widest mb-1">BEST PRODUCT</h2>
          <div className="w-6 h-0.5 bg-monami-red mx-auto my-3"></div>
          <p className="text-neutral-500 text-xs mb-8">언제 어디서나 생활 속에 함께하는 모나미</p>

          {/* Rounded Pill Tab Menu */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap px-6">
            {[
              { id: 'premium', name: '프리미엄 펜' },
              { id: 'fountain', name: '펜 · 펜슬' },
              { id: 'marker', name: '마카 · 컬러링' },
              { id: 'office', name: '노트 · 사무용품' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full border text-xs font-bold transition-all-300 ${
                  selectedCategory === cat.id 
                    ? 'border-monami-red text-monami-red bg-white' 
                    : 'border-neutral-300 text-neutral-500 bg-white hover:border-neutral-400'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Horizontal Drag-and-Scroll Products Carousel Container */}
          <div className="relative w-full">
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto pb-8 px-6 md:px-12 scrollbar-none cursor-grab active:cursor-grabbing select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseDown={(e) => {
                const slider = scrollContainerRef.current;
                if (!slider) return;
                const startX = e.pageX - slider.offsetLeft;
                const scrollLeft = slider.scrollLeft;
                
                let isMoved = false;

                const handleMouseMove = (moveEvent: MouseEvent) => {
                  moveEvent.preventDefault();
                  isMoved = true;
                  const x = moveEvent.pageX - slider.offsetLeft;
                  const walk = (x - startX) * 1.5; // Scroll speed multiplier
                  slider.scrollLeft = scrollLeft - walk;
                };

                const handleMouseUp = (upEvent: MouseEvent) => {
                  slider.removeEventListener('mousemove', handleMouseMove);
                  slider.removeEventListener('mouseup', handleMouseUp);
                  slider.removeEventListener('mouseleave', handleMouseUp);

                  // Prevent card navigation if the user actually dragged
                  if (isMoved) {
                    const preventClick = (clickEvent: MouseEvent) => {
                      clickEvent.preventDefault();
                      clickEvent.stopPropagation();
                    };
                    slider.addEventListener('click', preventClick, { capture: true, once: true });
                  }
                };

                slider.addEventListener('mousemove', handleMouseMove);
                slider.addEventListener('mouseup', handleMouseUp);
                slider.addEventListener('mouseleave', handleMouseUp);
              }}
            >
              {filteredProducts.map((prod) => (
                <Link
                  key={prod.id}
                  to={`/detail/${prod.id}`}
                  className="min-w-[260px] md:min-w-[280px] bg-white border border-[#e1e1e1] hover:border-neutral-400 rounded-3xl p-6 flex flex-col justify-between transition-all-300 hover:shadow-lg snap-start text-left relative"
                  onClick={(e) => {
                    // Check if it was a drag operation (handled above via capturing listeners)
                  }}
                >
                  {/* Visual product illustration */}
                  <div className="h-72 w-full flex items-center justify-center mb-6 bg-white rounded-2xl overflow-hidden p-4">
                    <img
                      src={prod.images[0]}
                      alt={prod.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105 pointer-events-none"
                    />
                  </div>

                  {/* Descriptions details */}
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-neutral-400 font-medium">{prod.description}</span>
                    <h3 className="font-extrabold text-[15px] text-[#111111] leading-tight">{prod.name}</h3>
                  </div>
                </Link>
              ))}

              {filteredProducts.length === 0 && (
                <div className="w-full text-center py-20 text-neutral-400 text-sm">
                  등록된 상품이 없습니다.
                </div>
              )}
            </div>

            {/* Scroll Navigation Slider Guide */}
            <div className="w-full flex flex-col items-center gap-2 mt-4 px-6">
              <div className="flex items-center justify-center gap-12 w-full text-neutral-400 max-w-xs border-t border-dotted border-monami-light pt-4">
                <button onClick={scrollLeft} className="hover:text-black transition">
                  <ArrowLeft size={16} />
                </button>
                <div className="flex flex-col items-center">
                  <svg className="w-5 h-5 text-neutral-400 animate-bounce mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <span className="text-[10px] font-bold tracking-widest uppercase">DRAG & SCROLL</span>
                </div>
                <button onClick={scrollRight} className="hover:text-black transition">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Visual / Info Banner Grid (Updated to match user's screenshot layout dimensions: 700px, 350px, 350px with h-355px) */}
      <section className="w-full border-b border-monami-light bg-[#f9f9fa] py-0 overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row justify-center items-center">
          
          {/* Column 1: MONAMI NEWS (Width: 700px, Height: 355px) */}
          <div className="bg-white p-8 flex flex-col justify-between text-left w-full lg:w-[700px] h-[355px] border-b lg:border-b-0 lg:border-r border-monami-light shrink-0">
            <div>
              <div className="flex justify-between items-end border-b border-monami-light pb-2 mb-4 relative">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-[15px] font-extrabold text-[#111111] tracking-widest uppercase">MONAMI NEWS</h3>
                  <div className="w-6 h-[3px] bg-monami-red absolute bottom-[-2px] left-0"></div>
                </div>
                <a href="#" className="text-[10px] font-bold text-neutral-400 hover:text-black uppercase tracking-wider underline">
                  MORE
                </a>
              </div>

              {/* Main Highlight News */}
              <div className="flex gap-4 mb-4 cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=300&q=80"
                  alt="news thumb"
                  className="w-[120px] h-[90px] object-cover border border-monami-light shrink-0"
                />
                <div className="flex flex-col justify-between py-0.5">
                  <h4 className="font-bold text-[13px] text-neutral-900 leading-tight group-hover:text-monami-red transition line-clamp-2">
                    모나미, 지워지는 중성펜 리튬 3 · 리튬 S 신제..
                  </h4>
                  <p className="text-[11px] text-neutral-400 leading-relaxed line-clamp-2 mt-1">
                    모나미, 지워지는 중성펜 리튬 3 · 리튬 S 신제품 출시 ■ 60도 마찰열에 지워지는 특수잉크 적용해 손쉽게 지울 수 ..
                  </p>
                  <span className="text-[10px] text-neutral-400 self-end mt-1">2025-12-15</span>
                </div>
              </div>

              {/* Minor News List */}
              <ul className="flex flex-col gap-2 text-[11px] text-neutral-600 border-t border-dotted border-monami-light pt-3">
                <li className="flex justify-between hover:text-black cursor-pointer transition">
                  <span className="truncate pr-4">- '쓰는 펜'과 '그리는 펜' 직접 경험해보세요! 모나미, 갤러리아..</span>
                  <span className="text-neutral-400 shrink-0">2025-12-11</span>
                </li>
                <li className="flex justify-between hover:text-black cursor-pointer transition">
                  <span className="truncate pr-4">- 주방 필수품 키친마카 라인업 확대.. 모나미, '실리콘 전용 키친마..</span>
                  <span className="text-neutral-400 shrink-0">2025-11-17</span>
                </li>
                <li className="flex justify-between hover:text-black cursor-pointer transition">
                  <span className="truncate pr-4">- 10월 25일 독도의 날 기념 모나미 '153 독도' 수익금 기부 및 특별 ..</span>
                  <span className="text-neutral-400 shrink-0">2025-10-24</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: INQUIRY (Width: 350px, Height: 355px) */}
          <div className="bg-[#e9e9e9] p-8 flex flex-col items-center justify-center text-center w-full lg:w-[350px] h-[355px] border-b lg:border-b-0 lg:border-r border-monami-light shrink-0">
            {/* Inquiry Icon */}
            <div className="mb-3">
              <svg className="w-10 h-10 text-[#111111]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v5h5" />
              </svg>
            </div>
            
            <h3 className="text-[15px] font-extrabold text-[#111111] tracking-widest uppercase">INQUIRY</h3>
            <div className="w-5 h-[3px] bg-monami-red my-2.5"></div>
            
            <p className="text-[11px] text-neutral-500 leading-relaxed mb-6">
              언제나 소중한 의견에 귀 기울이겠습니다.<br />
              궁금한 사항은 문의하세요.
            </p>

            <a
              href="#"
              className="border border-monami-red text-monami-red hover:bg-monami-red hover:text-white transition duration-300 text-[11px] font-bold tracking-widest px-8 py-2.5 rounded-full bg-transparent uppercase"
            >
              INQUIRY NOW
            </a>
          </div>

          {/* Column 3: BRAND STORE (Width: 350px, Height: 355px) */}
          <div 
            className="bg-[#f3f3f3] p-8 flex flex-col items-center justify-center text-center w-full lg:w-[350px] h-[355px] relative overflow-hidden shrink-0"
            style={{ backgroundImage: 'radial-gradient(#b3b3b3 0.6px, transparent 0.6px)', backgroundSize: '12px 12px' }}
          >
            {/* Store Icon */}
            <div className="mb-3">
              <svg className="w-10 h-10 text-[#111111]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>

            <h3 className="text-[15px] font-extrabold text-[#111111] tracking-tight">모나미 네이버 브랜드스토어</h3>
            <div className="w-5 h-[3px] bg-monami-red my-2.5"></div>

            <p className="text-[11px] text-neutral-500 leading-relaxed mb-6">
              모나미 공식 쇼핑몰입니다.<br />
              공식몰만의 다양한 혜택을 만나보세요.
            </p>

            <a
              href="https://brand.naver.com/monami"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-monami-red text-monami-red hover:bg-monami-red hover:text-white transition duration-300 text-[11px] font-bold tracking-widest px-10 py-2.5 rounded-full bg-transparent uppercase"
            >
              BUY NOW
            </a>
          </div>

        </div>
      </section>

      {/* Floating brand widget */}
      <BrandWidget />

      {/* Footer layout */}
      <Footer />
    </div>
  );
};

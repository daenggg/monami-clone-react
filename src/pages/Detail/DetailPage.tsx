import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { BrandWidget } from '../../components/layout/BrandWidget';
import { getProductById } from '../../api/mockData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const DetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = productId ? getProductById(productId) : undefined;

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [activeCategoryTab, setActiveCategoryTab] = useState('premium');

  // Sync selected color on load
  useEffect(() => {
    if (product && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-between">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <h2 className="text-2xl font-bold mb-4">상품을 찾을 수 없습니다.</h2>
          <Link to="/" className="text-sm font-bold text-red-500 hover:underline">홈으로 돌아가기</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Thumbnails carousel navigation helpers
  const handlePrevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleNextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Main product visual background header banner */}
      <section 
        className="w-full h-[320px] bg-cover bg-center flex flex-col items-center justify-center text-white relative"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-widest text-white mb-2">모나미제품</h1>
          <p className="text-xs text-neutral-300 font-medium">모나미는 당신의 행복한 기록과 늘 함께 합니다.</p>
        </div>
      </section>

      {/* Sticky Segment Category Bar */}
      <div className="w-full bg-white border-b border-monami-light">
        <div className="max-w-7xl mx-auto grid grid-cols-5 text-center text-xs md:text-sm">
          {[
            { id: 'premium', name: '프리미엄 펜' },
            { id: 'fountain', name: '펜 · 펜슬' },
            { id: 'marker', name: '마카 · 컬러링' },
            { id: 'office', name: '노트 · 사무용품' },
            { id: 'refill', name: '잉크 · 리필' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategoryTab(tab.id)}
              className={`py-4 font-bold border-r border-monami-light last:border-r-0 transition-all ${
                activeCategoryTab === tab.id 
                  ? 'bg-monami-red text-white' 
                  : 'bg-white text-neutral-600 hover:bg-neutral-50'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT INFO Sub Title Header */}
      <div className="text-center py-12 bg-white">
        <h2 className="text-2xl font-extrabold text-black tracking-widest uppercase flex justify-center items-center gap-1.5">
          PRODUCT <span className="text-monami-red">INFO</span>
        </h2>
        <div className="w-6 h-0.5 bg-monami-red mx-auto mt-2"></div>
      </div>

      {/* Detail Content Section */}
      <main className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">
        
        {/* Left Side: Dynamic visual pager (12 columns structure) */}
        <div className="lg:col-span-6 flex flex-col items-center">
          
          {/* Main card box with vertical status sidebar indicator */}
          <div className="w-full relative border border-monami-light bg-white rounded-2xl flex items-center justify-center p-8 min-h-[480px]">
            {/* Slide Index Counter */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-xs font-bold tracking-widest text-neutral-400">
              0{(activeImageIdx + 1)} / 0{product.images.length || 1}
            </div>

            {/* Product Center Image */}
            <img
              src={product.images[activeImageIdx]}
              alt={product.name}
              className="max-h-[380px] max-w-full object-contain"
            />
          </div>

          {/* Navigation Carousels Selector */}
          <div className="flex items-center gap-4 mt-6 w-full max-w-[360px]">
            <button 
              onClick={handlePrevImage} 
              className="p-2 border border-monami-light hover:border-neutral-400 rounded-lg text-neutral-400 hover:text-black transition"
            >
              <ChevronLeft size={16} />
            </button>
            
            <div className="flex-1 flex gap-2 justify-center overflow-x-auto">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-14 h-14 rounded-lg border flex items-center justify-center p-1 transition ${
                    idx === activeImageIdx ? 'border-neutral-800' : 'border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  <img src={img} alt="thumb" className="max-h-full max-w-full object-contain" />
                </button>
              ))}
            </div>

            <button 
              onClick={handleNextImage} 
              className="p-2 border border-monami-light hover:border-neutral-400 rounded-lg text-neutral-400 hover:text-black transition"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Side: Product Details list (12 columns structure) */}
        <div className="lg:col-span-6 text-left flex flex-col justify-between h-full min-h-[480px]">
          <div>
            {/* Title section */}
            <h1 className="text-3xl font-extrabold text-[#111111] mb-1">{product.name}</h1>
            <div className="w-8 h-0.5 bg-monami-red my-3"></div>
            <p className="text-sm font-bold text-neutral-500 mb-6">{product.description}</p>

            {/* Technical Bullet Grid Specifications */}
            <div className="border-t border-monami-light pt-8 flex flex-col gap-8 text-xs text-neutral-700">
              
              {/* KEY FEATURES */}
              <div>
                <h4 className="font-extrabold text-monami-red tracking-wider mb-3">▪ KEY FEATURES</h4>
                <ul className="flex flex-col gap-2 pl-2">
                  {product.features?.map((feat, idx) => (
                    <li key={idx} className="list-none text-neutral-600 leading-relaxed">
                      - {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* BODY COLOR Select */}
              <div>
                <h4 className="font-extrabold text-monami-red tracking-wider mb-3">▪ BODY COLOR</h4>
                <div className="flex gap-2 pl-2">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1.5 text-[10px] font-bold border transition ${
                        selectedColor === color 
                          ? 'bg-[#1c2e42] text-white border-transparent' 
                          : 'bg-white text-neutral-500 border-neutral-300 hover:border-neutral-400'
                      }`}
                    >
                      {color.toUpperCase() === '#A83232' ? 'Maroon' : color.toUpperCase() === '#A0B2C6' ? 'Navy' : 'Linen'}
                    </button>
                  ))}
                </div>
              </div>

              {/* POINT SIZE */}
              <div>
                <h4 className="font-extrabold text-monami-red tracking-wider mb-2">▪ POINT SIZE</h4>
                <p className="pl-2 text-neutral-600 font-semibold">EF</p>
              </div>

            </div>
          </div>

          {/* Legal / Copyright details */}
          <div className="mt-12 pt-8 border-t border-[#f1f1f1] text-[10px] text-neutral-400 leading-relaxed">
            ※ 본 상품의 이미지를 포함한 모든 저작권은 모나미에게 있습니다. 무단으로 도용하거나 사용할 시 법적 불이익을 받을 수 있습니다.
          </div>

          {/* Bottom Interactive Navigation elements */}
          <div className="mt-8 flex justify-between items-center w-full">
            <Link 
              to="/"
              className="bg-monami-red hover:bg-[#a80b30] text-white font-bold text-xs px-8 py-2.5 rounded transition"
            >
              LIST
            </Link>

            <a 
              href="https://monamimall.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-bold text-neutral-400 hover:text-black flex items-center gap-1 transition"
            >
              <span>BUY NOW</span>
              <span>❯</span>
            </a>
          </div>

        </div>

      </main>

      {/* Floating brand widget */}
      <BrandWidget />

      {/* Footer layout */}
      <Footer />
    </div>
  );
};

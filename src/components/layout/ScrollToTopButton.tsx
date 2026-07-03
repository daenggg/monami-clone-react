import React, { useState, useEffect } from 'react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 감지하여 300px 이하로 내려갈 때 노출
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-6 md:right-12 bottom-12 z-40 flex items-center gap-3">
      {/* 도움말 버튼 */}
      <button
        onClick={() => alert("도움말 및 문의 페이지로 이동합니다.")}
        className="w-[46px] h-[46px] rounded-full bg-monami-red text-white flex items-center justify-center shadow-lg hover:bg-[#a80b30] transition active:scale-95 cursor-pointer"
        aria-label="Help info"
      >
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </button>

      {/* 최상단 이동 버튼 */}
      <button
        onClick={scrollToTop}
        className="w-[46px] h-[46px] rounded-full bg-monami-red text-white flex items-center justify-center shadow-lg hover:bg-[#a80b30] transition active:scale-95 cursor-pointer"
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>
    </div>
  );
};

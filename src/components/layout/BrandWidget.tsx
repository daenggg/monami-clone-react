import React, { useState } from 'react';
import monamiMallLogo from '../../assets/monami-mall.png';

export const BrandWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed right-6 md:right-12 bottom-48 z-40 animate-fade-in">
      <div className="relative">
        
        {/* 닫기 버튼 */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 text-neutral-400 hover:text-neutral-200 transition z-50 p-1 bg-transparent cursor-pointer"
          aria-label="Close widget"
        >
          <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 원형 플로팅 위젯 메인 */}
        <div className="w-[216px] h-[216px] rounded-full bg-black text-white px-6 py-8 flex flex-col justify-between items-center text-center shadow-2xl transition-transform duration-300 hover:scale-102 select-none border border-neutral-900">
          
          {/* 브랜드 몰 로고 */}
          <div className="mt-2 flex items-center justify-center bg-transparent">
            <img src={monamiMallLogo} alt="monamimall" className="h-[23px] object-contain bg-transparent" />
          </div>

          {/* 중앙 안내 텍스트 */}
          <div className="text-[15px] font-medium leading-none text-neutral-200 flex items-center justify-center gap-1.5 mt-0.5 bg-transparent">
            <span className="bg-transparent">브랜드</span>
            <span className="font-extrabold text-white bg-transparent">스토어</span>
          </div>

          {/* 바로가기 링크 */}
          <a
            href="https://monamimall.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between text-[13px] font-bold text-white px-2 mt-1 hover:text-neutral-300 transition bg-transparent"
          >
            <span className="pl-3 bg-transparent">바로가기</span>
            <span className="pr-3 text-[14px] font-light bg-transparent">❯</span>
          </a>

          {/* 구분 분할선 */}
          <div className="w-full h-[1px] bg-neutral-800 my-1" />

          {/* 하단 대량 구매 문의 바로가기 */}
          <a 
            href="#" 
            className="text-[12px] text-neutral-300 hover:text-white flex items-center gap-1.5 justify-center mb-1 bg-transparent"
          >
            <svg className="w-4 h-4 text-neutral-300 bg-transparent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <span className="font-light bg-transparent">대량 구매 문의</span>
          </a>

        </div>
      </div>
    </div>
  );
};

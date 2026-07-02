import React, { useState } from 'react';
import footLogo from '../../assets/foot_logo.jpg';

export const Footer: React.FC = () => {
  const [isFamilyOpen, setIsFamilyOpen] = useState(false);

  return (
    <footer className="w-full bg-[#111111] text-[#777777] text-[14px] py-14 px-6 md:px-12 border-t border-[#222222] relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Top Section: Logo & Terms */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#222222] pb-6 gap-4">
          {/* Brand Logo */}
          <img src={footLogo} alt="monami" className="h-6 object-contain" />

          {/* Policy Links */}
          <div className="flex flex-wrap gap-4 text-[14px]">
            <a href="#" className="hover:text-white transition">회사소개</a>
            <span className="text-neutral-700">|</span>
            <a href="#" className="text-white hover:underline font-bold transition">개인정보처리방침</a>
            <span className="text-neutral-700">|</span>
            <a href="#" className="hover:text-white transition">이메일무단수집거부</a>
          </div>
        </div>

        {/* Bottom Section: Info, Customer Center & Family dropdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Block: Corporate Info */}
          <div className="flex flex-col gap-2 lg:col-span-6">
            <h4 className="font-extrabold text-white text-[14px] tracking-wider">INFO</h4>
            <p className="leading-relaxed text-[#555555] text-[14px] whitespace-nowrap">
              ADDRESS : 경기도 용인시 수지구 손곡로 17 <span className="mx-2 text-neutral-800">|</span> TEL : 031-216-0153 <span className="mx-2 text-neutral-800">|</span> FAX : 031-270-5154
            </p>
            <p className="text-[#444444] text-[14px] uppercase mt-2">
              COPYRIGHT(C) MONAMI.CO.,LTD. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Center Block: Customer Service Center */}
          <div className="flex flex-col gap-3 lg:col-span-4 lg:pl-2">
            <h4 className="font-extrabold text-white text-xs tracking-wider">CUSTOMER CENTER</h4>
            <span className="text-2xl font-bold text-neutral-300 tracking-tight">080-022-0153</span>
            <div>
              <button className="bg-[#292929] hover:bg-[#333333] border border-[#3e3e3e] text-neutral-300 text-[14px] px-4 py-1.5 rounded flex items-center gap-1 transition">
                <span>카카오톡 문의</span>
                <span className="text-[10px] text-neutral-500">❯</span>
              </button>
            </div>
          </div>

          {/* Right Block: Dropdown selection widget */}
          <div className="flex justify-start lg:justify-end relative lg:col-span-2">
            <div className="w-full max-w-[220px]">
              <button
                onClick={() => setIsFamilyOpen(!isFamilyOpen)}
                className="w-full border border-[#333333] bg-[#1a1a1a] text-neutral-400 px-4 py-2.5 rounded flex items-center justify-between hover:bg-[#222222] transition text-[14px]"
              >
                <span>FAMILY SITE</span>
                <span className="text-[12px] text-neutral-600 transition-transform duration-200">
                  {isFamilyOpen ? '▼' : '▲'}
                </span>
              </button>

              {isFamilyOpen && (
                <div className="absolute bottom-full left-0 lg:left-auto lg:right-0 mb-1 bg-[#1a1a1a] border border-[#333333] rounded shadow-2xl z-50 w-full text-[14px]">
                  <a href="#" className="block px-4 py-2.5 hover:bg-[#252525] text-neutral-300 transition border-b border-[#252525]">모나미몰</a>
                  <a href="#" className="block px-4 py-2.5 hover:bg-[#252525] text-neutral-300 transition border-b border-[#252525]">모나르떼</a>
                  <a href="#" className="block px-4 py-2.5 hover:bg-[#252525] text-neutral-300 transition">모나미스테이션</a>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Floating Red Q&A Button bottom right of the footer block */}
      <div className="absolute right-6 md:right-12 bottom-6">
        <button className="bg-monami-red hover:bg-[#a80b30] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition duration-200" aria-label="Customer Question Help">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
          </svg>
        </button>
      </div>
    </footer>
  );
};

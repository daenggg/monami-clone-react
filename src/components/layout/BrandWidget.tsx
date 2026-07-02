import React, { useState } from 'react';
import { X, ArrowRight, PenTool } from 'lucide-react';

export const BrandWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed right-6 md:right-12 bottom-20 z-40 animate-fade-in group">
      {/* Floating Circular Widget */}
      <div className="relative w-[130px] h-[130px] rounded-full bg-black text-white p-4 flex flex-col justify-between items-center text-center shadow-2xl transition-transform duration-300 hover:scale-105 border border-neutral-800">
        
        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
          className="absolute -top-1 -right-1 bg-neutral-900 border border-neutral-700 text-neutral-400 hover:text-white rounded-full p-1 transition"
          aria-label="Close widget"
        >
          <X size={12} />
        </button>

        {/* Brand Text Content */}
        <div className="mt-3 flex flex-col items-center">
          <span className="font-extrabold text-[11px] tracking-tight text-neutral-200">monami<span className="text-red-500">mall</span></span>
          <span className="font-bold text-xs mt-1">브랜드 스토어</span>
        </div>

        {/* Shortcut Button */}
        <a
          href="https://monamimall.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-[10px] py-1 px-2 rounded-full flex items-center justify-center gap-1 transition"
        >
          <span>바로가기</span>
          <ArrowRight size={10} />
        </a>

        {/* Footer Text */}
        <a href="#" className="text-[9px] text-neutral-400 hover:text-white flex items-center gap-1 mt-1 border-t border-neutral-800 pt-1 w-full justify-center">
          <PenTool size={9} />
          <span>대량 구매 문의</span>
        </a>
      </div>
    </div>
  );
};

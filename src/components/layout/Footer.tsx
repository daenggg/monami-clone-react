import React from "react";
import footLogo from "../../assets/foot_logo.jpg";

export const Footer: React.FC = () => {

  return (
    <footer className="w-full bg-[#111111] text-[#777777] text-[14px] py-14 px-6 md:px-12 border-t border-[#222222] relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* 상단 섹션: 로고 및 약관 링크 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#222222] pb-6 gap-4">
          <img src={footLogo} alt="monami" className="h-6 object-contain" />

          <div className="flex flex-wrap gap-4 text-[14px]">
            <a href="#" className="text-white hover:underline transition">
              회사소개
            </a>
            <span className="text-neutral-700">|</span>
            <a
              href="#"
              className="text-white hover:underline font-bold transition"
            >
              개인정보처리방침
            </a>
            <span className="text-neutral-700">|</span>
            <a href="#" className="text-white hover:underline transition">
              이메일무단수집거부
            </a>
          </div>
        </div>

        {/* 하단 섹션: 회사 정보, 고객센터 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* 기업 정보 */}
          <div className="flex flex-col gap-2 lg:col-span-8">
            <h4 className="font-extrabold text-white text-[14px] tracking-wider">
              INFO
            </h4>
            <p className="leading-relaxed text-[#555555] text-[14px] whitespace-nowrap">
              ADDRESS : 경기도 용인시 수지구 손곡로 17{" "}
              <span className="mx-2 text-neutral-800">|</span> TEL :
              031-216-0153 <span className="mx-2 text-neutral-800">|</span> FAX
              : 031-270-5154
            </p>
            <p className="text-[#444444] text-[14px] uppercase mt-2">
              COPYRIGHT(C) MONAMI.CO.,LTD. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* 고객 상담 센터 */}
          <div className="flex flex-col gap-3 lg:col-span-4 lg:pl-2">
            <h4 className="font-extrabold text-white text-xs tracking-wider">
              CUSTOMER CENTER
            </h4>
            <span className="text-2xl font-bold text-neutral-300 tracking-tight">
              080-022-0153
            </span>
            <div>
              <button className="bg-[#292929] hover:bg-[#333333] border border-[#3e3e3e] text-neutral-300 text-[14px] px-4 py-1.5 rounded flex items-center gap-1 transition">
                <span>카카오톡 문의</span>
                <span className="text-[10px] text-neutral-500">❯</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/monami_logo.jpg";
import pen4Img from "../../assets/pen4.jpg";

interface DropdownMenu {
  title: string;
  links: { name: string; path: string }[];
}

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [lang, setLang] = useState("KOR");

  const menuItems: DropdownMenu[] = [
    {
      title: "모나미소개",
      links: [
        { name: "CEO 메시지", path: "/" },
        { name: "회사정보", path: "/" },
        { name: "회사연혁", path: "/" },
        { name: "윤리경영", path: "/" },
        { name: "투자정보", path: "/" },
        { name: "CI", path: "/" },
        { name: "찾아오시는 길", path: "/" },
        { name: "경영방침", path: "/" },
      ],
    },
    {
      title: "모나미제품",
      links: [
        { name: "프리미엄 펜", path: "/" },
        { name: "펜 · 펜슬", path: "/" },
        { name: "마카 · 컬러링", path: "/" },
        { name: "노트 · 사무", path: "/" },
        { name: "잉크 · 리필", path: "/" },
      ],
    },
    {
      title: "NEWS & VIDEO",
      links: [
        { name: "보도자료", path: "/" },
        { name: "동영상자료", path: "/" },
      ],
    },
    {
      title: "모나미 미술대회",
      links: [
        { name: "미술대회 소개", path: "/" },
        { name: "수상작 발표", path: "/" },
      ],
    },
    {
      title: "고객지원",
      links: [
        { name: "질문", path: "/" },
        { name: "문의하기", path: "/" },
      ],
    },
    {
      title: "기업 구매 / 개발",
      links: [
        { name: "대량 구매 문의", path: "/" },
        { name: "기업 및 단체 구매", path: "/" },
        { name: "산업용 맞춤 제품개발", path: "/" },
      ],
    },
  ];

  return (
    <>
      {/* 상단 유틸리티 메뉴 */}
      <div className="w-full bg-[#fcfcfc] border-b border-[#f1f1f1] py-2 px-6 md:px-12 text-xs text-[#666666]">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center w-full">
          <div className="flex items-center gap-4">
            {/* 언어 선택 드롭다운 */}
            <div className="relative group">
              <button className="border border-[#e1e1e1] rounded px-2 py-0.5 flex items-center gap-1 hover:bg-white transition">
                <span>{lang}</span>
                <span className="text-[9px]">▼</span>
              </button>
              <div className="absolute left-0 mt-1 hidden group-hover:block bg-white border border-[#e1e1e1] rounded shadow-lg z-50">
                <button
                  onClick={() => setLang("KOR")}
                  className="block px-4 py-1.5 hover:bg-[#f7f7f7] w-full text-left"
                >
                  KOR
                </button>
                <button
                  onClick={() => setLang("ENG")}
                  className="block px-4 py-1.5 hover:bg-[#f7f7f7] w-full text-left"
                >
                  ENG
                </button>
              </div>
            </div>

            {/* 소셜 링크 */}
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-[#f4f3ec]/50 hover:bg-neutral-100 rounded-full transition"
                aria-label="Facebook"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current text-neutral-500 hover:text-black"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-[#f4f3ec]/50 hover:bg-neutral-100 rounded-full transition"
                aria-label="Instagram"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current text-neutral-500 hover:text-black"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-[#f4f3ec]/50 hover:bg-neutral-100 rounded-full transition"
                aria-label="Youtube"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current text-neutral-500 hover:text-black"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.107C19.528 3.545 12 3.545 12 3.545s-7.528 0-9.388.511a3.002 3.002 0 00-2.11 2.107C0 8.021 0 12 0 12s0 3.979.502 5.837a3.002 3.002 0 002.11 2.107C4.472 20.455 12 20.455 12 20.455s7.528 0 9.388-.511a3.002 3.002 0 002.11-2.107C24 15.979 24 12 24 12s0-3.979-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-black transition">
              HOME
            </a>
            <span>|</span>
            <a href="#" className="hover:text-black transition">
              SITE MAP
            </a>
            <span>|</span>
            <a href="#" className="hover:text-black transition">
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      {/* 메인 네비게이션 바 */}
      <div
        className="sticky top-0 z-40 w-full bg-white border-b border-[#eaeaea]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <header className="w-full px-6 md:px-12 h-[89px] flex items-center transition-all duration-300">
          <div className="max-w-[1400px] mx-auto flex justify-between items-center w-full h-full relative">
            {/* 로고 */}
            <Link to="/" className="flex items-center">
              <img
                src={logoImg}
                alt="monami"
                className="w-[169px] h-[89px] object-contain"
              />
            </Link>

            {/* 데스크탑 메뉴 */}
            <nav className="hidden lg:flex items-center gap-[42px] h-full mr-auto ml-[180px]">
              {menuItems.map((item, idx) => (
                <div
                  key={idx}
                  className="h-full flex items-center relative group/item"
                >
                  <Link
                    to={item.links[0].path}
                    className="text-[#303030] hover:text-monami-red font-normal text-[17px] tracking-tight h-full flex items-center px-1 transition duration-200"
                    style={{ fontFamily: '"Noto Sans KR", sans-serif' }}
                  >
                    {item.title}
                  </Link>
                  {/* 호버 시 붉은색 밑줄 인디케이터 */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-monami-red scale-x-0 group-hover/item:scale-x-100 transition-transform duration-200" />
                </div>
              ))}
            </nav>

            {/* 유틸리티 아이콘 */}
            <div className="flex items-center gap-5">
              {/* 장바구니/메뉴 열기 버튼 */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-1 text-[#333333] hover:text-black transition cursor-pointer"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </header>

        {/* 메인 메뉴 마우스 호버 드롭다운 메가 메뉴 */}
        <div
          className={`absolute left-0 right-0 bg-white border-b border-monami-light transition-all duration-300 ease-in-out overflow-hidden z-30 ${
            isHovered
              ? "max-h-[380px] opacity-100 py-8"
              : "max-h-0 opacity-0 py-0 pointer-events-none"
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative flex">
            {/* 로고 영역과 동일한 너비의 왼쪽 여백용 스페이서 */}
            <div className="w-[169px] shrink-0" />

            {/* 헤더의 6개 메뉴와 위치를 정확히 일치시킨 드롭다운 열 구성 */}
            <div className="flex gap-[30px] items-start ml-[118px] mr-auto">
              {menuItems.map((category, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-4 text-center shrink-0"
                  style={{ width: "110px" }} // 각 열당 가로 너비 기준인 89px로 복원 설정
                >
                  <div className="flex flex-col gap-2">
                    {category.links.map((link, lIdx) => (
                      <Link
                        key={lIdx}
                        to={link.path}
                        className="text-[#666666] hover:text-monami-red hover:underline text-[13px] leading-tight transition duration-150 py-1"
                        style={{ fontFamily: '"Noto Sans KR", sans-serif' }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 장바구니 우측 사이드바 패널 (하드웨어 가속 트랜지션 슬라이드 적용) */}
      <div
        className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* 어두운 배경 오버레이 */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* 장바구니 드로어 패널 */}
        <div
          className={`relative bg-[#f0f0f0] w-full max-w-[420px] h-full shadow-2xl p-6 flex flex-col justify-between select-none transition-transform duration-300 ease-out transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* 내부 점선 테두리 디자인 컨테이너 */}
          <div className="border border-dashed border-neutral-400 rounded-3xl p-5 flex flex-col flex-1 justify-between h-full bg-[#f0f0f0]">
            <div>
              {/* 헤더 영역 (MY CART) */}
              <div className="flex items-center gap-2 mb-8">
                <svg
                  className="w-6 h-6 text-monami-red"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h2 className="text-[22px] font-extrabold text-monami-red tracking-wide uppercase">
                  MY CART
                </h2>
              </div>

              {/* 담긴 상품 목록 */}
              <div className="flex flex-col gap-4 overflow-y-auto max-h-[60vh] pr-1">
                {/* 단일 상품 카드 */}
                <div className="bg-[#fcfcfc] rounded-2xl p-4 border border-[#e3e3e3] shadow-xs flex gap-4 relative">
                  {/* 상품 제거 버튼 */}
                  <button className="absolute top-4 right-4 text-neutral-400 hover:text-red-500 transition cursor-pointer">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>

                  {/* 상품 썸네일 이미지 */}
                  <div className="w-[85px] h-[85px] bg-white border border-[#eaeaea] rounded-xl flex items-center justify-center p-2 shrink-0">
                    <img
                      src={pen4Img}
                      alt="153 아이디 샤프"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* 정보 기재 영역 */}
                  <div className="flex flex-col justify-between py-0.5 text-left flex-1 pr-6">
                    <div>
                      <h4 className="text-[13px] font-bold text-monami-red leading-tight mb-0.5">
                        153 아이디 샤프
                      </h4>
                      <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                        OPTION: BLACK
                      </span>
                    </div>

                    {/* 수량 및 개별 단가 */}
                    <div className="flex justify-between items-end mt-2">
                      <div className="flex items-center gap-1.5 bg-[#eaeaea] px-2 py-0.5 rounded text-[11px] font-semibold text-neutral-600">
                        <span>1개</span>
                        <span className="text-[7px] text-neutral-400">▼</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[13px] font-extrabold text-neutral-800">
                          10,900
                        </span>
                        <span className="text-[8px] text-neutral-400 ml-0.5">
                          KRW
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 빈 장바구니 슬롯 안내용 카드 레이아웃 */}
                <div className="h-[120px] rounded-2xl bg-neutral-200/40 border border-neutral-300/30 shadow-inner flex items-center justify-center" />
                <div className="h-[120px] rounded-2xl bg-neutral-200/40 border border-neutral-300/30 shadow-inner flex items-center justify-center" />
                <div className="h-[120px] rounded-2xl bg-neutral-200/40 border border-neutral-300/30 shadow-inner flex items-center justify-center" />
              </div>
            </div>

            {/* 하단 총액 표시 영역 */}
            <div className="border-t border-dashed border-neutral-300 pt-6 flex justify-end items-baseline gap-1 bg-[#f0f0f0] w-full">
              <span className="text-[26px] font-bold text-monami-red">
                10,900
              </span>
              <span className="text-[11px] text-monami-red font-medium uppercase tracking-wider">
                KRW
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

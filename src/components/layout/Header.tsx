import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/monami_logo.jpg";

export const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState("KOR");

  const menuItems = [
    { name: "모나미소개", path: "/" },
    { name: "모나미제품", path: "/" },
    { name: "NEWS & VIDEO", path: "/" },
    { name: "모나미 미술대회", path: "/" },
    { name: "고객지원", path: "/" },
    { name: "기업 구매 / 개발", path: "/" },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="w-full bg-[#fcfcfc] border-b border-[#f1f1f1] py-2 px-6 md:px-12 text-xs text-[#666666]">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center w-full">
          {/* Language & Social Links */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <button className="border border-[#e1e1e1] rounded px-2 py-0.5 flex items-center gap-1 hover:bg-white transition">
                <span>🇰🇷 {lang}</span>
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

          {/* Global Links */}
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

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 w-full bg-white border-b border-[#eaeaea] px-6 md:px-12 h-[89px] flex items-center transition-all duration-300">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center w-full h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoImg}
              alt="monami"
              className="w-[169px] h-[89px] object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-[42px]">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="text-[#303030] hover:text-black font-medium text-[17px] tracking-tight nav-hover-line transition duration-200"
                style={{ fontFamily: '"Noto Sans KR", sans-serif' }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-5">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1 text-[#333333] hover:text-black transition"
              aria-label="Search"
            >
              <Search size={22} />
            </button>

            {/* Hamburger Menu (Mobile/Tablet) */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1 text-[#333333] hover:text-black transition"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/55 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-white w-full max-w-2xl rounded-2xl p-8 relative shadow-2xl">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-black transition"
            >
              <X size={24} />
            </button>
            <h3 className="text-lg font-bold mb-4 text-center">검색어 입력</h3>
            <div className="relative border-b-2 border-black flex items-center pb-2">
              <input
                type="text"
                placeholder="검색어를 입력해 주세요."
                className="w-full text-lg outline-none pr-8 font-medium placeholder-neutral-300"
                autoFocus
              />
              <Search className="absolute right-0 text-neutral-400 cursor-pointer hover:text-black" />
            </div>
            <div className="mt-5 text-xs text-neutral-400 flex flex-wrap gap-2 justify-center">
              <span>추천 검색어:</span>
              <a href="#" className="underline hover:text-black">
                153 골드
              </a>
              <a href="#" className="underline hover:text-black">
                아크릴 마카
              </a>
              <a href="#" className="underline hover:text-black">
                만년필
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Side Slide Menu (Hamburger drawer) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-xs"
          />
          {/* Drawer Panel */}
          <div className="relative bg-white w-full max-w-sm h-full shadow-2xl p-8 flex flex-col justify-between animate-slide-in overflow-y-auto">
            <div>
              <div className="flex justify-between items-center mb-10">
                <span className="font-extrabold text-xl text-black">
                  monami.
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-neutral-400 hover:text-black transition"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {menuItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-bold text-neutral-800 hover:text-black transition border-b border-[#f7f7f7] pb-3"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="text-xs text-neutral-400 mt-10">
              <p className="mb-2">© MONAMI Co., Ltd. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-black">
                  개인정보처리방침
                </a>
                <a href="#" className="hover:text-black">
                  이용약관
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

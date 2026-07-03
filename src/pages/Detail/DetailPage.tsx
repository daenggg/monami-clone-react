import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { BrandWidget } from "../../components/layout/BrandWidget";
import { getProductById } from "../../api/mockData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import detailBannerImg from "../../assets/DetailBanner.jpg";
import { ScrollToTopButton } from "../../components/layout/ScrollToTopButton";

export const DetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = productId ? getProductById(productId) : undefined;

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [activeCategoryTab, setActiveCategoryTab] = useState("premium");
  const [isInCart, setIsInCart] = useState(false);

  // 로드 시 기본 색상 설정
  useEffect(() => {
    if (product && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  // 상세 페이지 진입 및 상품 ID 변경 시 스크롤을 맨 위로 초기화
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-between">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <h2 className="text-2xl font-bold mb-4">상품을 찾을 수 없습니다.</h2>
          <Link
            to="/"
            className="text-sm font-bold text-red-500 hover:underline"
          >
            홈으로 돌아가기
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // 썸네일 다음/이전 전환 핸들러
  const handlePrevImage = () => {
    setActiveImageIdx(
      (prev) => (prev - 1 + product.images.length) % product.images.length,
    );
  };

  const handleNextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* 제품 비주얼 상단 배너 */}
      <section
        className="w-full h-[300px] bg-cover bg-center flex flex-col items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${detailBannerImg})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-widest text-white mb-2">
            모나미제품
          </h1>
          <p className="text-xs text-neutral-300 font-medium">
            모나미는 당신의 행복한 기록과 늘 함께 합니다.
          </p>
        </div>
      </section>

      {/* 카테고리 네비게이션 탭 바 (배너 겹침 배치) */}
      <div className="w-full relative z-20 -mt-7">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-5 text-center text-xs md:text-[14px] shadow-lg overflow-hidden">
            {[
              { id: "premium", name: "프리미엄 펜" },
              { id: "fountain", name: "펜 · 펜슬" },
              { id: "marker", name: "마카 · 컬러링" },
              { id: "office", name: "노트 · 사무용품" },
              { id: "refill", name: "잉크 · 리필" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategoryTab(tab.id)}
                className={`py-5 font-bold border-r border-[#eaeaea] last:border-r-0 transition-all ${
                  activeCategoryTab === tab.id
                    ? "bg-monami-red text-white"
                    : "bg-white text-neutral-600 hover:bg-neutral-50"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 상세 스펙/제품 정보 섹션 */}
      <main className="max-w-[1400px] mx-auto w-full px-6 md:px-12 pt-20 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* 좌측: 제품 메인 컷 프레임 및 썸네일 슬라이더 */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* 메인 컷 뷰포트 */}
            <div className="w-full relative border border-[#dddddd] bg-white flex items-center justify-center p-12 aspect-square">
              <img
                src={product.images[activeImageIdx]}
                alt={product.name}
                className="max-h-[85%] max-w-[85%] object-contain pointer-events-none"
              />
            </div>

            {/* 썸네일 이동 컨트롤 */}
            <div className="flex items-center gap-3 w-full justify-between">
              <button
                onClick={handlePrevImage}
                className="w-10 h-10 border border-[#dddddd] flex items-center justify-center text-neutral-400 hover:text-black hover:border-neutral-400 transition"
              >
                <ChevronLeft size={18} strokeWidth={1.5} />
              </button>

              <div className="flex-1 flex gap-2 justify-center">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`w-14 h-14 border flex items-center justify-center p-1.5 transition ${
                      idx === activeImageIdx
                        ? "border-[#888888]"
                        : "border-[#e5e5e5] hover:border-neutral-400"
                    }`}
                  >
                    <img
                      src={img}
                      alt="thumb"
                      className="max-h-full max-w-full object-contain"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={handleNextImage}
                className="w-10 h-10 border border-[#dddddd] flex items-center justify-center text-neutral-400 hover:text-black hover:border-neutral-400 transition"
              >
                <ChevronRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* 우측: 상품명, 설명 및 특수 뱃지 메타 데이터 */}
          <div className="lg:col-span-7 text-left pl-0 lg:pl-6 flex flex-col justify-between min-h-[500px]">
            <div>
              {/* 상품 타이틀 및 장바구니 추가 버튼 */}
              <div className="border-b border-[#dddddd] pb-6 mb-8 flex justify-between items-end">
                <div>
                  <h1
                    className="text-[32px] font-normal text-[#111111] leading-tight mb-2"
                    style={{ letterSpacing: "-0.5px" }}
                  >
                    {product.name}
                  </h1>
                  <div className="w-8 h-[2px] bg-monami-red mb-3"></div>
                  <p className="text-[14px] text-[#666666] font-normal">
                    {product.description}
                  </p>
                </div>

                <button
                  onClick={() => setIsInCart(!isInCart)}
                  className={`border transition duration-300 rounded-full px-5 py-2 text-[12px] font-bold flex items-center gap-1.5 mb-1 cursor-pointer hover:text-white ${
                    isInCart
                      ? "bg-monami-red text-white border-transparent hover:bg-[#a80b30]"
                      : "border-monami-red text-monami-red bg-transparent hover:bg-monami-red hover:text-white"
                  }`}
                >
                  <svg
                    className="w-4 h-4 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="hover:text-white">
                    {isInCart ? "Added to Cart" : "Add to Cart"}
                  </span>
                </button>
              </div>

              {/* 스펙 리스트 */}
              <div className="flex flex-col gap-7 text-[13px]">
                {/* 핵심 특징 */}
                <div>
                  <h4 className="font-bold text-monami-red tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="text-[8px]">▪</span> KEY FEATURES
                  </h4>
                  <ul className="flex flex-col gap-1 pl-3 text-[#555555]">
                    <li className="list-none leading-relaxed">
                      - 클래식한 디자인을 기반으로 한 선물용 고급볼펜
                    </li>
                    <li className="list-none leading-relaxed">
                      - 육각 바디 형상으로 편안한 그립감
                    </li>
                    <li className="list-none leading-relaxed">
                      - 저중심 무게구조로 장시간 필기에도 부담이 적음
                    </li>
                  </ul>
                </div>

                {/* 색상 칩 */}
                <div>
                  <h4 className="font-bold text-monami-red tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="text-[8px]">▪</span> BODY COLOR
                  </h4>
                  <div className="flex gap-2 pl-3">
                    {[
                      {
                        label: "Rose Gold",
                        bg: "bg-[#ecc6b8]",
                        color: "text-neutral-700",
                      },
                      {
                        label: "Blue Violet",
                        bg: "bg-[#98aed5]",
                        color: "text-neutral-700",
                      },
                      {
                        label: "Silver Grey",
                        bg: "bg-[#9199a1]",
                        color: "text-white",
                      },
                    ].map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(chip.label)}
                        className={`w-16 h-10 flex flex-col items-center justify-center p-1 text-[9px] font-bold border transition ${
                          selectedColor === chip.label
                            ? "border-neutral-900 bg-neutral-900 text-white"
                            : "border-transparent " + chip.bg + " " + chip.color
                        }`}
                      >
                        <span className="leading-none text-[8px] font-light mb-0.5">
                          {chip.label.split(" ")[0]}
                        </span>
                        <span className="leading-none text-[8px] font-bold">
                          {chip.label.split(" ")[1] || ""}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 펜촉 규격 */}
                <div>
                  <h4 className="font-bold text-monami-red tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="text-[8px]">▪</span> POINT SIZE
                  </h4>
                  <p className="pl-3 text-[#555555]">1.0mm</p>
                </div>
              </div>
            </div>

            {/* 고지 사항 */}
            <div className="mt-12 border-t border-[#eeeeee] pt-6 text-[11px] text-[#888888] leading-relaxed">
              ※ 본 상품의 이미지를 포함한 모든 저작권은 모나미에게 있습니다.
              무단으로 도용하거나 사용할 시 법적 불이익을 받을 수 있습니다.
            </div>

            {/* 바로구매 링크 */}
            <div className="mt-8 flex justify-end items-center border-t border-[#eeeeee] pt-6 w-full">
              <a className="text-[12px] font-bold text-neutral-400 hover:text-black flex items-center gap-1.5 transition uppercase tracking-widest">
                <span>BUY NOW</span>
                <span className="text-[10px] font-light">❯</span>
              </a>
            </div>
          </div>
        </div>

        {/* 하단 목록보기 이동 버튼 */}
        <div className="flex justify-center mt-16 w-full">
          <a
            href="/#products"
            className="w-[143px] h-[40px] bg-monami-red hover:bg-[#a80b30] text-white font-bold text-xs tracking-wider flex items-center justify-center transition"
          >
            LIST
          </a>
        </div>
      </main>

      {/* 플로팅 서브 스토어 위젯 */}
      <BrandWidget />

      {/* 탑 버튼 */}
      <ScrollToTopButton />

      {/* 하단 영역 */}
      <Footer />
    </div>
  );
};

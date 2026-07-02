import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center py-24 px-6 text-center max-w-lg mx-auto">
        {/* Monami Style 404 Visual Icon */}
        <div className="relative mb-8">
          <span className="font-extrabold text-9xl text-neutral-200 tracking-tighter select-none">
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="text-2xl font-extrabold text-neutral-900 mb-4 tracking-tight">
          페이지를 찾을 수 없습니다.
        </h1>
        <div className="w-8 h-0.5 bg-monami-red mx-auto mb-6"></div>

        <p className="text-neutral-500 text-sm leading-relaxed mb-10">
          요청하신 페이지가 존재하지 않거나, 잘못된 경로입니다.
          <br />
          입력하신 주소를 다시 한번 확인해 주시기 바랍니다.
        </p>

        {/* Back button */}
        <Link
          to="/"
          className="bg-black hover:bg-neutral-800 text-white font-bold text-xs tracking-widest px-8 py-3.5 rounded-full shadow-md active:bg-neutral-900 transition-all-300 uppercase"
        >
          메인 페이지로 이동
        </Link>
      </main>

      <Footer />
    </div>
  );
};
export default NotFoundPage;

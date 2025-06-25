import React, { useEffect } from "react";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const NOTION_EMBED_URL = "https://stirring-watercress-df3.notion.site/ebd/c687ab24542e4b66b5d2ac72968465ea";

const Faqs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-100 flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center w-full">
        <div className="w-full max-w-7xl shadow-lg bg-white overflow-hidden">
          <iframe src={NOTION_EMBED_URL} className="w-full min-h-[70vh] h-[80vh] border-0" title="FAQs" allowFullScreen />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faqs;

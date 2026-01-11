import React, { useState } from "react";

const Hero = () => {
  // --- MODAL STATE ---
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <section id="home" className="relative w-full min-h-[893px] flex flex-col items-center pt-[145px] bg-white overflow-hidden rounded-[36px]">
      {/* 1. Hero Content */}
      <div className="relative z-20 text-center px-5 sm:px-10 lg:px-[45px] max-w-[1920px] mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-medium text-brisk-navy-100 leading-[1.1] mb-12 md:mb-[105px] tracking-tight font-['Inter']">
          Your Vision, <br className="hidden sm:block" /> Our Technology
        </h1>

        <p className="max-w-[850px] mx-auto text-slate-500 text-base sm:text-lg md:text-[24px] leading-[130%] mb-10 md:mb-[60px]">
          Empowering businesses and buildings with future-ready technology that
          works — seamlessly, securely, and efficiently.
        </p>

        <div className="flex justify-center">
          <div className="flex justify-center">
            {/* Added onClick to trigger modal */}
            <button 
              onClick={toggleModal}
              className="rounded-full px-8 py-4 font-medium transition-all active:scale-95
              bg-brisk-navy-100 text-white 
              md:bg-white/20 md:backdrop-blur-md md:border md:border-white/30 md:text-white 
              hover:md:bg-white/30">
              Get more info
            </button>
          </div>
        </div>
      </div>

      {/* --- RESPONSIVE MODAL COMPONENT --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop blur */}
          <div 
            className="absolute inset-0 bg-brisk-navy-100/60 backdrop-blur-sm transition-opacity"
            onClick={toggleModal}
          ></div>

          {/* Modal Card */}
          <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-[32px] bg-white shadow-2xl transition-all">
            <div className="p-8 md:p-10">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-['Inter'] text-2xl font-bold text-brisk-navy-100">
                  Ready to Innovate?
                </h3>
                <button 
                  onClick={toggleModal}
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-brisk-navy-100"
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <p className="mb-8 text-slate-500 text-base leading-relaxed">
                BriskTek provides custom IT consulting, end-to-end strata building technology, and 
                scalable software solutions tailored to your unique business vision.
              </p>

              <div className="space-y-4">
                <button className="w-full rounded-full bg-brisk-navy-100 py-4 font-bold text-white transition-all hover:opacity-90">
                  Book a Free Consultation
                </button>
                <button 
                  onClick={toggleModal}
                  className="w-full rounded-full border border-slate-200 py-4 font-bold text-slate-600 transition-all hover:bg-slate-50"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. THE RUGBY BALL GROUP (Existing background) */}
      <div className="absolute bottom-[-900px] left-1/2 -translate-x-1/2 w-[2334px] h-[1380px] pointer-events-none z-10">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-white rounded-[100%] blur-[4px] opacity-10"></div>
          <div className="absolute top-[280px] left-1/2 -translate-x-1/2 w-[2014px] h-[1020px] bg-brisk-navy-100 rounded-[100%] blur-[160px] opacity-100 z-10"></div>
          <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[2072px] h-[1225px] bg-sphere-pink rounded-[100%] blur-[80px] opacity-40"></div>
          <div className="absolute top-[150px] left-1/2 -translate-x-1/2 w-[2014px] h-[1020px] bg-sphere-blue rounded-[100%] blur-[160px] opacity-70"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
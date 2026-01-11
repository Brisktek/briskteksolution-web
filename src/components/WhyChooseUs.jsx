import React from "react";
import architecturalBackground from "../assets/tallbuildings.png";

const WhyChooseUs = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* --- HEADER CONTENT --- */}
      <div className="mx-auto max-w-[1920px] px-[5%] pt-20 md:pt-32 lg:px-[120px] lg:pt-40">
        <div className="text-left">
          <h2 className="mb-4 font-['Inter'] text-[42px] font-bold leading-[110%] tracking-tight text-[#0B1221] md:text-[64px] lg:text-[80px]">
            Why Choose <br /> BriskTek?
          </h2>
          <p className="text-[14px] font-medium text-slate-400 md:text-base">
            Why Businesses and Builders Trust BriskTek.
          </p>
        </div>
      </div>

      {/* --- TRANSITION CONTAINER: IMAGE + ARCH --- */}
      <div className="relative w-full flex flex-col">
        <img
          src={architecturalBackground}
          alt="IT Consulting"
          className="h-full w-full object-cover"
        />
        
        {/* THE DOWNWARD POINTED ARCH */}
        <div className="absolute inset-x-0 bottom-0 h-24 w-full md:h-32 lg:h-[220px] z-10">
          <svg
            width="100%"
            height="100.5%"
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L720 220L1440 0V220H0Z"
              fill="#0B1221"
            />
          </svg>
        </div>

        {/* --- DESKTOP ONLY: FLOATING CARDS --- */}
        <div className="hidden lg:block absolute inset-x-0 bottom-[-80px] z-20">
          <div className="mx-auto max-w-[1920px] px-[5%] lg:px-[120px]">
            <div className="grid lg:grid-cols-3 items-end gap-6">
              <div className="flex lg:h-[400px] flex-col justify-between rounded-[32px] bg-white p-10 shadow-2xl transition-all hover:scale-[1.02]">
                <h4 className="text-right lg:text-[36px] font-bold text-[#0B1221]">Innovation</h4>
                <p className="lg:text-[24px] leading-relaxed text-slate-500">
                  We deliver scalable, future-proof technology that evolves with your business.
                </p>
              </div>
              <div className="flex lg:h-[480px] flex-col justify-between rounded-[32px] bg-white p-10 shadow-2xl transition-all hover:scale-[1.02]">
                <h4 className="text-right lg:text-[36px] font-bold text-[#0B1221]">Reliability</h4>
                <p className="lg:text-[24px] leading-relaxed text-slate-500">
                  Seamless operations backed by trusted support.
                </p>
              </div>
              <div className="flex lg:h-[620px] flex-col justify-between rounded-[32px] bg-white p-10 shadow-2xl transition-all hover:scale-[1.02]">
                <h4 className="text-right lg:text-[36px] font-bold text-[#0B1221]">Customer Success</h4>
                <p className="lg:text-[24px] leading-relaxed text-slate-500">
                  Your growth is our mission. We build partnerships, not just solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE & MEDIUM ONLY: PLAIN TEXT SECTION --- */}
      {/* This area only appears on small/medium screens below the arch */}
      <div className="bg-[#0B1221] px-[5%] py-16 md:px-12 lg:hidden">
        <div className="flex flex-col gap-12">
          <div className="border-l-2 border-slate-700 pl-6">
            <h3 className="mb-2 text-[20px] font-bold uppercase tracking-wider text-white">Innovation</h3>
            <p className="text-[16px] leading-relaxed text-slate-400">
              We deliver scalable, future-proof technology that evolves with your business.
            </p>
          </div>
          <div className="border-l-2 border-slate-700 pl-6">
            <h3 className="mb-2 text-[20px] font-bold uppercase tracking-wider text-white">Reliability</h3>
            <p className="text-[16px] leading-relaxed text-slate-400">
              Seamless operations backed by trusted support.
            </p>
          </div>
          <div className="border-l-2 border-slate-700 pl-6">
            <h3 className="mb-2 text-[20px] font-bold uppercase tracking-wider text-white">Customer Success</h3>
            <p className="text-[16px] leading-relaxed text-slate-400">
              Your growth is our mission. We build partnerships, not just solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Spacer to maintain layout height on desktop */}
      <div className="hidden lg:block h-24 w-full md:h-32 lg:h-[220px] z-10 bg-[#0B1221]"></div>
    </section>
  );
};

export default WhyChooseUs;
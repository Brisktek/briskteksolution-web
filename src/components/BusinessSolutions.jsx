import React from "react";
import BusinessSol1 from "../assets/BusinessSol1.png";
import BusinessSol2 from "../assets/BusinessSol2.png";
import BusinessSol3 from "../assets/BusinessSol3.png";
import Chain from "../assets/chain.png";
import stratabuilding from "../assets/stratabuilding.png";
import infrasetup from "../assets/infrasetup.png";
import cursor from "../assets/arrow.png";

const BusinessSolutions = () => {
  return (
    /* Background matches the light grey triangle fill (#F9F9F9) */
    <section id="services">
      <div className="px-[5%] py-20 md:py-32 lg:px-[120px] lg:py-40">
        <div className="mx-auto max-w-[1920px]">

          {/* --- SECTION HEADER --- */}
<div class="mb-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#2348FF] text-sm font-bold text-white">1</div>
          <div className="mb-[100px] md:mb-[160px] flex flex-col items-center text-center">
            {/* Subheading: Inter SemiBold */}
            <span className="mb-4 font-semibold tracking-normal text-[#2348FF] font-['Inter'] font-medium text-[36px] sm:text-[54px] lg:text-[80px]">
              Business IT Solutions
            </span>

            {/* Main Heading exact replica: 
              - Inter Medium (500), 80px Size
              - Line height 125%, Letter spacing -4px
              - Max Width 1329px 
          */}
            <h2 className="max-w-[1329px] font-['Inter'] font-medium text-[36px] sm:text-[54px] lg:text-[80px] leading-[125%] tracking-[-4px] text-slate-900">
              Helping your business stay <br className="hidden lg:block" />
              connected, protected, and productive.
            </h2>
          </div>

          {/* --- SOLUTIONS LIST --- */}
          <div className="flex flex-col gap-[120px] md:gap-[200px]">
            {/* Item 1: Website Design */}
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
              <div className="w-full max-w-[540px] text-left order-2 lg:order-1">
                <span className="mb-6 inline-block rounded-full border border-slate-200 px-4 py-1.5 text-[14px] font-medium text-slate-400">
                  Business IT Solution
                </span>
                <h3 className="mb-6 text-[32px] md:text-[48px] lg:text-[64px] font-bold text-slate-900 leading-[110%] tracking-tight">
                  Website Design <br /> & Development
                </h3>
                <p className="text-[18px] md:text-[20px] leading-relaxed text-slate-500 max-w-[420px]">
                  Modern, responsive websites that reflect your brand and drive
                  growth.
                </p>
              </div>
              {/* Image container replica */}
              <div className="w-full lg:w-[50%] h-[400px] md:h-[600px] overflow-visible relative order-1 lg:order-2">
                <img
                  src={BusinessSol1}
                  alt="Website Development"
                  className="h-full w-full object-cover rounded-[36px]"
                />
                {/* Floating cursor element replica */}
                <img
                  src={cursor}
                  alt=""
                  className="absolute -bottom-10 -right-10 w-32 h-32 hidden md:block"
                />
              </div>
            </div>

            {/* Item 2: IT Consulting (Reversed) */}
            <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:justify-between">
              <div className="w-full max-w-[540px] text-left order-2">
                <span className="mb-6 inline-block rounded-full border border-slate-200 px-4 py-1.5 text-[14px] font-medium text-slate-400">
                  Business IT Solution
                </span>
                <h3 className="mb-6 text-[32px] md:text-[48px] lg:text-[64px] font-bold text-slate-900 leading-[110%] tracking-tight">
                  IT Consulting
                </h3>
                <p className="text-[18px] md:text-[20px] leading-relaxed text-slate-500 max-w-[420px]">
                  Strategic guidance to choose the right systems, tools, and
                  infrastructure.
                </p>
              </div>
              <div className="w-full lg:w-[50%] h-[400px] md:h-[600px] overflow-hidden order-1">
                <img
                  src={BusinessSol2}
                  alt="IT Consulting"
                  className="h-full w-full object-cover rounded-[36px]"
                />
              </div>
            </div>

            {/* Item 3: Computer & Laptop Support */}
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
              <div className="w-full max-w-[540px] text-left order-2 lg:order-1">
                <span className="mb-6 inline-block rounded-full border border-slate-200 px-4 py-1.5 text-[14px] font-medium text-slate-400">
                  Business IT Solution
                </span>
                <h3 className="mb-6 text-[32px] md:text-[48px] lg:text-[64px] font-bold text-slate-900 leading-[110%] tracking-tight">
                  Computer & <br /> Laptop Support
                </h3>
                <p className="text-[18px] md:text-[20px] leading-relaxed text-slate-500 max-w-[420px]">
                  Repairs, upgrades, and proactive maintenance for smooth
                  performance.
                </p>
              </div>
              <div className="w-full lg:w-[50%] h-[400px] md:h-[600px] overflow-visible relative order-1 lg:order-2">
                <img
                  src={BusinessSol3}
                  alt="Computer Support"
                  className="h-full w-full object-cover rounded-[36px]"
                />
                {/* Floating chain element replica */}
                <img
                  src={Chain}
                  alt=""
                  className="absolute -bottom-15 -left-12 w-50 h-50 hidden md:block"
                />
              </div>
            </div>
          </div>

          {/* --- BLUE GEOMETRIC TRIANGLE FOOTER --- */}
        </div>
      </div>
      <div className="relative mt-[150px] md:mt-[250px] h-[150px] md:h-[350px] w-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-x-0 bottom-0"
        >
          <path d="M0 0L720 300L1440 0V300H0V0Z" fill="#2348FF" />
        </svg>
      </div>
      <div
        className="relative w-full px-5 py-20 md:px-12 md:py-32 lg:py-[120px]"
        style={{
          background: "linear-gradient(180deg, #2348FF 0%, #68FFF7 100%)",
        }}
      >
        <div className="mx-auto max-w-[1920px] relative z-10">
          {/* HEADER */}
          {/* --- SECTION HEADER --- */}
          {/* Number Circle Badge */}
            <div className="mb-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-sm font-bold text-white">
              2
            </div>
          <div className="mb-[60px] md:mb-[100px] flex flex-col items-center text-center px-5">
            

            {/* Subheading: Removed underline as per latest Figma frames */}
            <h1 className="max-w-[1329px] font-['Inter'] font-medium text-[42px] sm:text-[64px] lg:text-[80px] leading-[125%] tracking-[-4px] text-white"
        >
              Strata Technology Solutions
            </h1>

            {/* Main Heading exact replica:
      - Font: Inter
      - Weight: 500 (Medium)
      - Size: 80px (on desktop)
      - Line height: 125%
      - Letter spacing: -4px
      - Max Width: 1329px
  */}
            <h2 className="max-w-[1329px] text-[#adaeb3] font-['Inter'] font-medium text-[42px] sm:text-[64px] lg:text-[80px] leading-[125%] tracking-[-4px]">
              Reliable tech infrastructure for residential{" "}
              <br className="hidden lg:block" />
              and commercial strata properties.
            </h2>
          </div>
          {/* --- STRATA CARDS GRID --- */}
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 md:grid-cols-2">
            {/* Card 1: Tech Setup */}
            <div className="flex flex-col rounded-[32px] bg-white p-8 md:p-10 shadow-xl transition-all hover:scale-[1.02]">
              <span className="mb-6 inline-block w-fit rounded-full border border-slate-200 px-4 py-1.5 text-[12px] font-medium text-slate-400">
                Business IT Solution
              </span>
              <div className="mb-8 overflow-hidden rounded-2xl h-[240px] md:h-[280px]">
                <img
                  src={stratabuilding}
                  alt="Strata Buildings"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-['Inter'] font-medium text-[18px] sm:text-[22px] lg:text-[40px] mb-8">
                <p className="text-[#2348FF]">Tech Setup for</p>
                Strata Buildings
              </h3>
              <p className="text-[14px] leading-relaxed text-[#86868B]">
                End-to-end setup of networking, <br></br>communication, and control
                systems.
              </p>
            </div>

            {/* Card 2: Infrastructure Setup */}
            <div className="flex flex-col rounded-[32px] bg-white p-8 md:p-10 shadow-xl transition-all hover:scale-[1.02]">
              <span className="mb-6 inline-block w-fit rounded-full border border-slate-200 px-4 py-1.5 text-[12px] font-medium text-slate-400">
                Business IT Solution
              </span>
              <div className="mb-8 overflow-hidden rounded-2xl h-[240px] md:h-[280px]">
                <img
                  src={infrasetup}
                  alt="Infrastructure Setup"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-['Inter'] font-medium text-[18px] sm:text-[22px] lg:text-[40px] mb-8">
                <p className="text-[#2348FF]">Infrastructure</p>
                 Setup
              </h3>
              <p className="text-[14px] leading-relaxed text-[#86868B]">
                Structured cabling, CCTV, access control,<br></br>and smart integrations for modern buildings.
                systems.
              </p>
            </div>
          </div>

          {/* CARDS GRID */}
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 md:grid-cols-2">
            {/* ... (Your Strata Cards) ... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;

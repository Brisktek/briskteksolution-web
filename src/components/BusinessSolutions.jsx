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
          {/* --- SECTION HEADER 1 --- */}
          <div className="mb-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#2348FF] text-sm font-bold text-white">
            1
          </div>
          <div className="mb-[100px] flex flex-col items-center text-center md:mb-[160px]">
            <span className="mb-4 font-['Inter'] text-[32px] font-medium tracking-normal text-[#2348FF] sm:text-[54px] lg:text-[80px]">
              Business IT Solutions
            </span>
            {/* Fixed: Replaced fixed tracking-[-4px] with responsive tracking */}
            <h2 className="max-w-[1329px] font-['Inter'] text-[32px] font-medium leading-[125%] tracking-tight sm:text-[54px] sm:tracking-normal lg:text-[80px] lg:tracking-[-4px] text-slate-900">
              Helping your business stay <br className="hidden lg:block" />
              connected, protected, and productive.
            </h2>
          </div>

          {/* --- SOLUTIONS LIST --- */}
          <div className="flex flex-col gap-[120px] md:gap-[200px]">
            {/* Item 1: Website Design */}
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
              <div className="order-2 w-full max-w-[540px] text-left lg:order-1">
                <span className="mb-6 inline-block rounded-full border border-slate-200 px-4 py-1.5 text-[14px] font-medium text-slate-400">
                  Business IT Solution
                </span>
                <h3 className="mb-6 text-[32px] font-bold leading-[110%] tracking-tight text-slate-900 md:text-[48px] lg:text-[64px]">
                  Website Design <br /> & Development
                </h3>
                <p className="max-w-[420px] text-[18px] leading-relaxed text-slate-500 md:text-[20px]">
                  Modern, responsive websites that reflect your brand and drive
                  growth.
                </p>
              </div>
              <div className="relative order-1 h-[400px] w-full overflow-visible md:h-[600px] lg:order-2 lg:w-[50%]">
                <img
                  src={BusinessSol1}
                  alt="Website Development"
                  className="h-full w-full rounded-[36px] object-cover"
                />
                <img
                  src={cursor}
                  alt=""
                  className="absolute -bottom-10 -right-10 hidden h-32 w-32 md:block"
                />
              </div>
            </div>

            {/* Item 2: IT Consulting (Reversed) */}
            <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:justify-between">
              <div className="order-2 w-full max-w-[540px] text-left">
                <span className="mb-6 inline-block rounded-full border border-slate-200 px-4 py-1.5 text-[14px] font-medium text-slate-400">
                  Business IT Solution
                </span>
                <h3 className="mb-6 text-[32px] font-bold leading-[110%] tracking-tight text-slate-900 md:text-[48px] lg:text-[64px]">
                  IT Consulting
                </h3>
                <p className="max-w-[420px] text-[18px] leading-relaxed text-slate-500 md:text-[20px]">
                  Strategic guidance to choose the right systems, tools, and
                  infrastructure.
                </p>
              </div>
              <div className="order-1 h-[400px] w-full overflow-hidden md:h-[600px] lg:w-[50%]">
                <img
                  src={BusinessSol2}
                  alt="IT Consulting"
                  className="h-full w-full rounded-[36px] object-cover"
                />
              </div>
            </div>

            {/* Item 3: Computer & Laptop Support */}
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
              <div className="order-2 w-full max-w-[540px] text-left lg:order-1">
                <span className="mb-6 inline-block rounded-full border border-slate-200 px-4 py-1.5 text-[14px] font-medium text-slate-400">
                  Business IT Solution
                </span>
                <h3 className="mb-6 text-[32px] font-bold leading-[110%] tracking-tight text-slate-900 md:text-[48px] lg:text-[64px]">
                  Computer & <br /> Laptop Support
                </h3>
                <p className="max-w-[420px] text-[18px] leading-relaxed text-slate-500 md:text-[20px]">
                  Repairs, upgrades, and proactive maintenance for smooth
                  performance.
                </p>
              </div>
              <div className="relative order-1 h-[400px] w-full overflow-visible md:h-[600px] lg:order-2 lg:w-[50%]">
                <img
                  src={BusinessSol3}
                  alt="Computer Support"
                  className="h-full w-full rounded-[36px] object-cover"
                />
                <img
                  src={Chain}
                  alt=""
                  className="absolute -bottom-15 -left-12 hidden h-50 w-50 md:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 2 DIVIDER & CONTAINER --- */}
      <div className="relative mt-[150px] h-[150px] w-full md:mt-[250px] md:h-[350px]">
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
        <div className="relative z-10 mx-auto max-w-[1920px]">
          {/* Badge 2 */}
          <div className="mb-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-sm font-bold text-white">
            2
          </div>
          <div className="mb-[60px] flex flex-col items-center px-5 text-center md:mb-[100px]">
            {/* Fixed: Responsive tracking on Strata headings */}
            <h1 className="max-w-[1329px] font-['Inter'] text-[32px] font-medium leading-[125%] tracking-tight sm:text-[64px] sm:tracking-normal lg:text-[80px] lg:tracking-[-4px] text-white">
              Strata Technology Solutions
            </h1>
            <h2 className="max-w-[1329px] font-['Inter'] text-[32px] font-medium leading-[125%] tracking-tight sm:text-[64px] sm:tracking-normal lg:text-[80px] lg:tracking-[-4px] text-[#adaeb3]">
              Reliable tech infrastructure for residential{" "}
              <br className="hidden lg:block" />
              and commercial strata properties.
            </h2>
          </div>

          {/* Strata Cards Grid */}
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 md:grid-cols-2">
            {/* Card 1: Tech Setup */}
            <div className="flex flex-col rounded-[32px] bg-white p-8 shadow-xl transition-all hover:scale-[1.02] md:p-10">
              <span className="mb-6 inline-block w-fit rounded-full border border-slate-200 px-4 py-1.5 text-[12px] font-medium text-slate-400">
                Business IT Solution
              </span>
              <div className="mb-8 h-[240px] overflow-hidden rounded-2xl md:h-[280px]">
                <img
                  src={stratabuilding}
                  alt="Strata Buildings"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-8 font-['Inter'] text-[18px] font-medium sm:text-[22px] lg:text-[40px]">
                <p className="text-[#2348FF]">Tech Setup for</p>
                Strata Buildings
              </h3>
              <p className="text-[14px] leading-relaxed text-[#86868B]">
                End-to-end setup of networking, communication, and control
                systems.
              </p>
            </div>

            {/* Card 2: Infrastructure Setup */}
            <div className="flex flex-col rounded-[32px] bg-white p-8 shadow-xl transition-all hover:scale-[1.02] md:p-10">
              <span className="mb-6 inline-block w-fit rounded-full border border-slate-200 px-4 py-1.5 text-[12px] font-medium text-slate-400">
                Business IT Solution
              </span>
              <div className="mb-8 h-[240px] overflow-hidden rounded-2xl md:h-[280px]">
                <img
                  src={infrasetup}
                  alt="Infrastructure Setup"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-8 font-['Inter'] text-[18px] font-medium sm:text-[22px] lg:text-[40px]">
                <p className="text-[#2348FF]">Infrastructure</p>
                Setup
              </h3>
              <p className="text-[14px] leading-relaxed text-[#86868B]">
                Structured cabling, CCTV, access control, and smart
                integrations for modern buildings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 3: BILDSTRATA PRODUCT LAUNCH --- */}
      <div className="relative w-full bg-[#0B1221] px-[5%] py-24 md:py-36 lg:px-[120px]">
        <div className="mx-auto max-w-[1920px]">
          {/* Badge 3 */}
          <div className="mb-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm font-bold text-white">
            3
          </div>

          <div className="mb-[60px] flex flex-col items-center text-center md:mb-[100px]">
            {/* Tag / Coming Soon Label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
              </span>
              <span className="text-[13px] font-semibold uppercase tracking-wider text-cyan-300">
                Coming Soon
              </span>
            </div>

            {/* Fixed: Responsive tracking on Bildstrata heading */}
            <h2 className="max-w-[1329px] font-['Inter'] text-[32px] font-medium leading-[120%] tracking-tight sm:text-[54px] sm:tracking-normal lg:text-[76px] lg:tracking-[-3px] text-white">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Bildstrata</span>:
              <br className="hidden md:block" />
              The Next Era of Strata Building Management
            </h2>

            <p className="mt-8 max-w-[820px] text-[18px] leading-relaxed text-slate-400 md:text-[22px]">
              We are building a smart, centralized strata management platform
              designed to streamline daily operations, record keeping, documentations,
              bookings, and resident communication — available on web
              and mobile soon.
            </p>
          </div>

          {/* Bildstrata Feature Preview Cards */}
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-[28px] border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm transition-all hover:border-slate-700">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 text-cyan-400">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Centralized Operations</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Manage strata council minutes, maintenance logs, and financial records in one encrypted hub.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm transition-all hover:border-slate-700">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 text-cyan-400">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Mobile-First App</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Empower residents and managers to submit work orders, track tickets, and book amenities on the go.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm transition-all hover:border-slate-700">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 text-cyan-400">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Smart Building Sync</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Seamlessly bridges hardware integrations, smart access controllers, and direct communications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
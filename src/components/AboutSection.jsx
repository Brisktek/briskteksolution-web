import React from "react";

const AboutSection = () => {
  return (
    <section
      id="aboutus"
      className="relative z-30 w-full overflow-hidden bg-white"
    >
      <div
        className="mx-auto max-w-[1920px]"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F9F9F9 100%)",
        }}
      >
        {/* PART 1: INTRO TEXT */}
        <div className="px-[5%] py-20 md:py-32 lg:px-[120px] lg:py-40">
          <div className="mb-[29px] inline-block rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-400 md:px-5 md:py-2.5 md:text-base">
            About BriskTek
          </div>

          <h2 className="mb-[29px] text-3xl font-medium leading-[1.2] tracking-tight sm:text-5xl md:text-6xl lg:text-[64px]">
            <span className="text-slate-300">
              Innovative IT solutions that build smarter
            </span>{" "}
            <span className="block font-bold text-brisk-navy-100 lg:inline">
              businesses and buildings.
            </span>
          </h2>

          <p className="max-w-[1000px] text-lg leading-relaxed text-slate-500 sm:text-xl md:text-2xl">
            At BriskTek Solution, we believe technology should make life
            simpler, smarter, and more efficient. We are a team of IT
            professionals passionate about delivering dependable and innovative
            solutions that help businesses and buildings achieve more.
          </p>
        </div>

        {/* PART 2: SUPPORT YOUR GROWTH - Removed pb-10 md:pb-20 */}
        <div className="">
          <h2 className="text-center text-3xl tracking-tight sm:text-5xl md:text-6xl lg:text-[64px]">
            <span className="font-medium text-slate-400">We’re Here to</span>{" "}
            <span className="font-bold text-brisk-navy-100">
              Support Your Growth.
            </span>
          </h2>

          <div className="mx-2 md:mx-3 lg:mx-4 my-5 md:my-10 lg:my-[120px]">
            {/* Added extra mb-20 md:mb-40 to create space beneath cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 mb-20 md:mb-40">
              {/* Card 1 */}
              <div className="group flex flex-col items-start rounded-2xl bg-[#F9F9F9] p-8 text-left transition-all hover:ring-1 hover:ring-blue-100 md:p-12">
                <div className="mb-8 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 text-sm text-slate-400 md:mb-[42px]">
                  1
                </div>
                <h3 className="mb-6 text-2xl font-bold leading-tight text-brisk-navy-100 md:text-3xl lg:text-4xl">
                  Part of Your Team
                </h3>
                <p className="text-base leading-relaxed text-slate-500 md:text-lg mb-4">
                  Our experts integrate seamlessly with your business, operating
                  as an extension of your in-house team.
                </p>
                <p className="text-base leading-relaxed text-slate-500 md:text-lg">
                  We prevent and solve technical issues before they impact your
                  operations — keeping your systems stable, protected, and up to
                  date.
                </p>
              </div>

              
              {/* Card 2 */}
              <div className="group flex flex-col items-start rounded-2xl bg-[#F9F9F9] p-8 text-left transition-all hover:ring-1 hover:ring-blue-100 md:p-12">
                <div className="mb-8 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 text-sm text-slate-400 md:mb-[42px]">
                2
              </div>
                <h3 className="mb-6 text-2xl font-bold leading-tight text-brisk-navy-100 md:text-3xl lg:text-4xl">
                  Understanding Your Needs
                </h3>
                <p className="text-base leading-relaxed text-slate-500 md:text-lg mb-4">
                  Every business is unique. That’s why we begin with
                  understanding your goals, auditing your IT setup, and
                  assessing potential risks.
                </p>
                <p className="text-base leading-relaxed text-slate-500 md:text-lg">
                  Based on your needs, we provide tailored solutions and
                  flexible support packages that fit your operations.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group flex flex-col items-start rounded-2xl bg-[#F9F9F9] p-8 text-left transition-all hover:ring-1 hover:ring-blue-100 md:p-12 sm:col-span-2 lg:col-span-1">
                <div className="mb-8 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 text-sm text-slate-400 md:mb-[42px]">
                  3
                </div>
                <h3 className="mb-6 text-2xl font-bold leading-tight text-brisk-navy-100 md:text-3xl lg:text-4xl">
                  Always Ready
                </h3>
                <p className="text-base leading-relaxed text-slate-500 md:text-lg mb-4">
                  Whether you need on-site assistance or quick remote support,
                  our team is always available when you need us most.
                </p>
                <p className="text-base leading-relaxed text-slate-500 md:text-lg">
                  From system maintenance to urgent recovery, BriskTek ensures
                  you never face downtime alone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PART 3: GEOMETRIC DIVIDER - Now properly separated for responsive space */}
        <div className="relative h-32 w-full sm:h-48 md:h-[300px]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 300"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-x-0 bottom-0"
          >
            <path d="M0 0L720 300L1440 0V300H0V0Z" fill="#FFFFFF" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

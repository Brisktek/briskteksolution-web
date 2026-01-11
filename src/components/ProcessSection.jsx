import React from "react";

const ProcessSection = () => {
  return (
    <section className="relative w-full bg-white px-5 py-24 md:px-12 lg:px-[120px] lg:py-32">
      <div className="mx-auto max-w-[1920px]">
        {/* --- SECTION HEADER --- */}
        <div className="mb-20 text-left md:mb-32">
          <h2 className="mb-4 font-['Inter'] text-[42px] font-bold tracking-tight text-[#0F172A] md:text-[64px] lg:text-[80px] lg:tracking-[-4px]">
            How we work?
          </h2>
          <p className="text-[14px] font-medium text-slate-400 md:text-base">
            Our Process — From Vision to Execution.
          </p>
        </div>

        {/* --- PROCESS TIMELINE --- */}
        <div className="relative mx-auto max-w-[1000px]">
          {/* Vertical Dashed Line Spine */}
          <div className="absolute left-[39px] top-0 h-full w-0 border-l-2 border-dashed border-slate-200 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-20 md:gap-32">
            {/* STEP 1: DISCOVER */}
            <div className="relative flex items-center gap-8 md:flex-row md:justify-between">
              <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#0B1221] shadow-xl md:order-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <div className="flex flex-col md:w-[42%] md:text-right md:order-1">
                <h3 className="mb-2 font-['Inter'] text-[24px] font-bold tracking-widest text-[#0F172A]">
                  DISCOVER
                </h3>
                <p className="text-[16px] leading-relaxed text-slate-500">
                  We start by understanding your business goals and challenges.
                </p>
              </div>
              <div className="hidden md:block md:w-[42%] md:order-3"></div>
            </div>

            {/* STEP 2: DESIGN */}
            <div className="relative flex items-center gap-8 md:flex-row md:justify-between">
              <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#0B1221] shadow-xl md:order-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 19 7-7 3 3-7 7-3-3z" />
                  <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="m2 2 20 20" />
                </svg>
              </div>
              <div className="hidden md:block md:w-[42%] md:order-1"></div>
              <div className="flex flex-col md:w-[42%] md:text-left md:order-3">
                <h3 className="mb-2 font-['Inter'] text-[24px] font-bold tracking-widest text-[#0F172A]">
                  DESIGN
                </h3>
                <p className="text-[16px] leading-relaxed text-slate-500">
                  Our team develops tailored IT solutions that fit your
                  operations perfectly.
                </p>
              </div>
            </div>

            {/* STEP 3: DELIVER */}
            <div className="relative flex items-center gap-8 md:flex-row md:justify-between">
              <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#0B1221] shadow-xl md:order-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                  <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              </div>
              <div className="flex flex-col md:w-[42%] md:text-right md:order-1">
                <h3 className="mb-2 font-['Inter'] text-[24px] font-bold tracking-widest text-[#0F172A]">
                  DELIVER
                </h3>
                <p className="text-[16px] leading-relaxed text-slate-500">
                  We implement efficiently with minimal disruption.
                </p>
              </div>
              <div className="hidden md:block md:w-[42%] md:order-3"></div>
            </div>

            {/* STEP 4: SUPPORT */}
            <div className="relative flex items-center gap-8 md:flex-row md:justify-between">
              <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#0B1221] shadow-xl md:order-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                </svg>
              </div>
              <div className="hidden md:block md:w-[42%] md:order-1"></div>
              <div className="flex flex-col md:w-[42%] md:text-left md:order-3">
                <h3 className="mb-2 font-['Inter'] text-[24px] font-bold tracking-widest text-[#0F172A]">
                  SUPPORT
                </h3>
                <p className="text-[16px] leading-relaxed text-slate-500">
                  Ongoing maintenance and proactive monitoring for long-term
                  stability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- VALUED CLIENT SECTION --- */}
        <div className="w-full bg-white py-20 lg:py-40">
          <div className="mx-auto max-w-[1920px]">
            <h2 className="mb-20 text-left font-['Inter'] text-[32px] font-medium tracking-tight text-[#0B1221] md:text-[48px] lg:text-[64px]">
              Valued Client
            </h2>

            {/* Centering wrapper with restricted width */}
            <div className="mx-auto max-w-[850px]">
              {/* Logo Grid: justify-items-center ensures each item is centered in its cell */}
              <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-4 lg:gap-12">
                <div className="flex flex-col items-center">
                  <img
                    src="https://www.ranchovan.com/wp-content/uploads/logos/rancho-logo-1.png"
                    alt="Rancho Management Services (B.C.) Ltd. Logo"
                    className="h-[28px] w-auto transition-all"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://awmalliance.com/wp-content/uploads/2019/01/awm-color.png"
                    alt="AWM Alliance Real Estate Group"
                    className="h-16 w-auto transition-all"
                  ></img>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    id="fsresidentiallogo"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="113"
                    height="32"
                    viewBox="0 0 113 32"
                  >
                    <path
                      class="logo-1"
                      fill="#bcbec0"
                      d="M15.491 0.155v8.607l4.668 3.111 6.951-3.973z"
                    ></path>
                    <path
                      class="logo-2"
                      fill="#0098d1"
                      d="M0 23.393v8.607l27.11-15.493-6.951-4.634z"
                    ></path>
                    <path
                      class="logo-3"
                      fill="#0076a3"
                      d="M20.16 11.873l6.951 4.634v-8.607z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--1"
                      fill="#58595b"
                      d="M34.66 8.625v2.888h4.893v1.779h-4.893v4.33h-1.961v-10.775h7.448v1.777h-5.487z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--2"
                      fill="#58595b"
                      d="M41.254 8.625v-1.96h2.038v1.96h-2.038zM41.316 17.623v-7.903h1.93v7.903h-1.93z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--3"
                      fill="#58595b"
                      d="M48.807 11.407c-1.336 0-2.037 0.958-2.037 2.235v3.981h-1.915v-7.903h1.612l0.167 1.186c0.364-0.912 1.308-1.295 2.233-1.295 0.197 0 0.395 0.019 0.593 0.049v1.821c-0.212-0.044-0.441-0.074-0.654-0.074z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--4"
                      fill="#58595b"
                      d="M55.888 16.907c-0.639 0.642-1.628 0.913-2.706 0.913-1.002 0-1.899-0.29-2.553-0.913-0.457-0.441-0.837-1.096-0.837-1.838h1.779c0 0.349 0.182 0.73 0.424 0.928 0.306 0.243 0.654 0.349 1.201 0.349 0.639 0 1.61-0.136 1.61-1.004 0-0.455-0.304-0.761-0.79-0.835-0.699-0.107-1.49-0.153-2.189-0.306-1.078-0.225-1.807-1.109-1.807-2.11 0-0.807 0.334-1.368 0.806-1.779 0.577-0.5 1.413-0.791 2.401-0.791 0.942 0 1.898 0.305 2.476 0.928 0.426 0.458 0.698 1.050 0.698 1.626h-1.805c0-0.302-0.139-0.547-0.321-0.744-0.228-0.228-0.638-0.365-1.035-0.365-0.272 0-0.531 0-0.819 0.122-0.335 0.138-0.608 0.426-0.608 0.836 0 0.563 0.488 0.73 0.912 0.788 0.713 0.093 0.912 0.11 1.687 0.232 1.245 0.197 2.157 0.986 2.157 2.233 0 0.758-0.272 1.32-0.682 1.731z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--5"
                      fill="#58595b"
                      d="M60.81 17.728c-1.597 0-2.386-0.911-2.386-2.431v-4.012h-1.444v-1.565h1.444v-2.005l1.899-0.471v2.476h1.991v1.565h-1.991v3.843c0 0.608 0.275 0.869 0.882 0.869 0.394 0 0.714-0.017 1.232-0.077v1.595c-0.532 0.137-1.065 0.213-1.627 0.213z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--6"
                      fill="#58595b"
                      d="M70.81 16.663c-0.82 0.821-2.083 1.157-3.405 1.157-1.139 0-2.341-0.305-3.222-1.111-0.639-0.579-1.123-1.489-1.123-2.508h2.004c0 0.532 0.244 1.004 0.564 1.322 0.455 0.456 1.183 0.578 1.809 0.578 0.743 0 1.459-0.151 1.867-0.578 0.245-0.256 0.426-0.515 0.426-1.030 0-0.791-0.608-1.156-1.278-1.279-0.729-0.137-1.67-0.166-2.384-0.288-1.489-0.244-2.738-1.216-2.738-3.011 0-0.848 0.382-1.565 0.943-2.127 0.713-0.698 1.9-1.137 3.162-1.137 1.155 0 2.278 0.363 3.009 1.047 0.638 0.609 1.079 1.399 1.095 2.297h-2.006c-0.017-0.383-0.215-0.792-0.472-1.064-0.349-0.366-1.062-0.58-1.639-0.58-0.612 0-1.309 0.139-1.75 0.594-0.228 0.243-0.364 0.518-0.364 0.912 0 0.699 0.458 1.064 1.094 1.17 0.686 0.105 1.642 0.183 2.34 0.273 1.612 0.227 2.965 1.277 2.965 3.115-0 1.004-0.365 1.717-0.896 2.249z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--7"
                      fill="#58595b"
                      d="M79.638 14.264h-5.288c-0.015 0.608 0.198 1.184 0.577 1.548 0.275 0.261 0.653 0.487 1.17 0.487 0.548 0 0.881-0.106 1.155-0.378 0.167-0.167 0.304-0.38 0.381-0.669h1.82c-0.044 0.472-0.364 1.095-0.665 1.459-0.669 0.79-1.656 1.111-2.661 1.111-1.079 0-1.869-0.381-2.49-0.974-0.793-0.759-1.218-1.867-1.218-3.159 0-1.265 0.381-2.387 1.141-3.164 0.592-0.609 1.444-1.003 2.52-1.003 1.172 0 2.236 0.473 2.89 1.459 0.577 0.868 0.713 1.764 0.683 2.752 0 0-0.016 0.366-0.016 0.532zM77.266 11.498c-0.259-0.273-0.654-0.457-1.199-0.457-0.578 0-1.051 0.243-1.324 0.608-0.273 0.349-0.394 0.715-0.409 1.23h3.418c-0.015-0.592-0.183-1.049-0.487-1.381z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--8"
                      fill="#58595b"
                      d="M84.774 11.407c-1.338 0-2.038 0.958-2.038 2.235v3.981h-1.915v-7.903h1.612l0.167 1.186c0.362-0.912 1.306-1.295 2.235-1.295 0.197 0 0.394 0.019 0.592 0.049v1.821c-0.214-0.044-0.44-0.074-0.653-0.074z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--9"
                      fill="#58595b"
                      d="M91.079 17.623h-2.022l-2.932-7.903h2.005l1.976 5.562 1.87-5.562h1.958l-2.855 7.903z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--10"
                      fill="#58595b"
                      d="M94.906 8.625v-1.96h2.036v1.96h-2.036zM94.968 17.623v-7.903h1.93v7.903h-1.93z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--11"
                      fill="#58595b"
                      d="M104.618 16.544c-0.547 0.681-1.505 1.246-2.706 1.246s-2.202-0.577-2.748-1.246c-0.594-0.745-0.868-1.733-0.868-2.888 0-1.156 0.273-2.143 0.868-2.889 0.547-0.668 1.547-1.246 2.748-1.246s2.159 0.563 2.706 1.246c0.364 0.472 0.577 1.095 0.607 1.718h-1.87c-0.012-0.289-0.106-0.532-0.227-0.731-0.226-0.348-0.637-0.591-1.216-0.591-0.516 0-0.897 0.214-1.153 0.486-0.459 0.503-0.533 1.265-0.533 2.007 0 0.744 0.074 1.489 0.533 1.989 0.256 0.274 0.637 0.5 1.153 0.5 0.579 0 0.99-0.242 1.216-0.589 0.121-0.199 0.215-0.443 0.227-0.731h1.87c-0.029 0.623-0.243 1.247-0.607 1.719z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--12"
                      fill="#58595b"
                      d="M113.293 14.264h-5.288c-0.015 0.608 0.198 1.184 0.577 1.548 0.273 0.261 0.653 0.487 1.173 0.487 0.542 0 0.88-0.106 1.153-0.378 0.166-0.167 0.306-0.38 0.38-0.669h1.822c-0.045 0.472-0.364 1.095-0.669 1.459-0.667 0.79-1.656 1.111-2.659 1.111-1.076 0-1.869-0.381-2.49-0.974-0.79-0.759-1.217-1.867-1.217-3.159 0-1.265 0.38-2.387 1.139-3.164 0.593-0.609 1.444-1.003 2.523-1.003 1.172 0 2.237 0.473 2.888 1.459 0.577 0.868 0.716 1.764 0.683 2.752 0 0-0.015 0.366-0.015 0.532zM110.924 11.498c-0.26-0.273-0.657-0.457-1.202-0.457-0.575 0-1.048 0.243-1.32 0.608-0.276 0.349-0.397 0.715-0.411 1.23h3.418c-0.015-0.592-0.184-1.049-0.484-1.381z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--13"
                      fill="#58595b"
                      d="M68.682 27.398l-0.932-2.054h-1.364v2.054h-0.62v-4.936h1.936c0.58 0 0.981 0.161 1.253 0.438 0.236 0.252 0.389 0.571 0.389 1.003 0 0.431-0.14 0.723-0.376 0.972-0.147 0.156-0.355 0.275-0.591 0.349l0.989 2.174h-0.684zM67.701 23.032h-1.316v1.733h1.316c0.587 0 1.002-0.237 1.002-0.862s-0.415-0.871-1.002-0.871z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--14"
                      fill="#58595b"
                      d="M70.861 27.398v-4.936h3.298v0.57h-2.679v1.504h2.351v0.584h-2.351v1.703h2.679v0.575h-3.298z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--15"
                      fill="#58595b"
                      d="M78.619 26.991c-0.342 0.335-0.869 0.495-1.398 0.495-0.599 0-1.080-0.166-1.415-0.473-0.314-0.292-0.528-0.715-0.528-1.181h0.647c0 0.292 0.146 0.582 0.349 0.776 0.221 0.215 0.598 0.309 0.947 0.309 0.375 0 0.696-0.079 0.918-0.287 0.151-0.139 0.25-0.313 0.25-0.579 0-0.381-0.243-0.701-0.83-0.793l-0.779-0.116c-0.738-0.111-1.315-0.523-1.315-1.309 0-0.369 0.166-0.722 0.431-0.974 0.343-0.32 0.781-0.488 1.295-0.488 0.481 0 0.954 0.161 1.281 0.476 0.299 0.285 0.459 0.639 0.471 1.057h-0.647c-0.014-0.246-0.103-0.459-0.243-0.62-0.189-0.216-0.487-0.341-0.869-0.341-0.354 0-0.661 0.096-0.877 0.341-0.127 0.147-0.2 0.313-0.2 0.535 0 0.447 0.367 0.647 0.736 0.698 0.278 0.034 0.551 0.080 0.822 0.124 0.82 0.117 1.371 0.618 1.371 1.396 0 0.413-0.176 0.719-0.418 0.954z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--16"
                      fill="#58595b"
                      d="M80.568 27.398v-4.936h0.632v4.936h-0.632z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--17"
                      fill="#58595b"
                      d="M86.094 26.903c-0.35 0.332-0.818 0.494-1.296 0.494h-1.718v-4.936h1.718c0.479 0 0.946 0.168 1.296 0.502 0.542 0.515 0.632 1.252 0.632 1.962 0 0.709-0.097 1.462-0.632 1.977zM85.676 23.372c-0.231-0.231-0.556-0.341-0.878-0.341h-1.097v3.791h1.097c0.321 0 0.647-0.109 0.878-0.339 0.389-0.395 0.424-1.029 0.424-1.557 0-0.53-0.034-1.147-0.424-1.554z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--18"
                      fill="#58595b"
                      d="M88.276 27.398v-4.936h3.302v0.57h-2.679v1.504h2.351v0.584h-2.351v1.703h2.679v0.575h-3.302z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--19"
                      fill="#58595b"
                      d="M96.134 27.398l-2.424-3.968v3.968h-0.597v-4.936h0.696l2.423 3.98v-3.98h0.597v4.936h-0.694z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--20"
                      fill="#58595b"
                      d="M100.199 23.039v4.358h-0.627v-4.358h-1.47v-0.577h3.563v0.577h-1.466z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--21"
                      fill="#58595b"
                      d="M102.938 27.398v-4.936h0.636v4.936h-0.636z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--22"
                      fill="#58595b"
                      d="M108.382 27.398l-0.403-1.17h-2.145l-0.396 1.17h-0.628l1.744-4.936h0.722l1.745 4.936h-0.64zM106.898 23.081l-0.867 2.562h1.745l-0.879-2.562z"
                    ></path>
                    <path
                      class="logo-letter logo-letter--23"
                      fill="#58595b"
                      d="M110.26 27.398v-4.936h0.619v4.356h2.374v0.58 island-2.993z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://fivestarbc.ca/wp-content/uploads/2023/08/cropped-FiveStarLogo.png"
                    alt="Five Star Services (B.C.) Ltd. Logo"
                    className="h-[28px] w-auto transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

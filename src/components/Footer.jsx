import React from "react";
import logo from "../assets/logo.svg";
import logo_name from "../assets/logo_name.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16 font-['Inter']">
      <div className="mx-auto max-w-[1920px] px-[5%] pb-12 lg:px-[120px]">
        
        {/* --- TOP SECTION: Logo and About Us --- */}
        {/* Changed items-center to items-start to align left on mobile */}
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20 mb-16 text-left">
  
          {/* Logo Group */}
          <div className="flex items-center gap-4 shrink-0">
            <img 
              src={logo} 
              alt="BriskTek Icon" 
              className="h-16 md:h-20 w-auto object-contain" 
            />
            <img 
              src={logo_name} 
              alt="BriskTek Name" 
              className="h-16 md:h-20 w-auto object-contain" 
            />
          </div>

          {/* About Us */}
          <div className="max-w-[450px] flex flex-col justify-center">
            <h4 className="mb-2 text-[20px] font-bold text-[#0B1221]">About Us</h4>
            <p className="text-[15px] leading-relaxed">
              Your Vision, Our Technology. Providing reliable IT solutions that
              empower businesses and strata buildings across Canada.
            </p>
          </div>
        </div>

        {/* --- BOTTOM SECTION: Navigation Links Grid --- */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 text-left">
          
          {/* Services */}
          <div>
            <h4 className="mb-6 text-[16px] font-bold text-[#0B1221]">Services</h4>
            <ul className="flex flex-col gap-4 text-[13px] md:text-[14px]">
              <li className="hover:text-blue-600 cursor-pointer flex items-start gap-2">
                <span className="mt-2 h-1 w-1 rounded-full bg-slate-300"></span>
                Website Design & Development
              </li>
              <li className="hover:text-blue-600 cursor-pointer flex items-start gap-2">
                <span className="mt-2 h-1 w-1 rounded-full bg-slate-300"></span>
                IT Consulting
              </li>
              <li className="hover:text-blue-600 cursor-pointer flex items-start gap-2">
                <span className="mt-2 h-1 w-1 rounded-full bg-slate-300"></span>
                Computer & Laptop Support
              </li>
              <li className="hover:text-blue-600 cursor-pointer flex items-start gap-2">
                <span className="mt-2 h-1 w-1 rounded-full bg-slate-300"></span>
                Strata Technology Solutions
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-6 text-[16px] font-bold text-[#0B1221]">Company</h4>
            <ul className="flex flex-col gap-4 text-[13px] md:text-[14px]">
              <li className="hover:text-blue-600 cursor-pointer flex items-start gap-2">
                <span className="mt-2 h-1 w-1 rounded-full bg-slate-300"></span>
                About BriskTek
              </li>
              <li className="hover:text-blue-600 cursor-pointer flex items-start gap-2">
                <span className="mt-2 h-1 w-1 rounded-full bg-slate-300"></span>
                Business IT Solution
              </li>
              <li className="hover:text-blue-600 cursor-pointer flex items-start gap-2">
                <span className="mt-2 h-1 w-1 rounded-full bg-slate-300"></span>
                Why Choose BriskTek?
              </li>
              <li className="hover:text-blue-600 cursor-pointer flex items-start gap-2">
                <span className="mt-2 h-1 w-1 rounded-full bg-slate-300"></span>
                How we work?
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="mb-6 text-[16px] font-bold text-[#0B1221]">Contact us</h4>
            <div className="flex flex-col gap-4 text-[13px] md:text-[14px]">
              <p>
                <span className="font-semibold text-slate-700">Call:</span> +1 (778) 000-0000
              </p>
              <p>
                <span className="font-semibold text-slate-700">Email:</span> info@briskteksolution.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM BAR: Navy Copyright Strip --- */}
      <div className="w-full bg-[#0B1221] py-8">
        <div className="mx-auto max-w-[1920px] px-[5%] lg:px-[120px]">
          {/* Changed items-center to items-start for mobile left alignment */}
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center text-[11px] md:text-[12px] text-slate-400">
            <p>000 - 000 Forster Street North Vancouver, BC, Canada AB1 C34</p>
            <p>All right reserved. privacy Policy | Site Map</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
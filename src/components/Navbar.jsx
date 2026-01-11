import React, { useState } from "react";
import logoIcon from "../assets/logo.svg";
import logoName from "../assets/logo_name.svg";

const smoothScrollTo = (targetY, duration = 1000) => {
  const startY = window.pageYOffset;
  const difference = targetY - startY;
  const startTime = performance.now();

  // "Quart" easing creates a smooth slow-down at the end
  const easeInOutQuart = (t) => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;

  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    window.scrollTo(0, startY + difference * easeInOutQuart(progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Smooth Scroll Logic
  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsOpen(false);

    // 1. Calculate target position
    let targetY = 0;
    if (item !== "Home") {
      const targetId = item.toLowerCase().replace(/\s+/g, "");
      const element = document.getElementById(targetId);
      if (element) {
        // Offset for the fixed header height (137px on desktop)
        const offset = window.innerWidth >= 768 ? 137 : 80;
        targetY =
          element.getBoundingClientRect().top + window.pageYOffset - offset;
      }
    }

    // 2. Trigger the custom smooth animation
    smoothScrollTo(targetY, 1000); // 1000ms for a more luxurious feel
  };

  return (
    <nav className="w-full min-h-[80px] md:h-[137px] flex items-center justify-between px-[20px] md:px-[45px] py-[20px] md:py-[40px] bg-[#F9F9F9]/50 backdrop-blur-sm sticky top-0 z-50 font-['Inter']">
      {/* Logo Section */}
      <div className="flex items-start gap-[12px] md:gap-[16px] z-50">
        <div className="flex-shrink-0 w-[40px] md:w-auto">
          <img
            src={logoIcon}
            alt="BriskTek Icon"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex items-center h-[30px] md:h-auto">
          <img
            src={logoName}
            alt="BriskTek Solution"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>

      {/* Hamburger Icon - Only visible on small screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 z-50 p-2 cursor-pointer"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-8 h-0.5 bg-brisk-navy-100 transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-8 h-0.5 bg-brisk-navy-100 transition-opacity ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-8 h-0.5 bg-brisk-navy-100 transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Navigation Links */}
      <ul
        className={`
        /* Desktop Design */
        md:flex md:flex-row md:items-center md:static md:bg-transparent md:p-0 md:gap-[32px] md:w-auto md:h-auto
        
        /* Mobile Hamburger Design */
        fixed top-0 left-0 w-full h-screen bg-[#F9F9F9] flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        {["Home", "About Us", "Services", "Contact us"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
              onClick={(e) => handleNavClick(e, item)}
              className="transition-all duration-300 ease-in-out hover:text-[#2348FF] text-[24px] font-medium text-brisk-navy-100 "
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

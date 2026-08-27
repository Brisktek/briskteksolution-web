/* eslint-disable no-undef */
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Hero = () => {
  const formRef = useRef(null);

  // Modal & Form States
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleInfoModal = () => setIsInfoModalOpen(!isInfoModalOpen);

  const toggleConsultationModal = () => {
    setIsConsultationModalOpen(!isConsultationModalOpen);
    setStatus("");
  };

  const openConsultationFromInfo = () => {
    setIsInfoModalOpen(false);
    setIsConsultationModalOpen(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // 1. Invisible Honeypot check for bots
    if (e.target.honeypot.value !== "") {
      return;
    }

    setLoading(true);
    setStatus("");

    // 2. EmailJS Credentials
    // Replace this:
// const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
// const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
// const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

// With this:
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setLoading(false);
      setStatus("Success! Your consultation request has been sent.");
      formRef.current.reset();
    } catch (error) {
      setLoading(false);
      console.error("EmailJS Error:", error);
      setStatus("Failed to send request. Please try again.");
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[893px] w-full flex-col items-center overflow-hidden rounded-[36px] bg-white pt-[145px]"
    >
      {/* 1. Hero Content */}
      <div className="relative z-20 mx-auto max-w-[1920px] px-5 text-center sm:px-10 lg:px-[45px]">
        <h1 className="mb-12 font-['Inter'] text-4xl font-medium leading-[1.1] tracking-tight text-brisk-navy-100 sm:text-6xl md:mb-[105px] md:text-7xl lg:text-[84px]">
          Your Vision, <br className="hidden sm:block" /> Our Technology
        </h1>

        <p className="mx-auto mb-10 max-w-[850px] text-base leading-[130%] text-slate-500 sm:text-lg md:mb-[60px] md:text-[24px]">
          Empowering businesses and buildings with future-ready technology that
          works — seamlessly, securely, and efficiently.
        </p>

        <div className="flex justify-center">
          <button
            onClick={toggleInfoModal}
            className="rounded-full bg-brisk-navy-100 px-8 py-4 font-medium text-white transition-all active:scale-95 hover:md:bg-white/30 md:border md:border-white/30 md:bg-white/20 md:text-white md:backdrop-blur-md"
          >
            Get more info
          </button>
        </div>
      </div>

      {/* --- INFO MODAL --- */}
      {isInfoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-brisk-navy-100/60 backdrop-blur-sm transition-opacity"
            onClick={toggleInfoModal}
          ></div>

          <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-[32px] bg-white shadow-2xl transition-all">
            <div className="p-8 md:p-10">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-['Inter'] text-2xl font-bold text-brisk-navy-100">
                  Ready to Innovate?
                </h3>
                <button
                  onClick={toggleInfoModal}
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-brisk-navy-100"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <p className="mb-8 text-base leading-relaxed text-slate-500">
                BriskTek provides custom IT consulting, end-to-end strata
                building technology, and scalable software solutions tailored to
                your unique business vision.
              </p>

              <div className="space-y-4">
                <button
                  onClick={openConsultationFromInfo}
                  className="w-full rounded-full bg-brisk-navy-100 py-4 font-bold text-white transition-all hover:opacity-90 active:scale-95"
                >
                  Book a Free Consultation
                </button>
                <button
                  onClick={toggleInfoModal}
                  className="w-full rounded-full border border-slate-200 py-4 font-bold text-slate-600 transition-all hover:bg-slate-50"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- CONSULTATION FORM MODAL (EMAILJS) --- */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-brisk-navy-100/60 backdrop-blur-sm transition-opacity"
            onClick={toggleConsultationModal}
          ></div>

          <div className="relative z-10 my-8 w-full max-w-2xl overflow-hidden rounded-[32px] bg-[#0B1221] shadow-2xl transition-all">
            <div className="p-8 md:p-10">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-['Inter'] text-2xl font-bold text-white md:text-3xl">
                  Book a Free Consultation
                </h3>
                <button
                  onClick={toggleConsultationModal}
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <form
                ref={formRef}
                onSubmit={handleFormSubmit}
                className="grid grid-cols-1 gap-5 md:grid-cols-2"
              >
                {/* Honeypot Trap */}
                <input
                  type="text"
                  name="honeypot"
                  style={{ display: "none" }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                {/* First Name */}
                <div className="flex flex-col">
                  <label className="mb-2 text-sm font-medium text-slate-400">
                    First Name *
                  </label>
                  <input
                    required
                    name="first_name"
                    type="text"
                    placeholder="First name"
                    className="rounded-lg bg-slate-800/50 p-3.5 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Last Name */}
                <div className="flex flex-col">
                  <label className="mb-2 text-sm font-medium text-slate-400">
                    Last Name *
                  </label>
                  <input
                    required
                    name="last_name"
                    type="text"
                    placeholder="Last name"
                    className="rounded-lg bg-slate-800/50 p-3.5 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="mb-2 text-sm font-medium text-slate-400">
                    Email *
                  </label>
                  <input
                    required
                    name="user_email"
                    type="email"
                    placeholder="email@example.com"
                    className="rounded-lg bg-slate-800/50 p-3.5 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label className="mb-2 text-sm font-medium text-slate-400">
                    Phone
                  </label>
                  <input
                    name="user_phone"
                    type="tel"
                    placeholder="Phone number"
                    className="rounded-lg bg-slate-800/50 p-3.5 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col md:col-span-2">
                  <label className="mb-2 text-sm font-medium text-slate-400">
                    Brief Message
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="How can we help your business?"
                    className="rounded-lg bg-slate-800/50 p-3.5 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                {/* Submit Button & Status Message */}
                <div className="flex flex-col gap-3 md:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-blue-600 py-3.5 font-bold text-white transition-all hover:bg-blue-700 active:scale-95 disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Submit Request"}
                  </button>
                  {status && (
                    <p
                      className={`text-center text-sm font-medium ${status.includes("Failed") ? "text-red-400" : "text-blue-400"}`}
                    >
                      {status}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* 2. Background Elements */}
      <div className="pointer-events-none absolute bottom-[-900px] left-1/2 z-10 h-[1380px] w-[2334px] -translate-x-1/2">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 rounded-[100%] bg-white opacity-10 blur-[4px]"></div>
          <div className="absolute top-[280px] left-1/2 z-10 h-[1020px] w-[2014px] -translate-x-1/2 rounded-[100%] bg-brisk-navy-100 opacity-100 blur-[160px]"></div>
          <div className="absolute top-[80px] left-1/2 h-[1225px] w-[2072px] -translate-x-1/2 rounded-[100%] bg-sphere-pink opacity-40 blur-[80px]"></div>
          <div className="absolute top-[150px] left-1/2 h-[1020px] w-[2014px] -translate-x-1/2 rounded-[100%] bg-sphere-blue opacity-70 blur-[160px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

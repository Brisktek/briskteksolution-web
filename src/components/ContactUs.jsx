import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Honeypot Anti-Spam Check
    if (e.target.honeypot.value !== '') {
      return;
    }

    setLoading(true);
    setStatus('Sending...');

    // 2. EmailJS Credentials from Environment Variables (Vite)
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setLoading(false);
      setStatus('Success! Your message has been sent to BriskTek.');
      formRef.current.reset();
    } catch (error) {
      setLoading(false);
      console.error('EmailJS Error:', error);
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contactus" className="w-full bg-white">
      {/* Dark Form Container */}
      <div className="bg-[#0B1221] px-[5%] py-16 md:py-24 lg:px-[120px]">
        <div className="mx-auto max-w-[1920px]">
          <h2 className="mb-10 font-['Inter'] text-[32px] font-bold text-white md:text-[48px]">
            Contact Us Today
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Invisible Honeypot Anti-Spam Field */}
            <input
              type="text"
              name="honeypot"
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />

            {/* First Name */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-slate-400">First Name *</label>
              <input
                required
                name="first_name"
                type="text"
                placeholder="Enter your first name"
                className="rounded-lg bg-slate-800/50 p-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-slate-400">Last Name *</label>
              <input
                required
                name="last_name"
                type="text"
                placeholder="Enter your last name"
                className="rounded-lg bg-slate-800/50 p-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-slate-400">Email *</label>
              <input
                required
                name="user_email"
                type="email"
                placeholder="email@example.com"
                className="rounded-lg bg-slate-800/50 p-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-slate-400">Phone</label>
              <input
                name="user_phone"
                type="tel"
                placeholder="Enter your phone number"
                className="rounded-lg bg-slate-800/50 p-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 text-sm font-medium text-slate-400">Brief Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="How can we help your business?"
                className="rounded-lg bg-slate-800/50 p-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="md:col-span-2 flex flex-col gap-4">
              <button
                type="submit"
                disabled={loading}
                className="w-fit rounded-lg bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700 active:scale-95 disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>
              {status && (
                <p className={`text-sm font-medium ${status.includes('wrong') ? 'text-red-400' : 'text-blue-400'}`}>
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* CTA Bottom Section */}
      <div className="px-[5%] py-20 lg:px-[120px]">
        <div className="mx-auto max-w-[1920px] text-right">
          <h3 className="mb-4 font-['Inter'] text-[42px] font-bold tracking-tight text-[#0B1221] md:text-[64px]">
            Let's Build Smarter, Together.
          </h3>
          <p className="ml-auto max-w-[500px] text-base font-medium">
            Get in touch today to see how BriskTek can simplify your technology and help your business grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
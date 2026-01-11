import React from 'react';

const ContactUs = () => {
  return (
    <section id="contactus" className="w-full bg-white">
      {/* Dark Form Container */}
      <div className="bg-[#0B1221] px-[5%] py-16 md:py-24 lg:px-[120px]">
        <div className="mx-auto max-w-[1920px]">
          <h2 className="mb-10 font-['Inter'] text-[32px] font-bold text-white md:text-[48px]">
            Contact Us Today
          </h2>
          
          <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 text-sm font-medium text-slate-400">Name</label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                className="rounded-lg bg-slate-800/50 p-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-slate-400">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="rounded-lg bg-slate-800/50 p-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-slate-400">Phone</label>
              <input 
                type="tel" 
                placeholder="Enter your phone number" 
                className="rounded-lg bg-slate-800/50 p-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 text-sm font-medium text-slate-400">Brief Message</label>
              <textarea 
                rows="4" 
                placeholder="Write your message here" 
                className="rounded-lg bg-slate-800/50 p-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            
            <div className="md:col-span-2">
              <button className="rounded-lg bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700">
                Submit
              </button>
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
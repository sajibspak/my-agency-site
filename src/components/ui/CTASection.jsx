import React from 'react';
import { NavLink } from 'react-router-dom';
import heroBg from '../../assets/image/linebg.png';

const CTASection = () => {
  return (
    <section style={{ backgroundImage: `url(${heroBg})` }}
                    className="bg-[#0A0A0A] bg-cover bg-center bg-no-repeat py-32 px-4 relative overflow-hidden flex flex-col items-center justify-center text-center font-sans border-t border-gray-800/50">
      
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট (অপশনাল সুন্দর্যের জন্য) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* বড় টেক্সট */}
        <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-none font-serif relative">
          LET’S TALK
          <br />
          <span className="text-gray-500/20 absolute top-2 left-2 -z-10 blur-sm select-none">LET’S TALK</span> {/* ছায়া ইফেক্ট */}
        </h2>

        {/* মাঝখানের বাটন (টেক্সটের ওপর ভাসমান) */}
        <div className="relative py-4 md:py-8">
            <NavLink 
              to="/contact"
              className="relative z-20 w-32 h-32 md:w-40 md:h-40 bg-cyan-500 rounded-full flex flex-col items-center justify-center gap-2 text-white hover:scale-110 hover:bg-cyan-400 transition-all duration-500 shadow-xl shadow-cyan-500/30 group mx-auto"
            >
              {/* অ্যারো আইকন */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5L19.5 4.5m0 0H8.25m11.25 0v11.25" />
              </svg>
              
              {/* বাটনের টেক্সট */}
              <span className="text-xs font-semibold tracking-widest uppercase">
                Get in Touch
              </span>
            </NavLink>
            
            {/* কানেক্টিং লাইন (ডিজাইন এলিমেন্ট) */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-800 -z-10 hidden md:block"></div>
        </div>

        <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-none font-serif relative">
          WITH US
          <span className="text-gray-500/20 absolute top-2 left-2 -z-10 blur-sm select-none">WITH US</span>
        </h2>

      </div>

      {/* সাবটাইটেল */}
      <p className="mt-12 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Ready to scale your brand? Let’s build something extraordinary together.
      </p>

    </section>
  );
};

export default CTASection;
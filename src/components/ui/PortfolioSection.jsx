import React, { useEffect, useState } from 'react';
import { ArrowRight, Image as ImageIcon, ExternalLink } from 'lucide-react';
import dhakalogo from '../../assets/dhakalogo.svg';
import dhakamockup from '../../assets/image/dhakamockup.jpg';
import BeautyCosmetic from '../../assets/image/BeautyCosmetic.avif';
import CondoDev from '../../assets/image/CondoDev.avif';


const PortfolioSection = () => {
  return (
    <section className="bg-[#212121] text-white py-16 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <p className="text-cyan-500 animate-text font-semibold uppercase tracking-wider mb-3">
              Recent Work
            </p>
            <h2 className="text-3xl animate-text md:text-6xl font-medium font-serif leading-tight">
              Brands We've Helped Launch, Scale, <br className="hidden md:block" />
              And Command Premium Pricing
            </h2>
          </div>

          <a href="#" className="flex items-center gap-4 animate-text text-gray-300 hover:text-white transition-all duration-300 group">

            {/* টেক্সট */}
            <span className="text-lg font-medium animate-text tracking-wide">View all Case Study</span>

            {/* SVG আইকন */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              // আইকনের ট্রানজিশন এবং মুভমেন্ট এখানে সেট করা হয়েছে
              className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              {/* পেছনের বক্স: হোভার করলে রঙ বদলাবে */}
              <rect
                width="32"
                height="32"
                rx="4"
                className="fill-[#09171A] transition-colors duration-300 group-hover:fill-[#00D8FF]" // এখানে আপনার ব্র্যান্ড কালার দিন (যেমন: Cyan)
              />

              {/* তীরের চিহ্ন: হোভার করলে কালো হবে (যাতে লাইট ব্যাকগ্রাউন্ডে দেখা যায়) */}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.70318 20.438C8.48092 20.6603 8.35605 20.9617 8.35605 21.276C8.35605 21.5904 8.48092 21.8918 8.70318 22.1141C8.92545 22.3364 9.2269 22.4612 9.54123 22.4612C9.85556 22.4612 10.157 22.3364 10.3793 22.1141L20.089 12.4044L20.0873 19.5999C20.0873 19.7558 20.118 19.9101 20.1776 20.0541C20.2373 20.198 20.3247 20.3289 20.4349 20.4391C20.5451 20.5492 20.6759 20.6367 20.8198 20.6963C20.9638 20.7559 21.1181 20.7866 21.274 20.7866C21.4298 20.7866 21.5841 20.7559 21.7281 20.6963C21.8721 20.6367 22.0029 20.5492 22.1131 20.4391C22.2233 20.3289 22.3107 20.198 22.3703 20.0541C22.43 19.9101 22.4607 19.7558 22.4607 19.5999L22.4607 9.54331C22.4608 9.38742 22.4303 9.23302 22.3707 9.08895C22.3112 8.94489 22.2238 8.81399 22.1135 8.70376C22.0033 8.59353 21.8724 8.50612 21.7283 8.44656C21.5843 8.38699 21.4299 8.35643 21.274 8.35663H11.2173C10.9026 8.35663 10.6008 8.48165 10.3782 8.7042C10.1557 8.92675 10.0307 9.22858 10.0307 9.54331C10.0307 9.85804 10.1557 10.1599 10.3782 10.3824C10.6008 10.605 10.9026 10.73 11.2173 10.73L18.4129 10.7283L8.70318 20.438Z"
                className="fill-white transition-colors duration-300 group-hover:fill-black" // ব্যাকগ্রাউন্ড লাইট হলে অ্যারো কালো হবে
              />
            </svg>
          </a>

        </div>

        {/* Grid Layout */}
        <div className="space-y-6">

          {/* Top Row: Main Card + Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Left Large Card (Via Citrus) */}
            <div className="lg:col-span-2 relative bg-[#1E1E1E] rounded-xl overflow-hidden min-h-[400px] flex flex-col group cursor-pointer border border-white/5 hover:border-white/10 transition-colors">
              {/* Logo Content */}
              <img src={dhakamockup} alt="My Icon" className="w-full object-cover transition-transform duration-500 hover:scale-110" />
              {/* Card Footer Info */}
              <div className="bg-[#09171A] backdrop-blur-sm p-6 flex justify-between items-center border-t border-white/5">
                <div>
                  <h4 className="text-white text-2xl font-serif animate-text font-medium mb-1">Dhaka Guys</h4>
                  <p className="text-gray-400 animate-text text-sm">Brand Strategy, Verbal Identity, Visual Identity, Web Design, Monthly Retainer</p>
                </div>
                <div className="rounded-full bg-[#02B8DF] p-2 text-black hover:bg-[#35C6E5] group-hover:text-white transition-all">
                  <ArrowRight size={20} className="-rotate-45" />
                </div>
              </div>
            </div>

            {/* Right Column: Stats Cards */}
            <div className="flex flex-col gap-6">
              <StatCard value="$2M" label="Raised" />
              <StatCard value="34%" label="User Growth" />
              <StatCard value="24%" label="Conversion rate increase" />
            </div>
          </div>

          {/* Bottom Row: Two Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Green Card */}
            <div className="group bg-[#1E1E1E] rounded-xl overflow-hidden  flex flex-col cursor-pointer">
              <img src={BeautyCosmetic} alt="My Icon" className="w-full object-cover transition-transform duration-500 hover:scale-110" />

              {/* Footer */}
              <div className="bg-[#09171A] p-6 flex justify-between items-center mt-auto">
                <div>
                  <h4 className="text-white text-2xl animate-text font-serif font-medium mb-1">Beauty Cosmetic Line</h4>
                  <p className="text-gray-400 animate-text text-sm">Brand identity design refresh for a cosmetic beauty brand that is inclusive to all skin types.</p>
                </div>
              </div>
            </div>

            {/* White/Cream Card */}
            <div className="group bg-[#1E1E1E] rounded-xl overflow-hidden  flex flex-col cursor-pointer">
              <img src={CondoDev} alt="My Icon" className="w-full object-cover transition-transform duration-500 hover:scale-110" />

              {/* Footer */}
              <div className="bg-[#09171A] p-6 flex justify-between items-center mt-auto">
                <div>
                  <h4 className="text-white text-2xl animate-text font-serif font-medium mb-1">High-Rise Condo Dev.</h4>
                  <p className="text-gray-400 animate-text text-sm">Brand identity design for Langstaff Residence, a high-rise condo development of Toronto</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Stat Card Component
const StatCard = ({ value, label }) => {
  // ১. ভ্যালু থেকে সংখ্যা এবং চিহ্ন (%, M, $) আলাদা করা
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, '')); // শুধু সংখ্যা বের করবে (যেমন: 5, 34, 24)
  const suffix = value.replace(/[0-9.]/g, ''); // শুধু চিহ্ন বের করবে (যেমন: M, %, $)
  const prefix = value.includes('$') ? '$' : ''; // ডলার সাইন থাকলে শুরুতে বসানোর জন্য

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    // ২. অ্যানিমেশনের সময়কাল (Duration) সেট করা (যেমন ২ সেকেন্ড = ২০০০ms)
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / numericValue));

    // ৩. টাইমার সেট করা
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= numericValue) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <div className="flex flex-col items-center justify-center text-center h-full bg-[#09171A] p-6 rounded-xl shadow-sm">
      <h3 className="text-7xl font-medium font-serif text-white mb-2">
        {/* ৪. অ্যানিমেটেড কাউন্ট দেখানো */}
        {prefix}{count}{suffix.replace('$', '')}
      </h3>
      <p className="text-gray-500 font-medium">{label}</p>
    </div>
  );
};

export default PortfolioSection;
import React from 'react';

// ১. আপনার ভিডিওগুলো এখানে ইমপোর্ট করুন (পাথ ঠিক করে নেবেন)
 import strategyVideo from '../../assets/image/strategy.webm';
 import designVideo from '../../assets/image/design.webm';
import devVideo from '../../assets/image/dev.webm';

const StatsSection = () => {
  return (
    <div className="bg-[#09171A] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* হেডার সেকশন */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="md:w-2/3">
            <p className="text-[#59E2FF] font-semibold text-sm tracking-wider mb-3 uppercase">
              Proven Results
            </p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              $50M+ Revenue <br /> Generated for Clients
            </h2>
          </div>
          
          <div className="md:w-1/3 md:pt-10">
            <p className="text-gray-300 text-lg leading-relaxed">
              We don't just design pretty logos. We build strategic digital experiences that turn visitors into loyal customers and drive real ROI.
            </p>
          </div>
        </div>

        {/* কার্ড গ্রিড সেকশন */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* ২. কার্ডগুলোতে 'videoSrc' প্রপ ব্যবহার করুন */}
          
          {/* কার্ড ১ */}
          <Card 
            title="Brand Strategy"
            desc="We define your voice, mission, and position in the market to ensure you stand out from competitors."
            gradient="from-purple-900 to-indigo-800" 
             videoSrc={strategyVideo}
          />

          {/* কার্ড ২ */}
          <Card 
            title="Visual Identity"
            desc="Crafting logos, typography, and color systems that communicate trust, luxury, and quality."
            gradient="from-orange-800 to-red-900"
             videoSrc={designVideo}
          />

          {/* কার্ড ৩ */}
          <Card 
            title="Shopify Development"
            desc="Blazing fast, high-converting stores tailored to your brand. Scalable systems that grow with you."
            gradient="from-blue-900 to-cyan-800"
            videoSrc={devVideo}
          />

        </div>
      </div>
    </div>
  );
};

// ৩. আপডেট করা কার্ড কম্পোনেন্ট (ভিডিও সাপোর্ট সহ)
const Card = ({ title, desc, videoSrc, gradient }) => {
  return (
    <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden hover:bg-[#09171A] transition duration-300 flex flex-col h-full border border-gray-800 hover:border-gray-600 group">
      
      {/* মিডিয়া এরিয়া (ভিডিও বা গ্র্যাডিয়েন্ট) */}
      <div className={`h-64 w-full bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
        
        {videoSrc ? (
          // যদি ভিডিও থাকে, তবে ভিডিও দেখাবে
          <video 
            src={videoSrc} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 group-hover:scale-105"
          />
        ) : (
          // ভিডিও না থাকলে টাইটেল দেখাবে (ফ্ল্যাশব্যাক)
          <h4 className="text-2xl font-bold text-white opacity-20 select-none">{title}</h4>
        )}

        {/* ভিডিওর উপরে হালকা কালার ওভারলে (যাতে টেক্সট পড়া যায়, অপশনাল) */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-300"></div>
      </div>

      {/* টেক্সট এরিয়া */}
      <div className="p-8 flex-grow">
        <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default StatsSection;
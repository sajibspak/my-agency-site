import React from 'react';
import manVideo from '../../assets/image/heroimg.webm'; // আপনার ছবির সঠিক পাথ দিন
import heroBg from '../../assets/image/linebg.png';

const HeroSection = () => {
  return (
    <div style={{ backgroundImage: `url(${heroBg})` }}
      className="bg-[#0A0A0A] bg-cover bg-center bg-no-repeat text-white font-serif"> {/* পুরো পেজের ব্যাকগ্রাউন্ড কালো এবং ফন্ট সেরিফ */}
      <div className="container mx-auto px-4 py-4 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between">

        {/* বাম পাশের কন্টেন্ট (টেক্সট এবং বাটন) */}
        <div className="md:w-1/2 mt-10 md:mt-0 pr-0 md:pr-10">

          {/* প্রধান শিরোনাম */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-wide">
            Build fast. <br /> Earn more. <br /> Grow together.
          </h1>

          {/* সাবটাইটেল / প্যারাগ্রাফ */}
          <p className="text-lg text-gray-300 mb-10">
            End-to-end brand identity, Shopify design, and web solutions for D2C founders—strategically built and launch-ready in 8–12 weeks.
          </p>

          {/* বাটন এবং লিংক এরিয়া */}
          <div className="flex items-center gap-5">
            {/* লাল বাটন */}
            <button className="bg-[#02B8DF] hover:bg-[#35C6E5] hover:shadow-[0_0_20px_#59E2FF] text-white font-semibold py-4 px-8 rounded transition duration-300">
              Start Now
            </button>

            {/* টেক্সট লিংক এবং অ্যারো আইকন */}
            <a href="#" className="flex items-center gap-4 text-white hover:text-gray-300 transition duration-300  group">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="4" fill="#09171A" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70318 20.438C8.48092 20.6603 8.35605 20.9617 8.35605 21.276C8.35605 21.5904 8.48092 21.8918 8.70318 22.1141C8.92545 22.3364 9.2269 22.4612 9.54123 22.4612C9.85556 22.4612 10.157 22.3364 10.3793 22.1141L20.089 12.4044L20.0873 19.5999C20.0873 19.7558 20.118 19.9101 20.1776 20.0541C20.2373 20.198 20.3247 20.3289 20.4349 20.4391C20.5451 20.5492 20.6759 20.6367 20.8198 20.6963C20.9638 20.7559 21.1181 20.7866 21.274 20.7866C21.4298 20.7866 21.5841 20.7559 21.7281 20.6963C21.8721 20.6367 22.0029 20.5492 22.1131 20.4391C22.2233 20.3289 22.3107 20.198 22.3703 20.0541C22.43 19.9101 22.4607 19.7558 22.4607 19.5999L22.4607 9.54331C22.4608 9.38742 22.4303 9.23302 22.3707 9.08895C22.3112 8.94489 22.2238 8.81399 22.1135 8.70376C22.0033 8.59353 21.8724 8.50612 21.7283 8.44656C21.5843 8.38699 21.4299 8.35643 21.274 8.35663H11.2173C10.9026 8.35663 10.6008 8.48165 10.3782 8.7042C10.1557 8.92675 10.0307 9.22858 10.0307 9.54331C10.0307 9.85804 10.1557 10.1599 10.3782 10.3824C10.6008 10.605 10.9026 10.73 11.2173 10.73L18.4129 10.7283L8.70318 20.438Z" fill="white" />
              </svg>
              <span className="mr-2">See Our Work</span>
            </a>
          </div>

          {/* চেকলিস্ট এরিয়া */}

        </div>

        {/* ডান পাশের কন্টেন্ট (ছবি) */}
        <div className="md:w-1/2">
          <video
            src={manVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
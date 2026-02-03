import React from 'react';

const PricingSection = () => {
  // আপনার প্রাইসিং ডাটা এখানে এডিট করুন
  const plans = [
    {
      name: "Essential",
      price: "$5,500",
      description: "Best for early-stage startups needing a solid foundation to launch quickly.",
      features: [
        "Core Brand Strategy",
        "Primary Logo & Wordmark",
        "Color Palette & Typography",
        "Basic Brand Guidelines PDF",
        "Social Media Profile Assets",
        "2 Rounds of Revisions"
      ],
      isPopular: false,
      buttonText: "Get Started",
    },
    {
      name: "Professional",
      price: "$18,000",
      description: "Best for growing D2C or tech brands that need a complete market-ready identity.",
      features: [
        "Extended Brand Strategy & Voice",
        "Comprehensive Brand Book",
        "Custom Shopify/Webflow Site (5-7 pages)",
        "Basic SEO Setup & Analytics",
        "3 Rounds of Revisions",
        "Post-Launch Support (2 weeks)"
      ],
      isPopular: true, // এটি মাঝখানের হাইলাইটেড কার্ড
      buttonText: "Get Started",
    },
    {
      name: "Premium",
      price: "$35,000",
      description: "Perfect for established or funded teams needing a full-scale brand + digital rebuild.",
      features: [
        "Everything in Professional",
        "Advanced E-commerce & Web Dev",
        "Micro-interactions & Motion Graphics",
        "Packaging Design System",
        "Video Ad Production (1 hero asset)",
        "Priority Slack Channel Access"
      ],
      isPopular: false,
      buttonText: "Get Started",
    }
  ];

  return (
    <section className="bg-[#09171A] py-20 px-4 md:px-8 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট (ঐচ্ছিক) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00D8FF] opacity-5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* হেডার */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#00D8FF] font-medium tracking-widest text-sm uppercase">Transparent Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            No Hidden Fees. Just Honest <br className="hidden md:block" /> Pricing for Quality Work.
          </h2>
        </div>

        {/* কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 transition-all duration-300 group
                ${plan.isPopular 
                  ? 'bg-[#0E2A30] border-2 border-[#00D8FF] shadow-[0_0_50px_rgba(0,216,255,0.1)] scale-100 md:scale-105 z-10' 
                  : 'bg-[#0B1C20] border border-gray-800 hover:border-gray-600'
                }
              `}
            >
              {/* পপুলার ব্যাজ */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00D8FF] text-[#09171A] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              {/* কার্ড কন্টেন্ট */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-300">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-gray-400 text-sm">From</span>
                    <span className={`text-4xl md:text-5xl font-bold ${plan.isPopular ? 'text-white' : 'text-gray-100'}`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-400 text-sm leading-relaxed min-h-[60px]">
                    {plan.description}
                  </p>
                </div>

                {/* বাটন */}
                <button 
                  className={`w-full py-4 rounded-lg font-bold transition-all duration-300
                    ${plan.isPopular 
                      ? 'bg-[#00D8FF] text-[#09171A] hover:bg-white hover:shadow-lg' 
                      : 'bg-transparent border border-gray-700 text-white hover:border-[#00D8FF] hover:text-[#00D8FF]'
                    }
                  `}
                >
                  {plan.buttonText} &rarr;
                </button>

                {/* টাইমলাইন */}
                <p className="text-sm font-medium text-gray-400 pt-4 border-t border-gray-800">
                  Timeline: <span className="text-white">4-6 Weeks</span>
                </p>

                {/* ফিচার লিস্ট */}
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                      {/* চেকমার্ক আইকন */}
                      <svg className={`w-5 h-5 flex-shrink-0 ${plan.isPopular ? 'text-[#00D8FF]' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
import React, { useState } from 'react';

// FAQ ডেটা
const faqs = [
  {
    id: 1,
    question: "What is SEO, and why is it important for my business?",
    answer: "SEO, or Search Engine Optimization, refers to the process of optimizing your website to improve its visibility on search engine results pages (SERPs). It helps attract organic traffic, builds trust, and converts visitors into customers without paying for ads."
  },
  {
    id: 2,
    question: "How long does it take to see results from SEO efforts?",
    answer: "SEO is a long-term strategy. Typically, you can expect to see significant improvements in 3 to 6 months, but this depends on the competition in your industry and the current state of your website."
  },
  {
    id: 3,
    question: "What are the benefits of content marketing for my business?",
    answer: "Content marketing establishes your brand as an authority, builds trust with your audience, and improves SEO. Valuable content keeps users engaged and guides them through the buying journey."
  },
  {
    id: 4,
    question: "How can social media benefit my business?",
    answer: "Social media allows you to connect directly with your audience, build brand awareness, and drive traffic to your website. It's also a powerful tool for customer support and community building."
  }
];

const FAQSection = () => {
  // কোন প্রশ্নটি খোলা আছে তা ট্র্যাক করার জন্য স্টেট
  // ডিফল্টভাবে প্রথমটি (0) খোলা থাকবে, বন্ধ রাখতে চাইলে 'null' দিন
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0f1c1e] py-20 px-4 sm:px-6 lg:px-8 font-sans text-white border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* ১. বাম পাশের কন্টেন্ট */}
        <div className="lg:w-1/3">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-cyan-500 text-2xl">✨</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
              Frequently Asked <br /> Questions
            </h2>
          </div>
          
          <p className="text-gray-400 mb-8 leading-relaxed">
            Get answers to common questions about SEO and digital marketing. Our FAQ section provides insights and guidance to help you navigate the complexities of search engine optimization and make informed decisions.
          </p>

          <button className="px-8 py-3 rounded-full border border-cyan-500 text-cyan-400 font-semibold hover:bg-cyan-600 hover:text-white transition duration-300">
            Learn More
          </button>
        </div>

        {/* ২. ডান পাশের অ্যাকর্ডিয়ন (Accordion) লিস্ট */}
        <div className="lg:w-2/3">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id} 
                className={`border-b border-gray-800 pb-4 ${openIndex === index ? 'bg-gray-800/20 rounded-xl border-none p-6' : 'p-4'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-start text-left focus:outline-none group"
                >
                  <div className="flex gap-4">
                    {/* সিরিয়াল নাম্বার */}
                    <span className="text-cyan-500 font-bold text-xl font-serif">
                      0{index + 1}
                    </span>
                    {/* প্রশ্ন */}
                    <h3 className={`text-lg md:text-xl font-medium transition duration-300 ${openIndex === index ? 'text-cyan-400' : 'text-white group-hover:text-cyan-200'}`}>
                      {faq.question}
                    </h3>
                  </div>

                  {/* প্লাস/মাইনাস আইকন */}
                  <span className={`ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition duration-300 ${openIndex === index ? 'bg-cyan-500 border-cyan-500 text-white rotate-180' : 'border-gray-600 text-gray-400 group-hover:border-cyan-400'}`}>
                    {openIndex === index ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    )}
                  </span>
                </button>

                {/* উত্তর (Smooth Animation) */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-400 leading-relaxed pl-10">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
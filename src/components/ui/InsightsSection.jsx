import React from 'react';
import heroBg from '../../assets/image/linebg.png';

// ব্লগ পোস্টের ডেটা (রেলেভেন্ট ইমেজ সহ)
const insights = [
  {
    id: 1,
    category: 'BRANDING',
    title: 'When Customer Feedback Strengthens Your Rebrand — and When It Doesn’t',
    excerpt: 'Navigating the tricky balance between listening to your audience and maintaining your core brand vision during a redesign.',
    date: 'Dec 8, 2025',
    readTime: '2 mins read',
    // ব্র্যান্ডিং সম্পর্কিত একটি প্রিমিয়াম ছবি
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    isFeatured: true,
  },
  {
    id: 2,
    category: 'GROWTH STRATEGY',
    title: 'How to Scale Your D2C Brand Without Losing Your Soul',
    excerpt: 'Strategies for maintaining brand authenticity and customer connection while chasing rapid growth and automation.',
    date: 'Dec 12, 2025',
    readTime: '5 mins read',
    // স্কেলিং/ই-কমার্স সম্পর্কিত ছবি
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
  },
  {
    id: 3,
    category: 'DESIGN PSYCHOLOGY',
    title: 'The Psychology of Color in Luxury E-commerce',
    excerpt: 'Why certain shades command higher prices and build unconscious trust in the high-end digital marketplace.',
    date: 'Dec 15, 2025',
    readTime: '4 mins read',
    // লাক্সারি/কালার সম্পর্কিত ছবি
    image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
  },
];

const InsightsSection = () => {
  const featuredPost = insights.find(post => post.isFeatured);
  const sidePosts = insights.filter(post => !post.isFeatured);

  return (
    // ব্যাকগ্রাউন্ড কালার আগের সেকশনগুলোর সাথে মিল রেখে ডার্ক করা হয়েছে
    <section style={{ backgroundImage: `url(${heroBg})` }}
                className="bg-[#0A0A0A] bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-6 lg:px-8 font-sans text-white border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        
        {/* ১. হেডার সেকশন */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="md:w-2/3">
            {/* সাব-হেডিং এ সায়ান কালার */}
            <p className="text-cyan-500 text-sm uppercase tracking-widest mb-3 font-semibold">
              Latest Insights
            </p>
            {/* শিরোনামে সেরিফ ফন্ট */}
            <h2 className="text-3xl md:text-5xl font-serif leading-tight font-bold">
              Learn How D2C Founders and Tech CEOs Build Premium Brands
            </h2>
          </div>
          
          {/* নেভিগেশন বাটন (সায়ান কালারে আপডেট করা হয়েছে) */}
          <div className="flex gap-4 hidden md:flex">
            <button className="w-12 h-12 rounded-full border border-cyan-600 text-cyan-500 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center hover:bg-cyan-700 transition duration-300 border border-cyan-600 shadow-lg shadow-cyan-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* ২. মেইন গ্রিড লেআউট */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* বাম পাশ: বড় ফিচারড পোস্ট */}
          <div className="group cursor-pointer">
            {/* ইমেজ এরিয়া - এখন আসল ইমেজ ব্যবহার হচ্ছে */}
            <div className="rounded-2xl overflow-hidden h-80 md:h-[450px] w-full mb-6 relative shadow-xl">
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition duration-500 z-10"></div>
               <img 
                 src={featuredPost.image} 
                 alt={featuredPost.title} 
                 className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
               />
            </div>
            
            {/* টেক্সট এরিয়া */}
            <div className="lg:pr-10">
              <span className="text-cyan-400 font-bold text-xs tracking-wider uppercase mb-3 block">
                {featuredPost.category}
              </span>
              <h3 className="text-2xl md:text-4xl font-serif font-bold mb-4 group-hover:text-cyan-400 transition duration-300 leading-tight">
                {featuredPost.title}
              </h3>
              <p className="text-gray-400 mb-5 text-lg leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="text-gray-500 text-sm font-medium flex gap-4 items-center uppercase tracking-wider">
                <span>{featuredPost.date}</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
          </div>

          {/* ডান পাশ: ছোট পোস্টের লিস্ট */}
          <div className="flex flex-col gap-12 justify-center">
            {sidePosts.map((post) => (
              <div key={post.id} className="flex flex-col sm:flex-row gap-6 group cursor-pointer border-b border-gray-800/50 pb-12 last:border-0 last:pb-0">
                
                {/* ছোট ইমেজ */}
                <div className="sm:w-5/12 h-52 rounded-xl overflow-hidden flex-shrink-0 relative shadow-md">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition duration-500 z-10"></div>
                   <img 
                     src={post.image} 
                     alt={post.title} 
                     className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                   />
                </div>

                {/* কন্টেন্ট */}
                <div className="flex flex-col justify-center sm:w-7/12">
                  <span className="text-cyan-400 font-bold text-xs tracking-wider uppercase mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-cyan-400 transition duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="text-gray-500 text-xs font-medium flex gap-3 items-center uppercase tracking-wider">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span>{post.readTime}</span>
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

export default InsightsSection;
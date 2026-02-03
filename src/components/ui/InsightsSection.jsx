import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; // আইকন ইমপোর্ট করা হলো
import { blogPosts } from '@/data/blogData';
import heroBg from '../../assets/image/linebg.png';

const InsightsSection = () => {
  // ৪টি পোস্ট নেওয়া হলো (১টি ফিচারড, ৩টি সাইড)
  const homePosts = blogPosts.slice(0, 4); 
  const featuredPost = homePosts[0];
  const sidePosts = homePosts.slice(1, 4); 

  return (
    <section style={{ backgroundImage: `url(${heroBg})` }}
             className="bg-[#0A0A0A] bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-6 lg:px-8 font-sans text-white border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        
        {/* ১. হেডার সেকশন ও ডেস্কটপ View All বাটন */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="md:w-2/3">
            <p className="text-cyan-500 animate-text text-sm uppercase tracking-widest mb-3 font-semibold">
              Latest Insights
            </p>
            <h2 className="text-3xl animate-text md:text-6xl font-serif leading-tight font-medium">
              Learn How D2C Founders and Tech CEOs Build Premium Brands
            </h2>
          </div>
          
          {/* ডেস্কটপ View All বাটন */}
          <div className="hidden md:flex">
            <Link to="/blog" className="group flex items-center gap-2 text-cyan-500 font-bold uppercase tracking-widest hover:text-white transition-colors py-3 px-6 border border-gray-800 rounded-full hover:border-cyan-500">
              View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ২. মেইন গ্রিড লেআউট (৪টি ব্লগ) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          
          {/* বাম পাশ: ১টি বড় ফিচারড পোস্ট */}
          <Link to={`/blog/${featuredPost.id}`} className="group cursor-pointer block">
            <div className="rounded-2xl overflow-hidden h-80 md:h-[450px] w-full mb-6 relative shadow-xl">
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition duration-500 z-10"></div>
               <img 
                 src={featuredPost.image} 
                 alt={featuredPost.title} 
                 className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
               />
            </div>
            
            <div className="lg:pr-10">
              <span className="text-cyan-400 animate-text font-bold text-xs tracking-wider uppercase mb-3 block">
                {featuredPost.category}
              </span>
              <h3 className="text-xl md:text-xl animate-text font-serif font-medium mb-4 group-hover:text-cyan-400 transition duration-300 leading-tight">
                {featuredPost.title}
              </h3>
              <p className="text-gray-400 animate-text mb-5 text-md leading-relaxed line-clamp-3" dangerouslySetInnerHTML={{ __html: featuredPost.content.substring(0, 150) + '...' }} />
              <div className="text-gray-500 animate-text text-sm font-medium flex gap-4 items-center uppercase tracking-wider">
                <span>{featuredPost.date}</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
          </Link>

          {/* ডান পাশ: ৩টি ছোট পোস্ট */}
          <div className="flex flex-col gap-8 justify-between">
            {sidePosts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="flex flex-col justify-between sm:flex-row gap-6 group cursor-pointer block">
                
                <div className="sm:w-5/12 h-52 rounded-xl overflow-hidden flex-shrink-0 relative shadow-md">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition duration-500 z-10"></div>
                   <img 
                     src={post.image} 
                     alt={post.title} 
                     className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                   />
                </div>

                <div className="flex flex-col justify-center sm:w-7/12">
                  <span className="text-cyan-400 animate-text font-bold text-xs tracking-wider uppercase mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-serif animate-text font-medium mb-3 group-hover:text-cyan-400 transition duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 animate-text text-sm line-clamp-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content.substring(0, 100) + '...' }} />
                  <div className="text-gray-500 animate-text text-xs font-medium flex gap-3 items-center uppercase tracking-wider">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

              </Link>
            ))}
          </div>

        </div>

        {/* ৩. মোবাইল View All বাটন (শুধু মোবাইলে দেখাবে) */}
        <div className="md:hidden mt-12 flex justify-center">
          <Link to="/blog" className="group flex items-center gap-2 text-cyan-500 font-bold uppercase tracking-widest py-3 px-8 border border-gray-800 rounded-full hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all">
            View All Posts <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default InsightsSection;
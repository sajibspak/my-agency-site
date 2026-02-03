import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogData';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const container = useRef();

  // --- GSAP এনিমেশন ---
  useGSAP(() => {
    const textElements = gsap.utils.toArray(".animate-text");
    textElements.forEach((text) => {
      gsap.from(text, {
        y: 50, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: text, start: "top 90%", toggleActions: "play none none reverse" },
      });
    });

    const blogCards = gsap.utils.toArray(".blog-card");
    blogCards.forEach((card) => {
      gsap.from(card, {
        y: 80, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" },
      });
    });
  }, { scope: container });

  // --- ডামি ব্লগ ডাটা (ID যুক্ত করা হয়েছে) ---
  const featuredPosts = [
    { id: "1", category: "UX Design", title: "The Ultimate Guide to Designing for Conversion in 2026", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80" },
    { id: "2", category: "Branding", title: "How Global Brands are Adapting to the New Digital Era", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80" }
  ];

  const latestPosts = [
    { id: "4", category: "Web Design", title: "10 Tips for Better Website Performance", date: "Feb 10, 2026", author: "Jane Doe", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" },
    { id: "5", category: "Motion", title: "Why Motion Graphics are the Future of UI", date: "Feb 08, 2026", author: "Alex Smith", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
    { id: "6", category: "Strategy", title: "Aligning Your Brand with Gen Z Values", date: "Feb 05, 2026", author: "David Kim", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" },
  ];

  const designGuides = [
    { id: "7", title: "Grid Systems in UI Design", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=600&q=80" },
    { id: "8", title: "Color Psychology for Brands", img: "https://images.unsplash.com/photo-1716471330459-063b3baf247e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "9", title: "Typography Masterclass", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80" },
  ];

  const webDesignMini = blogPosts.filter(post => post.id === "11" || post.id === "12");

  return (
    <div ref={container} className="bg-[#0A0A0A] min-h-screen text-[#EAEAEA] font-sans pt-32 pb-20">

      {/* ১. হিরো সেকশন */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <h1 className="animate-text text-5xl md:text-8xl font-serif mb-6 leading-tight">Blog</h1>
        <p className="animate-text text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
          News and insights on all things design by Saillos
        </p>
      </section>

      {/* ২. ফিচারড পোস্ট (ID: 1, 2) */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post, i) => (
            <Link to={`/blog/${post.id}`} key={i} className="blog-card group cursor-pointer block">
              <div className="overflow-hidden rounded-2xl h-[400px] mb-6 relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <span className="text-xs uppercase tracking-widest text-[#02B8DF] font-bold mb-3 block">{post.category}</span>
              <h3 className="text-3xl font-serif group-hover:text-[#02B8DF] transition-colors leading-tight">{post.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* ৩. Latest Section */}
      <section className="bg-white text-black py-24 mb-32 rounded-3xl mx-6 md:mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex justify-between items-end mb-12">
          <h2 className="animate-text text-4xl md:text-5xl font-serif">Latest</h2>
          <a href="#" className="animate-text hidden md:flex items-center gap-2 font-bold hover:text-[#02B8DF] transition-colors">
            View All <ArrowRight size={18} />
          </a>
        </div>

        {/* মেইন বড় কার্ড (ID: 3) */}
        <Link to="/blog/3" className="blog-card grid md:grid-cols-2 gap-12 mb-16 group">
          <div className="overflow-hidden rounded-xl h-[300px]">
            <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1000&q=80" alt="Latest" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-sm font-bold text-gray-500 mb-4">UX Strategy</span>
            <h3 className="text-4xl font-serif mb-6 leading-tight group-hover:text-[#02B8DF] transition-colors">
              A Predictable Path to the Ultimate User Experience in 2026
            </h3>
            <p className="text-gray-600 mb-6">Learn how top agencies are combining psychology and data to craft experiences that retain users forever.</p>
            <span className="text-gray-400 text-sm">By Saillos Team • Feb 12, 2026</span>
          </div>
        </Link>

        {/* ছোট ৩টি কার্ড (ID: 4, 5, 6) */}
        <div className="grid md:grid-cols-3 gap-8 border-t border-gray-200 pt-12">
          {latestPosts.map((post, i) => (
            <Link to={`/blog/${post.id}`} key={i} className="blog-card group cursor-pointer block">
              <div className="overflow-hidden rounded-xl h-[200px] mb-6">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="text-xs font-bold text-gray-500 mb-2 block">{post.category}</span>
              <h4 className="text-2xl font-serif leading-tight mb-4 group-hover:text-[#02B8DF] transition-colors">{post.title}</h4>
              <span className="text-gray-400 text-sm">By {post.author} • {post.date}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ৪. Design Guides (ID: 7, 8, 9) */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="animate-text text-4xl md:text-5xl font-serif mb-12">Design Guides</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {designGuides.map((guide, i) => (
            <Link to={`/blog/${guide.id}`} key={i} className="blog-card group cursor-pointer relative overflow-hidden rounded-2xl h-[500px] block">
              <img src={guide.img} alt={guide.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-xs uppercase tracking-widest text-[#02B8DF] font-bold mb-3 block">Guide</span>
                <h3 className="text-3xl font-serif text-white group-hover:text-[#02B8DF] transition-colors">{guide.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ৫. Web Design Section (ID: 10, 11, 12) */}
      <section className="bg-white text-black py-24 mb-32 rounded-3xl mx-6 md:mx-auto max-w-7xl px-6 md:px-12">
        <h2 className="animate-text text-4xl md:text-5xl font-serif mb-12">Web Design</h2>

        <div className="grid md:grid-cols-12 gap-12">
          {/* বড় কার্ড (ID: 10) */}
          <Link to="/blog/10" className="blog-card md:col-span-8 group cursor-pointer block">
            <div className="overflow-hidden rounded-2xl h-[400px] mb-6">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80" alt="Web" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-3xl md:text-4xl font-serif leading-tight group-hover:text-[#02B8DF] transition-colors">
              The Evolution of Responsive Grids in Modern Websites
            </h3>
          </Link>

          {/* সাইডের ছোট কার্ড (ID: 11, 12) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            {webDesignMini.map((post, i) => (
              <Link to={`/blog/${post.id}`} key={i} className="blog-card group cursor-pointer border-b border-gray-200 pb-8 mb-8 last:border-0 last:mb-0 last:pb-0 block">

                {/* --- নতুন যুক্ত করা ইমেজ সেকশন --- */}
                <div className="overflow-hidden rounded-xl h-[180px] mb-5 shadow-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* --- টেক্সট সেকশন --- */}
                <h4 className="text-xl md:text-2xl font-serif leading-tight mb-3 group-hover:text-[#02B8DF] transition-colors">
                  {post.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;
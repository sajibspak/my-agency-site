import React, { useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowLeft, Twitter, Linkedin, Facebook } from 'lucide-react';
import { blogPosts } from '@/data/blogData';

const BlogPost = () => {
  const { id } = useParams();
  const container = useRef();

  const post = blogPosts.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    gsap.from(".fade-up", {
      y: 50, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out"
    });
  }, { scope: container });

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-serif mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-[#02B8DF] underline">Go back to Blog</Link>
      </div>
    );
  }

  return (
    <div ref={container} className="bg-[#0A0A0A] min-h-screen text-[#EAEAEA] font-sans max-md:pt-16 pt-32 pb-24">
      
      {/* ১. হিরো সেকশন */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <Link to="/blog" className="fade-up inline-flex items-center gap-2 text-gray-500 hover:text-[#02B8DF] transition-colors mb-16 uppercase tracking-widest text-xs font-bold">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        
        <div className="max-w-4xl">
          <span className="fade-up text-xs md:text-sm uppercase tracking-widest text-[#02B8DF] font-bold mb-6 block">
            {post.category}
          </span>
          <h1 className="fade-up text-5xl md:text-7xl font-serif leading-tight mb-8">
            {post.title}
          </h1>
          
          <div className="fade-up flex items-center gap-4 text-gray-400 text-sm md:text-base border-b border-gray-800 pb-8">
            <span>By <strong className="text-white">{post.author}</strong></span>
            <span>•</span><span>{post.date}</span><span>•</span><span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* ২. মেইন হিরো ইমেজ */}
      <section className="fade-up max-w-[85rem] mx-auto px-4 md:px-8 mb-20">
        <div className="w-full h-[50vh] md:h-[75vh] rounded-[40px] overflow-hidden bg-gray-900 shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* ৩. আর্টিকেল বডি (Force Styled Typography) */}
      <section className="fade-up max-w-4xl mx-auto px-6">
        <div 
          className="text-gray-300 font-sans 
          
          /* Paragraphs - ফন্ট সাইজ ২১px, আরামদায়ক লাইন হাইট */
          [&>p]:text-[18px] md:[&>p]:text-[21px] [&>p]:leading-[1.8] [&>p]:mb-10
          
          /* Headings (H2, H3) - বিশাল সাইজ (৪২px), সাদা কালার, সেরিফ ফন্ট */
          [&>h2]:text-3xl md:[&>h2]:text-[42px] [&>h2]:font-serif [&>h2]:text-white [&>h2]:mt-20 [&>h2]:mb-8 [&>h2]:leading-tight
          [&>h3]:text-2xl md:[&>h3]:text-[32px] [&>h3]:font-serif [&>h3]:text-white [&>h3]:mt-16 [&>h3]:mb-6
          
          /* Lists - বুলেট পয়েন্ট শো করবে এবং স্পেস থাকবে */
          [&>ul]:list-disc [&>ul]:pl-6 md:[&>ul]:text-[21px] [&>ul]:leading-[1.8] [&>ul]:mb-10 [&>li]:mb-4 [&>li]:pl-2 [&>li::marker]:text-[#02B8DF]
          
          /* Bold Texts - সাদা এবং বোল্ড */
          [&>p>strong]:text-white [&>p>strong]:font-bold [&>li>strong]:text-white [&>li>strong]:font-bold
          
          /* Blockquotes - Clay-এর মতো বিশাল ডার্ক বক্স ও আইটালিক ফন্ট */
          [&>blockquote]:text-2xl md:[&>blockquote]:text-[32px] [&>blockquote]:font-serif [&>blockquote]:italic [&>blockquote]:leading-snug [&>blockquote]:text-white [&>blockquote]:bg-[#111] [&>blockquote]:p-10 md:[&>blockquote]:p-12 [&>blockquote]:rounded-3xl [&>blockquote]:my-16 [&>blockquote]:border-l-4 [&>blockquote]:border-[#02B8DF]
          
          /* Images inside content - বিশাল মার্জিন এবং রাউন্ডেড কর্নার */
          [&>img]:w-full [&>img]:rounded-3xl [&>img]:my-16 md:[&>img]:my-20 [&>img]:shadow-2xl
          
          /* Links */
          [&>a]:text-[#02B8DF] [&>a]:underline [&>a]:underline-offset-4 hover:[&>a]:text-white transition-colors"
          
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>

      {/* ৪. শেয়ার সেকশন */}
      <section className="fade-up max-w-4xl mx-auto px-6 mt-32 pt-12 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-bold text-lg md:text-xl font-serif text-white">Share this article:</span>
          <div className="flex max-md:flex-col gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-[#02B8DF] border border-gray-800 hover:border-[#02B8DF] rounded-full transition-all text-sm font-bold uppercase tracking-widest text-white group">
              <Twitter size={18} className="group-hover:scale-110 transition-transform" /> Twitter
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-[#02B8DF] border border-gray-800 hover:border-[#02B8DF] rounded-full transition-all text-sm font-bold uppercase tracking-widest text-white group">
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" /> LinkedIn
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-[#02B8DF] border border-gray-800 hover:border-[#02B8DF] rounded-full transition-all text-sm font-bold uppercase tracking-widest text-white group">
              <Facebook size={18} className="group-hover:scale-110 transition-transform" /> Facebook
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BlogPost;
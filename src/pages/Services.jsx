import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import CTASection from "../components/ui/CTASection";

// GSAP প্লাগিন রেজিস্টার
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const container = useRef();

  // --- সার্ভিস ডাটা ---
  const services = [
    {
      id: "01",
      title: "Branding",
      description: "Crafting a unique voice and visual identity that makes your brand stand out, builds trust, and commands premium prices in the market.",
      tags: ["Brand Strategy", "Visual Identity", "Logo Design", "Brand Guidelines", "Art Direction"],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "02",
      title: "Digital Products",
      description: "We create intuitive and engaging user experiences (UI/UX) that keep your audience coming back. Simple, beautiful, and effective design.",
      tags: ["User Research", "UX Strategy", "UI Design", "Prototyping", "Design Systems"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "03",
      title: "Websites",
      description: "We design and build fast, responsive, and user-friendly websites that convert visitors into customers and grow your business online.",
      tags: ["Frontend Dev", "React/Next.js", "GSAP Animation", "CMS Integration", "Performance"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "04",
      title: "Content",
      description: "Climb the search rankings and attract qualified leads organically with data-driven SEO strategies and high-quality, engaging content.",
      tags: ["Copywriting", "SEO Strategy", "Content Marketing", "Photography", "Video Production"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "05",
      title: "Development",
      description: "Launch your store in weeks. We set up, customize, and optimize your Shopify store for maximum conversions and sales.",
      tags: ["Shopify Setup", "E-commerce", "App Development", "API Integration", "Maintenance"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  // --- GSAP এনিমেশন লজিক (About Page এর মতো) ---
  useGSAP(() => {
    
    // ১. টেক্সট এনিমেশন (নিচ থেকে ভেসে উঠবে)
    const textElements = gsap.utils.toArray(".animate-text");
    textElements.forEach((text) => {
      gsap.from(text, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: text,
          start: "top 90%", // স্ক্রিনের ৯০% এ আসলে শুরু হবে
          toggleActions: "play none none reverse", // স্ক্রল ব্যাক করলে হাইড হবে
        },
      });
    });

    // ২. ইমেজ এনিমেশন (নিচ থেকে ভেসে উঠবে এবং অপাসিটি বাড়বে)
    const imageElements = gsap.utils.toArray(".service-img-anim");
    imageElements.forEach((imgWrapper) => {
      gsap.fromTo(imgWrapper,
        { 
          y: 100, // ১০০ পিক্সেল নিচে থাকবে
          opacity: 0 
        },
        {
          y: 0, 
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imgWrapper,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

  }, { scope: container });

  return (
    <div ref={container} className="bg-[#0A0A0A] min-h-screen text-[#EAEAEA] font-sans pt-32 pb-20">
      
      {/* ১. হিরো সেকশন */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <h1 className="animate-text text-5xl md:text-8xl font-serif leading-[1.1] mb-8">
          A full-service digital <br />
          innovation partner
        </h1>
        <p className="animate-text text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
          We help ambitious brands define their story and build digital products that people love to use.
        </p>
      </section>

      {/* ২. মেইন সার্ভিস সেকশন (Zig-Zag Layout) */}
      <div className="flex flex-col gap-32 md:gap-48 px-6 max-w-7xl mx-auto mb-40">
        {services.map((service, index) => (
          <section 
            key={index} 
            className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : "" // বিজোড় নাম্বারে রিভার্স হবে
            }`}
          >
            {/* টেক্সট পার্ট */}
            <div className="flex-1">
              <h2 className="animate-text text-4xl md:text-6xl font-serif mb-8">{service.title}</h2>
              <p className="animate-text text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                {service.description}
              </p>
              
              {/* ট্যাগ লিস্ট */}
              <div className="animate-text">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Capabilities</h4>
                <ul className="space-y-2">
                  {service.tags.map((tag, i) => (
                    <li key={i} className="text-lg text-white font-medium border-b border-gray-800 pb-2 w-fit">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ইমেজ পার্ট (About পেজের স্টাইল এনিমেশন) */}
            <div className="flex-1 w-full relative group">
               {/* service-img-anim ক্লাসটি GSAP দিয়ে কন্ট্রোল হচ্ছে */}
              <div className="service-img-anim relative overflow-hidden rounded-2xl h-[400px] md:h-[600px] w-full">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700 hover:scale-105"
                />
                
                {/* হোভার করলে গ্লো ইফেক্ট */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ৩. ইন্ডাস্ট্রি লিস্ট (নিচের কালো সেকশন) */}
      <section className="bg-[#111] py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="animate-text text-4xl font-serif mb-16">Industries</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 border-t border-gray-800 pt-8 animate-text">
            {[
              "Fintech & Finance", "Healthcare & Medical", "E-commerce & Retail", 
              "Real Estate", "Education & EdTech", "Travel & Hospitality", 
              "SaaS & Startups", "Non-Profit"
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center group cursor-pointer border-b border-gray-800 pb-8 hover:border-[#02B8DF] transition-colors">
                <span className="text-2xl text-gray-400 group-hover:text-white transition-colors">{item}</span>
                <span className="text-[#02B8DF] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ৪. ফুটার CTA */}
      <CTASection />

    </div>
  );
};

export default Services;
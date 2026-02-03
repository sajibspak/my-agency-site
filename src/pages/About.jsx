import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import CTASection from "../components/ui/CTASection";

// CSS ইমপোর্ট
import 'swiper/css';

// GSAP প্লাগিন রেজিস্টার
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef();

  // --- GSAP এনিমেশন লজিক ---
  useGSAP(() => {

    // ১. হিরো ইমেজ (Team Image) ছোট থেকে ফুল স্ক্রিন হওয়ার এনিমেশন
    gsap.fromTo(".hero-image-wrapper",
      {
        width: "80%", // শুরুতে ৮০% উইডথ থাকবে
        borderRadius: "20px"
      },
      {
        width: "100%", // স্ক্রল করলে ১০০% হবে
        borderRadius: "0px",
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "+=500",
          scrub: true,
        }
      }
    );

    // ২. "Why Saillos" ইমেজের এনিমেশন (নিচ থেকে অপাসিটি সহ ভেসে ওঠা)
    const whySectionImages = gsap.utils.toArray(".why-img-anim");
    whySectionImages.forEach((img) => {
      gsap.fromTo(img,
        {
          y: 100, // ১০০ পিক্সেল নিচে থাকবে
          opacity: 0 // দেখা যাবে না
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // ৩. টেক্সট এনিমেশন
    const textElements = gsap.utils.toArray(".animate-text");
    textElements.forEach((text) => {
      gsap.from(text, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });

  }, { scope: container });

  // স্লাইডারের ইমেজ লিস্ট
  const officeImages = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800",
  ];

  return (
    <div ref={container} className="bg-[#0A0A0A] min-h-screen text-[#EAEAEA] font-sans max-md:pt-16 pt-32">

      {/* ১. হিরো সেকশন */}
      <section className="hero-section flex flex-col items-center mb-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="animate-text text-5xl md:text-7xl font-serif mb-16 max-w-4xl leading-tight">
            We transform brands through elevated digital experiences
          </h1>
        </div>

        {/* --- হিরো ইমেজ (এনিমেশন হবে) --- */}
        <div className="hero-image-wrapper mx-auto h-[60vh] md:h-[80vh] overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Saillos Team"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full mt-20">
          <div className="grid grid-cols-3 gap-8 border-b border-gray-800 pb-12 mb-12">
            <div className="animate-text">
              <h3 className="text-4xl md:text-8xl font-serif mb-2">100+</h3>
              <p className="text-gray-500 text-xs tracking-[0.2em] uppercase">Happy Clients</p>
            </div>
            <div className="animate-text">
              <h3 className="text-4xl md:text-8xl font-serif mb-2">06</h3>
              <p className="text-gray-500 text-xs tracking-[0.2em] uppercase">Years</p>
            </div>
            <div className="animate-text">
              <h3 className="text-4xl md:text-8xl font-serif mb-2">50+</h3>
              <p className="text-gray-500 text-xs tracking-[0.2em] uppercase">Projects</p>
            </div>
          </div>
          {/* লোকেশন পরিবর্তন করা হয়েছে */}
          <div className="flex flex-col gap-5">
            <h2 className="animate-text text-4xl md:text-6xl font-serif">Atlanta, Georgia, United States</h2>
            <p className="text-gray-500 text-md font-semibold tracking-[0.2em] uppercase">Headquarters</p>
          </div>

        </div>
      </section>

      {/* ২. স্লাইডার সেকশন */}
      <section className="pl-6 mb-24 cursor-grab active:cursor-grabbing">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1.2}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.5 },
          }}
          className="w-full"
        >
          {officeImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="h-[400px] w-full overflow-hidden rounded-lg relative group">
                <img src={img} alt={`Saillos Office ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ৩. টেক্সট সেকশন (About Saillos) */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 mb-32">
        <p className="animate-text text-xl text-gray-400 leading-relaxed">
          Saillos is a global branding and UX design agency based in Atlanta. We combine human-centered design with best-in-class technology to create future-proof digital experiences.
        </p>
        <p className="animate-text text-xl text-gray-400 leading-relaxed">
          We partner with the world's leading companies and ambitious startups to define, design, and develop new digital products.
        </p>
      </section>

      {/* ৪. Why Saillos সেকশন */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="animate-text text-6xl max-md:text-5xl font-serif mb-16">Why Saillos</h2>

        <div className="space-y-24">
          {/* পয়েন্ট ১ */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="animate-text">
              <span className="text-gray-600 text-8xl font-bold block mb-6">01</span>
              <h3 className="text-4xl font-serif mb-6">Teams Led by Co-Founders</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our leadership is involved in every project from day one. We believe in hands-on guidance to ensure the highest quality output for our clients.
              </p>
            </div>
            <div className="why-img-anim overflow-hidden rounded-xl">
              <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800" alt="Team" className="w-full h-[400px] object-cover hover:scale-105 transition duration-700" />
            </div>
          </div>

          {/* পয়েন্ট ২ */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="animate-text order-1 md:order-1">
              <span className="text-gray-600 text-8xl font-bold block mb-6">02</span>
              <h3 className="text-4xl font-serif mb-6">Collaboration is Key</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                We work as an extension of your team. Transparent communication and constant feedback loops ensure we are always aligned with your vision.
              </p>
            </div>
            <div className="why-img-anim overflow-hidden rounded-xl order-2 md:order-2">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800" alt="Collaboration" className="w-full h-[400px] object-cover hover:scale-105 transition duration-700" />
            </div>
          </div>

          {/* পয়েন্ট ৩ */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="animate-text">
              <span className="text-gray-600 text-8xl font-bold block mb-6">03</span>
              <h3 className="text-4xl font-serif mb-6">Our Work is Future-Proof</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                We build scalable solutions using cutting-edge technologies that grow with your business, ensuring long-term success.
              </p>
            </div>
            <div className="why-img-anim overflow-hidden rounded-xl">
              <img src="https://images.unsplash.com/photo-1713616147761-c126f8009c6f?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Future Proof" className="w-full h-[400px] object-cover hover:scale-105 transition duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* ৫. Capabilities সেকশন */}
      <section className="bg-[#111] py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 animate-text">
            <h2 className="text-5xl font-serif mb-6">Capabilities</h2>
            <p className="text-gray-400">
              Full-service capabilities from strategy to execution, designed to help brands grow.
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className='animate-text'>
              <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider">Strategy</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>Brand Strategy</li>
                <li>UX Strategy</li>
                <li>Content Strategy</li>
              </ul>
            </div>
            <div className='animate-text'>
              <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider">Design</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>UI/UX Design</li>
                <li>Visual Identity</li>
                <li>Motion Design</li>
              </ul>
            </div>
            <div className='animate-text'>
              <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider">Development</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>Websites</li>
                <li>Mobile Apps</li>
                <li>eCommerce</li>
              </ul>
            </div>
            <div className='animate-text'>
              <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider">Content</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>Copywriting</li>
                <li>3D & Motion</li>
                <li>Photography</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      {/* ৬. Clients সেকশন 
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="animate-text text-2xl font-serif mb-12">Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-16 gap-x-8 text-gray-500 font-bold text-xl items-center justify-items-start animate-text">
          <span>GOOGLE</span>
          <span>UBER</span>
          <span>AMAZON</span>
          <span>META</span>
          <span>COCA-COLA</span>
          <span>SLACK</span>
          <span>SPOTIFY</span>
          <span>AIRBNB</span>
          <span>SAMSUNG</span>
          <span>NIKE</span>
        </div>
      </section> */}

      {/* ৭. Testimonial 
      <section className="max-w-5xl mx-auto px-6 mb-32 text-center animate-text">
        <blockquote className="text-3xl md:text-5xl font-serif leading-tight mb-8">
          "We needed a partner who understood our vision and knew how to execute it. Saillos's deep understanding of design and brand was exactly what we were looking for."
        </blockquote>
        <cite className="text-gray-400 not-italic block">
          <span className="text-white font-bold block mb-1">Jane Doe</span>
          CTO at Global Tech
        </cite>
      </section> */}

      {/* ৮. Awards 
      <section className="max-w-7xl mx-auto px-6 mb-24 border-t border-gray-800 pt-12 animate-text">
        <h2 className="text-2xl font-serif mb-12">Awards</h2>
        <div className="flex flex-wrap gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition duration-500">
          <span className="text-xl font-bold">Awwwards</span>
          <span className="text-xl font-bold">FWA</span>
          <span className="text-xl font-bold">Webby</span>
          <span className="text-xl font-bold">Clutch Top 100</span>
        </div>
      </section> */}
      

      {/* ৯. Let's Talk (Footer CTA with Atlanta Address) */}
      <CTASection />

    </div>
  );
};

export default About;
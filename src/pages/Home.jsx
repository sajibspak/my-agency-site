import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// কম্পোনেন্ট ইমপোর্ট
import HeroSection from "../components/ui/HeroSection";
import StatsSection from "../components/ui/StatsSection";
import ServicesSection from '../components/ui/ServicesSection';
import WhyChooseUs from "../components/ui/WhyChooseUs";
import InsightsSection from "../components/ui/InsightsSection";
import FAQSection from "../components/ui/FAQSection";
import CTASection from "../components/ui/CTASection";
import PortfolioSection from "../components/ui/PortfolioSection";

// GSAP রেজিস্টার
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef();

  // --- গ্লোবাল টেক্সট এনিমেশন লজিক ---
  useGSAP(() => {
    
    // পুরো হোম পেজের যেখানেই 'animate-text' ক্লাস পাবে, সেখানেই এই এনিমেশন হবে
    const textElements = gsap.utils.toArray(".animate-text");

    textElements.forEach((text) => {
      gsap.fromTo(text,
        { 
          y: 50,    // ৫০ পিক্সেল নিচ থেকে শুরু হবে
          opacity: 0 // শুরুতে দেখা যাবে না
        },
        {
          y: 0,     // নিজের জায়গায় আসবে
          opacity: 1, // পুরোপুরি দেখা যাবে
          duration: 1, // ১ সেকেন্ড সময় নিবে
          ease: "power3.out",
          scrollTrigger: {
            trigger: text, // যখন টেক্সটটি স্ক্রিনে আসবে
            start: "top 90%", // স্ক্রিনের ৯০% নিচে আসলে শুরু হবে
            toggleActions: "play none none reverse", // স্ক্রল ব্যাক করলে আবার হাইড হবে (অপশনাল)
          },
        }
      );
    });

  }, { scope: container });

  return (
    // ref={container} দেওয়া জরুরি, যাতে GSAP এই ডিভের ভেতরের এলিমেন্ট খুঁজে পায়
    <div ref={container} className="min-h-screen bg-[#0A0A0A] text-white">
      <HeroSection />
      <StatsSection />
      <PortfolioSection />
      <ServicesSection />
      <WhyChooseUs />
      <InsightsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
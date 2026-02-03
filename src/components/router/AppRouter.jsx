import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services"; // সার্ভিস পেজ ইমপোর্ট
import Contact from "@/pages/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/ui/Footer";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";

// --- এই নতুন কম্পোনেন্টটি স্ক্রল ঠিক করবে ---
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // যখনই রাউট (pathname) চেঞ্জ হবে, উইন্ডো একদম উপরে চলে যাবে
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* ১. এখানে ScrollToTop কম্পোনেন্টটি কল করুন */}
      <ScrollToTop />
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
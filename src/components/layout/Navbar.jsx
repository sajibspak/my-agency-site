import { useState } from "react";
import { NavLink } from "react-router-dom";
import MainCta from "../button/MainCta";
import myLogo from "../../assets/mylogo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনুর জন্য স্টেট

  // লিংক এর স্টাইল (Active হলে লাল, না হলে সাদা)
  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-[#02B8DF] font-semibold text-lg"
      : "text-white hover:text-[#02B8DF] transition duration-200 text-lg";

  return (
    <nav className="bg-[#0A0A0A] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-100vw px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between px-10 items-center h-24"> {/* h-24 দিয়েছি কারণ আপনার লোগো বড় */}
          
          {/* ১. লোগো */}
          <div className="flex-shrink-0 flex items-center">
            <img src={myLogo} alt="Logo" className="w-32 object-contain" />
          </div>

          {/* ২. ডেস্কটপ মেনু (মোবাইলে হাইড থাকবে) */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
            <NavLink to="/about" className={linkClasses}>About</NavLink>
            <NavLink to="/services" className={linkClasses}>Services</NavLink>
            <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
          </div>

          {/* ৩. বাটন (ডেস্কটপ) */}
          <div className="hidden md:block">
            <MainCta />
          </div>

          {/* ৪. মোবাইল হ্যামবার্গার আইকন (ডেস্কটপে হাইড থাকবে) */}
          <div className="md:hidden flex items-center gap-4">
            {/* মোবাইল ভিউতে বাটনটি বাইরে রাখতে চাইলে এটা রাখুন, না চাইলে মুছে দিন */}
            {/* <MainCta /> */} 
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#02B8DF] focus:outline-none p-2"
            >
              {isOpen ? (
                // ক্রস (X) আইকন
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // মেনু (☰) আইকন
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ৫. মোবাইল ড্রপডাউন মেনু (কালো ব্যাকগ্রাউন্ড) */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 absolute w-full left-0">
          <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col items-center shadow-xl">
            <NavLink 
                to="/" 
                className={linkClasses} 
                onClick={() => setIsOpen(false)}
            >
                Home
            </NavLink>
            <NavLink 
                to="/about" 
                className={linkClasses} 
                onClick={() => setIsOpen(false)}
            >
                About
            </NavLink>
            <NavLink 
                to="/services" 
                className={linkClasses} 
                onClick={() => setIsOpen(false)}
            >
                Services
            </NavLink>
            <NavLink 
                to="/contact" 
                className={linkClasses} 
                onClick={() => setIsOpen(false)}
            >
                Contact
            </NavLink>
            
            {/* মোবাইলের ভেতরেও বাটনটি দিয়েছি */}
            <div className="mt-4">
                <MainCta /> 
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
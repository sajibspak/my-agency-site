import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; // EmailJS ইমপোর্ট
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const Contact = () => {
  const container = useRef();
  const form = useRef(); // ফর্মের জন্য ref
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success

  // GSAP এনিমেশন
  useGSAP(() => {
    gsap.from(".anim-up", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, { scope: container });

  // ইমেইল সেন্ডিং ফাংশন
  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    emailjs
      .sendForm(
        'service_h9qbfg1',   // আপনার Service ID
        'template_17iav6q',  // আপনার Template ID
        form.current,
        {
          publicKey: 'mKSjsnzKiEqoKNbih', // আপনার Public Key
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setFormStatus('success');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setFormStatus('idle');
          alert("Failed to send message. Please try again.");
        },
      );
  };

  return (
    <div ref={container} className="bg-[#0A0A0A] min-h-screen text-[#EAEAEA] font-sans max-md:pt-16 pt-32">
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
        
        {/* --- বাম পাশ: কন্টাক্ট ইনফো --- */}
        <div>
          <h1 className="anim-up text-5xl md:text-7xl font-serif leading-tight mb-8">
            Let's start a <br /> project together.
          </h1>
          <p className="anim-up text-xl text-gray-400 mb-12 max-w-md leading-relaxed">
            We help ambitious brands define their story and build digital products that people love.
          </p>

          <div className="space-y-12">
            {/* ইমেইল */}
            <div className="anim-up group cursor-pointer">
              <div className="flex items-center gap-4 mb-2 text-gray-500 group-hover:text-[#02B8DF] transition-colors">
                <Mail size={24} />
                <span className="uppercase tracking-widest text-xs font-bold">Email Us</span>
              </div>
              <a href="mailto:hello@saillos.com" className="text-2xl md:text-3xl font-serif hover:text-[#02B8DF] transition-colors">
                thesaillos@gmail.com
              </a>
            </div>

            {/* লোকেশন */}
            <div className="anim-up group cursor-pointer">
              <div className="flex items-center gap-4 mb-2 text-gray-500 group-hover:text-[#02B8DF] transition-colors">
                <MapPin size={24} />
                <span className="uppercase tracking-widest text-xs font-bold">Visit Us</span>
              </div>
              <p className="text-xl leading-relaxed text-gray-300">
                Atlanta, Georgia <br />
                United States
              </p>
            </div>

            {/* সোশ্যাল লিংকস */}
            <div className="anim-up pt-8 border-t max-md:hidden border-gray-800">
               <div className="flex gap-8 text-lg font-medium text-gray-400">
                 {['Instagram', 'LinkedIn', 'Twitter', 'Behance'].map((social) => (
                   <a key={social} href="#" className="hover:text-white transition-colors relative group">
                     {social}
                     <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#02B8DF] transition-all duration-300 group-hover:w-full"></span>
                   </a>
                 ))}
               </div>
            </div>
          </div>
        </div>


        {/* --- ডান পাশ: ফর্ম --- */}
        <div className="anim-up bg-[#111] p-8 md:p-12 rounded-3xl border border-gray-800">
          
          {formStatus === 'success' ? (
            // সাকসেস মেসেজ
            <div className="h-full flex flex-col justify-center items-center text-center py-20">
              <CheckCircle size={64} className="text-[#02B8DF] mb-6" />
              <h3 className="text-3xl font-serif mb-4">Message Sent!</h3>
              <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="mt-8 text-sm uppercase tracking-widest text-[#02B8DF] underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            // ফর্ম
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* নাম */}
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#02B8DF]">Name</label>
                  <input 
                    type="text" 
                    name="user_name" // EmailJS ভেরিয়েবল
                    required
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-xl text-white focus:outline-none focus:border-[#02B8DF] transition-colors placeholder:text-gray-600"
                  />
                </div>
                {/* ইমেইল */}
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#02B8DF]">Email</label>
                  <input 
                    type="email" 
                    name="user_email" // EmailJS ভেরিয়েবল
                    required
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-xl text-white focus:outline-none focus:border-[#02B8DF] transition-colors placeholder:text-gray-600"
                  />
                </div>
              </div>

              {/* সার্ভিস সিলেকশন */}
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#02B8DF]">I'm interested in</label>
                <select name="service" className="w-full bg-[#0A0A0A] border-b border-gray-700 px-4 py-3 text-xl text-white focus:outline-none focus:border-[#02B8DF] transition-colors appearance-none cursor-pointer">
                  <option>Web Design & Development</option>
                  <option>Branding & Identity</option>
                  <option>UI/UX Design</option>
                  <option>Shopify Setup & Optimization</option>
                  <option>SEO & Content Strategy</option>
                  <option>Social Media & Content Production</option>
                  <option>Motion & Video Editing</option>
                  <option>Other</option>
                </select>
              </div>

              {/* মেসেজ */}
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#02B8DF]">Message</label>
                <textarea 
                  name="message" // EmailJS ভেরিয়েবল
                  rows="4"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-xl text-white focus:outline-none focus:border-[#02B8DF] transition-colors placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>

              {/* সাবমিট বাটন */}
              <div className="pt-8">
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="group relative inline-flex items-center justify-center gap-3 bg-white text-black hover:text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#02B8DF] transition-all duration-300 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          )}

        </div>
      </div>

      {/* --- ম্যাপ বা ইমেজ সেকশন (নিচে) --- */}
      <div className="mt-32 w-full h-[400px] overflow-hidden grayscale hover:grayscale-0 transition duration-700">
        <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" 
            alt="Office Map" 
            className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};

export default Contact;
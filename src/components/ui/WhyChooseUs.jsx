import React from 'react';
// আপনার ছবিগুলো এখানে ইমপোর্ট করবেন
// import officeImg from '../../assets/office-meeting.jpg'; 
// import teamImg from '../../assets/team-work.jpg';
// import discussionImg from '../../assets/discussion.jpg';

const WhyChooseUs = () => {
  return (
    <section className="bg-[#09171A] py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ১. সেকশন হেডার */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-cyan-600 font-bold uppercase tracking-wider mb-2 text-sm">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            We combine creative vision with technical expertise
          </h2>
          <p className="text-[#99a1af] text-lg">
            We bring a blend of creative vision and technical expertise to help your business grow. Here is why leading brands trust us.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* ২. বাম পাশের কন্টেন্ট */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-white mb-6">
              Industry-Leading Expertise
            </h3>
            <p className="text-[#99a1af] mb-8 leading-relaxed">
              We don't just execute tasks; we become your strategic partner. Our team has a proven track record of delivering high-impact solutions that drive measurable growth for our clients.
            </p>

            {/* স্ট্যাটস (Stats) আইকন এরিয়া */}
            <div className="flex gap-8 mb-10 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-cyan-50 rounded-full text-cyan-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">100+</h4>
                  <p className="text-xs text-[#99a1af] uppercase">Happy Clients</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-cyan-50 rounded-full text-cyan-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m11.14-4.909a14.56 14.56 0 01-2.917-.52M20.25 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228V2.721M13.521 11.078a6.726 6.726 0 01-2.749-1.35" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">50+</h4>
                  <p className="text-xs text-[#99a1af] uppercase">Project</p>
                </div>
              </div>
            </div>

            {/* চেকলিস্ট (Checklist) */}
            <div className="space-y-4 mb-10">
              {[
                "Data-driven strategies that guarantee ROI.",
                "Transparent reporting and real-time analytics.",
                "Award-winning design team dedicated to your brand.",
                "24/7 Support and post-launch maintenance."
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span className="text-[#99a1af] font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* বাটন */}
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-cyan-500/30 transition duration-300 flex items-center">
              Schedule a Free Consultation
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>

          {/* ৩. ডান পাশের ইমেজ কোলাজ (Image Collage) */}
          <div className="lg:w-1/2 relative">
            
            {/* কোলাজ গ্রিড */}
            <div className="grid grid-cols-2 gap-4">
              {/* বড় ছবি (বাম পাশে) */}
              <div className="row-span-2 relative rounded-2xl overflow-hidden h-[400px] sm:h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" // আপনার officeImg ব্যবহার করুন
                  alt="Office Meeting" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ছোট ছবি ১ (উপরের ডান পাশে) */}
              <div className="rounded-2xl overflow-hidden h-[190px] sm:h-[240px]">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" // আপনার teamImg ব্যবহার করুন
                  alt="Team Work" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ছোট ছবি ২ (নিচের ডান পাশে) */}
              <div className="rounded-2xl overflow-hidden h-[190px] sm:h-[240px] relative">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" // আপনার discussionImg ব্যবহার করুন
                  alt="Discussion" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* ডেকোরেশন ১: গোল স্টিকার (Blue Circle Sticker) */}
            <div className="absolute top-10 -right-6 md:-right-10 bg-cyan-400 w-24 h-24 rounded-full flex items-center justify-center animate-spin-slow shadow-xl z-10 border-4 border-white">
               <svg viewBox="0 0 100 100" width="100" height="100">
                  <path id="curve" d="M 25 50 a 25 25 0 1 1 50 0 a 25 25 0 1 1 -50 0" fill="transparent" />
                  <text width="500">
                    <textPath xlinkHref="#curve" className="text-[10px] font-bold fill-white uppercase tracking-widest">
                       Watch Video • Watch Video •
                    </textPath>
                  </text>
               </svg>
               {/* মাঝখানের তীর */}
               <svg className="w-6 h-6 text-white absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>

            {/* ডেকোরেশন ২: হ্যাপি ক্লায়েন্ট সেকশন (নিচে বামে) */}
            <div className="absolute -bottom-6 -left-4 bg-white p-4 rounded-xl shadow-2xl flex items-center gap-4 border border-gray-100 max-w-xs">
              <div className="flex -space-x-3">
                 {/* ডামি অ্যাভাতার (Avatars) */}
                 <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=1" alt="Client" />
                 <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=2" alt="Client" />
                 <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=3" alt="Client" />
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-cyan-500 text-white flex items-center justify-center text-xs font-bold pl-1">100+</div>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">Happy Clients</p>
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
import React from 'react';
import { NavLink } from 'react-router-dom'; // 'Learn More' লিংকের জন্য
import heroBg from '../../assets/image/linebg.png';

// এখানে ৬টি সার্ভিসের জন্য ডেটা রাখা হলো
// আপনি চাইলে আইকনের জন্য Heroicons বা React Icons ব্যবহার করতে পারেন
const services = [
    {
        id: 1,
        title: 'Web Design & Dev',
        description: 'We design and build fast, responsive, and user-friendly websites that convert visitors into customers and grow your business online.',
        icon: (
            // এখানে একটি উদাহরণস্বরূপ আইকন (Website)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-cyan-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S12 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S12 3 12 3m0 0a9.004 9.004 0 018.716-6.747M12 3a9.004 9.004 0 00-8.716 6.747" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Branding & Identity',
        description: 'Crafting a unique voice and visual identity that makes your brand stand out, builds trust, and commands premium prices in the market.',
        icon: (
            // আইকন (Branding/Tag)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-purple-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a22.53 22.53 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'UI/UX Design',
        description: 'We create intuitive and engaging user experiences that keep your audience coming back. Simple, beautiful, and effective design.',
        icon: (
            // আইকন (UI/UX)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-pink-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.077-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Shopify Setup & Opt.',
        description: 'Launch your store in weeks, not months. We set up, customize, and optimize your Shopify store for maximum conversions and sales.',
        icon: (
            // আইকন (Shopify/Shopping Bag)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
        ),
    },
    {
        id: 5,
        title: 'SEO & Content Strategy',
        description: 'Climb the search rankings and attract qualified leads organically with data-driven SEO strategies and high-quality, engaging content.',
        icon: (
            // আইকন (SEO/Search)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
            </svg>
        ),
    },
    {
        id: 6,
        title: 'Motion & Video Editing',
        description: 'Bring your brand to life with captivating motion graphics and professional video editing that grabs attention and tells your story.',
        icon: (
            // আইকন (Video/Play)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.328l5.603 3.113z" />
            </svg>
        ),
    },
];

const ServicesSection = () => {
    return (
        <section
            style={{ backgroundImage: `url(${heroBg})` }}
            className="bg-[#0A0A0A] bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* সেকশন হেডার */}
                <div className="text-center mb-16">
                    <p className="text-cyan-500 font-semibold uppercase tracking-wider mb-3">
                        Our Services
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        The Right Team Makes All the Difference
                    </h2>
                </div>

                {/* ৬টি সার্ভিস কার্ডের গ্রিড */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-[#09171A] p-8 rounded-2xl hover:border hover:border-[#59E2FF] shadow-sm hover:shadow-md transition duration-300 group"
                        >
                            {/* আইকন */}
                            <div className="mb-6 p-3 bg-[#0A0A0A] rounded-xl inline-block group-hover:bg-cyan-50 transition duration-300">
                                {service.icon}
                            </div>

                            {/* টাইটেল */}
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-600 transition duration-300">
                                {service.title}
                            </h3>

                            {/* ডেসক্রিপশন */}
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            {/* Learn More লিংক */}
                            <NavLink
                                to="/services"
                                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition duration-300"
                            >
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </NavLink>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
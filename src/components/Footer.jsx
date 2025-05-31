import React from 'react';
import { FaHome, FaUserAlt, FaCommentAlt, FaBars } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='relative bg-gradient-to-r from-[#4B3621] to-[#6F4E37] text-yellow-300 overflow-hidden'>

            {/* DECORATIVE BORDER */}
            <div className='absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400' />
            <div className='absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400' />

            <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='flex flex-col md:flex-row justify-between items-center'>

                    {/* Branding Section */}
                    <div className='mb-8 md:mb-0 text-center md:text-left'>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent'>
                            cafe Royal
                        </h1>
                        <p className='mt-2 text-base sm:text-lg md:text-xl italic text-yellow-300'>
                            Brewing inspiring every day.
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className='flex flex-wrap justify-center gap-8'>
                        {[
                            [FaHome, "Home"],
                            [FaUserAlt, "About"],
                            [FaCommentAlt, "Testimonial"],
                            [FaBars, "Menu"],
                        ].map(([Icon, label], index) => (
                            <a
                                key={index}
                                href={`#${label.toLowerCase()}`}
                                className='flex flex-col items-center transition-colors duration-300 hover:text-yellow-500'
                            >
                                <Icon size={28} />
                                <span className='mt-1 text-sm'>
                                    {label}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Decorative seprater */}

                <div className='my-8 relative'>
                    <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t-2 border-dashed border-yellow-500/30'>


                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;

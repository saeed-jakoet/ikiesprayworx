import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion library
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink from react-scroll

const Hero = ({ heading, message }) => {
    return (
        <div id="home" className='relative h-screen bg-fixed bg-center bg-cover custom-img'>
            {/* Background overlay with lower opacity */}
            <div className='absolute inset-0 bg-black opacity-50'></div>

            {/* Content container */}
            <motion.div
                initial={{ opacity: 0, y: 50 }} // Initial animation state
                animate={{ opacity: 1, y: 0 }} // Animation when component is mounted
                transition={{ duration: 1, ease: "easeInOut" }} // Animation transition
                className='relative z-10 flex flex-col justify-center items-start h-full px-10 md:px-20 text-white'>
                <motion.h1
                    initial={{ scale: 0.8 }} // Initial scale
                    animate={{ scale: 1 }} // Animation when component is mounted
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }} // Animation transition
                    className='text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 animate-text tracking-tighter'>
                    {heading}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }} // Initial opacity
                    animate={{ opacity: 1 }} // Animation when component is mounted
                    transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }} // Animation transition
                    className='text-xl md:text-2xl max-w-lg mb-8'>
                    {message}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }} // Initial opacity and scale
                    animate={{ opacity: 1, scale: 1 }} // Animation when component is mounted
                    transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }} // Animation transition
                    className='inline-block'>
                    <ScrollLink
                        to="services"
                        smooth={true}
                        duration={500}
                        className='inline-block bg-gradient-to-r from-gray-700 to-gray-900 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition cursor-pointer'
                    >
                        Learn More
                    </ScrollLink>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;

import React from 'react';

const Hero = ({ heading, message }) => {
    return (
        <div id="home" className='relative h-screen bg-fixed bg-center bg-cover custom-img'>
            {/* Background overlay with lower z-index to not interfere with content */}
            <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-0'></div>

            {/* Content container with higher z-index */}
            <div className='relative z-10 flex flex-col justify-center items-start h-full px-10 md:px-20 text-white'>
                <h1 className='text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-yellow-300 animate-text tracking-tighter'>
                    {heading}
                </h1>
                <p className='text-xl md:text-2xl max-w-md mb-8'>{message}</p>
                <div className="flex">
                    <button className='px-8 py-3 mr-4 bg-custom-orange text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out'>Book Now</button>
                    <button className='px-8 py-3 bg-custom-red border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;

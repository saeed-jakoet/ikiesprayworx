import React, { useState } from 'react';
import Image from 'next/image';

const Portfolio = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [lightboxDisplay, setLightboxDisplay] = useState(false);

    const handleOpenModal = (image) => {
        setSelectedImage(image);
        setLightboxDisplay(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
        setLightboxDisplay(false);
        document.body.style.overflow = 'unset'; // Re-enable scrolling
    };

    const imageDetails = {
        '/nissanBefore.jpeg': 'Nissan Before Transformation',
        '/hyundaiBefore.jpeg': 'Hyundai Before Transformation',
        '/poloBefore.jpeg': 'Polo Before Transformation',
    };

    return (
        <section id="gallery" className="bg-gray-100 text-center py-10 md:py-20 h-auto md:h-screen">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 md:mb-8 text-gray-900 tracking-wide leading-relaxed">
                Gallery
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
                {Object.entries(imageDetails).map(([src, alt]) => (
                    <div key={src} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                        <div onClick={() => handleOpenModal(src.replace('Before', 'After'))} className="cursor-pointer overflow-hidden shadow-lg rounded-lg">
                            <Image src={src} alt={alt} width={500} height={500} layout="responsive" className="transform transition duration-500 hover:scale-110" />
                        </div>
                        <span className="text-sm font-semibold">{alt}</span>
                    </div>
                ))}
            </div>
            {lightboxDisplay && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75">
                    <div className="relative w-full max-w-3xl p-5 bg-white rounded-lg">
                        <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Image src={selectedImage} alt="Selected Image" width={600} height={600} layout="responsive" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;

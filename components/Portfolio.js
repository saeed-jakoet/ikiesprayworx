import React, { useState } from 'react';
import Image from 'next/image';

const Portfolio = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [lightboxDisplay, setLightboxDisplay] = useState(false);

    const handleOpenModal = (index) => {
        setSelectedImageIndex(index);
        setLightboxDisplay(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
    };

    const handleCloseModal = () => {
        setSelectedImageIndex(null);
        setLightboxDisplay(false);
        document.body.style.overflow = 'unset'; // Re-enable scrolling
    };

    const handlePrevImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? imageDetails.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === imageDetails.length - 1 ? 0 : prevIndex + 1
        );
    };


    const imageDetails = [
        { src: '/nissanBefore.jpeg', alt: 'Nissan Before Transformation' },
        { src: '/nissanAfter.jpeg', alt: 'Nissan After Transformation' },
        { src: '/hyundaiBefore.jpeg', alt: 'Hyundai Before Transformation' },
        { src: '/hyundaiAfter.jpeg', alt: 'Hyundai After Transformation' },
        { src: '/poloBefore.jpeg', alt: 'Polo Before Transformation' },
        { src: '/poloAfter.jpeg', alt: 'Polo After Transformation' },
        { src: '/img7.jpeg',},
        { src: '/img5.jpeg',},
        { src: '/img1.jpeg',},
        { src: '/img9.jpeg', },
        { src: '/img11.jpeg'},
        { src: '/img2.jpeg'},
        { src: '/img6.jpeg'},
        { src: '/img17.jpeg'},
        { src: '/img12.jpeg'},
        { src: '/img14.jpeg'},
        { src: '/img3.jpeg'},
        { src: '/img18.jpeg'},
        { src: '/img19.jpeg'},
        { src: '/img4.jpeg'},
        { src: '/img13.jpeg'},
        { src: '/img15.jpeg'},
        { src: '/img23.jpeg'},
        { src: '/img20.jpeg'},
        { src: '/img21.jpeg'},
        { src: '/img22.jpeg'},
        { src: '/img8.jpeg'},
        { src: '/img16.jpeg'},
        { src: '/img10.jpeg'},
    ];

    return (
        <section id="gallery" className="bg-gray-50 text-center py-16 md:py-24">
            <h2 className="text-5xl font-bold mb-10 text-gray-900">
                Our Work
            </h2>
            <p className="text-lg mb-12 text-gray-600">See the transformations we’ve made on various vehicles through our panel beating and bodywork services.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-12">
                {imageDetails.map(({ src, alt }, index) => (
                    <div key={index} className="group relative cursor-pointer rounded-lg overflow-hidden shadow-lg">
                        <div onClick={() => handleOpenModal(index)} className="relative h-64">
                            <Image src={src} alt={alt} fill objectFit="cover" className="transform transition-transform duration-300 group-hover:scale-110" />                        </div>
                        {/*<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">*/}
                        {/*    <span className="text-lg font-semibold">{alt}</span>*/}
                        {/*</div>*/}
                    </div>
                ))}
            </div>

            {lightboxDisplay && selectedImageIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75 p-4"
                    onClick={handleCloseModal} // Clicking outside the image closes the modal
                >
                    <div className="relative flex justify-center items-center max-w-4xl w-full"
                         onClick={(e) => e.stopPropagation()}>
                        {/* Left arrow for previous image */}
                        <button
                            onClick={handlePrevImage}
                            className="absolute left-0 md:left-4 top-1/2 transform -translate-y-1/2 text-black bg-white rounded-full p-3 hov transition-colors z-10"
                            aria-label="Previous Image"
                        >
                            &larr;
                        </button>

                        {/* Image */}
                        <div className="relative">
                            <Image
                                src={imageDetails[selectedImageIndex].src}
                                alt={imageDetails[selectedImageIndex].alt}
                                width={800}
                                height={600}
                                className="rounded-lg"
                            />
                        </div>

                        {/* Right arrow for next image */}
                        <button
                            onClick={handleNextImage}
                            className="absolute right-0 md:right-4 top-1/2 transform -translate-y-1/2 text-black bg-white rounded-full p-3 hover:bg-gray-900 transition-colors z-10"
                            aria-label="Next Image"
                        >
                            &rarr;
                        </button>

                        {/* Close button */}
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-black bg-white rounded-full p-2 hover:bg-gray-900 transition-colors z-10"
                            aria-label="Close"
                        >
                            &#10005;
                        </button>
                    </div>
                </div>

            )}
        </section>
    );
};

export default Portfolio;
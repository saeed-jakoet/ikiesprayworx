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
        { src: '/img7.jfif',},
        { src: '/img5.jfif',},
        { src: '/img1.jfif',},
        { src: '/img9.jfif', },
        { src: '/img11.jfif'},
        { src: '/img2.jfif'},
        { src: '/img6.jfif'},
        { src: '/img17.jfif'},
        { src: '/img12.jfif'},
        { src: '/img14.jfif'},
        { src: '/img3.jfif'},
        { src: '/img18.jfif'},
        { src: '/img19.jfif'},
        { src: '/img4.jfif'},
        { src: '/img13.jfif'},
        { src: '/img15.jfif'},
        { src: '/img23.jfif'},
        { src: '/img20.jfif'},
        { src: '/img21.jfif'},
        { src: '/img22.jfif'},
        { src: '/img8.jfif'},
        { src: '/img16.jfif'},
        { src: '/img10.jfif'},
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
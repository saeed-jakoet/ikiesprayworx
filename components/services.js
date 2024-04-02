import React from 'react';

const ServicesSection = () => {
    return (
        <section id="services" className="bg-gray-100 py-10 md:py-20 text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-black">Discover Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Service Card 1 */}
                    <div className="service-card bg-white bg-opacity-50 hover:bg-opacity-100 shadow-lg rounded-lg p-4 md:p-8 transform transition-all duration-300 hover:scale-105">
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">Collision Repair</h3>
                        <p className="text-md md:text-lg text-gray-600">Restore your vehicle's beauty after accidents.</p>
                    </div>
                    {/* Service Card 2 */}
                    <div className="service-card bg-white bg-opacity-50 hover:bg-opacity-100 shadow-lg rounded-lg p-4 md:p-8 transform transition-all duration-300 hover:scale-105">
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">Dent Removal</h3>
                        <p className="text-md md:text-lg text-gray-600">Say goodbye to dents with our expert solutions.</p>
                    </div>
                    {/* Service Card 3 */}
                    <div className="service-card bg-white bg-opacity-50 hover:bg-opacity-100 shadow-lg rounded-lg p-4 md:p-8 transform transition-all duration-300 hover:scale-105">
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">Painting</h3>
                        <p className="text-md md:text-lg text-gray-600">Revitalize your vehicle's look with our painting services.</p>
                    </div>
                    {/* Service Card 4 */}
                    <div className="service-card bg-white bg-opacity-50 hover:bg-opacity-100 shadow-lg rounded-lg p-4 md:p-8 transform transition-all duration-300 hover:scale-105">
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">Frame Straightening</h3>
                        <p className="text-md md:text-lg text-gray-600">Ensure your vehicle's structural integrity with precision straightening.</p>
                    </div>
                    {/* Service Card 5 */}
                    <div className="service-card bg-white bg-opacity-50 hover:bg-opacity-100 shadow-lg rounded-lg p-4 md:p-8 transform transition-all duration-300 hover:scale-105">
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">Detailing</h3>
                        <p className="text-md md:text-lg text-gray-600">Give your car the attention it deserves with our detailing services.</p>
                    </div>
                    {/* Service Card 6 */}
                    <div className="service-card bg-white bg-opacity-50 hover:bg-opacity-100 shadow-lg rounded-lg p-4 md:p-8 transform transition-all duration-300 hover:scale-105">
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">Custom Service</h3>
                        <p className="text-md md:text-lg text-gray-600">Contact us for personalized services tailored to your needs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;

import React from 'react';
import Contact from '../components/Contact';

const contact = () => {
    return (
        <div className='relative bg-fixed bg-center bg-cover custom-img'>
            <div className='absolute inset-0 bg-black opacity-40'></div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    {/* Grid layout for the map and contact form */}
                    <div className="flex flex-wrap -mx-4">
                        <div className="px-4 w-full md:w-1/2">
                            <div className="mb-4 bg-white bg-opacity-90 rounded-lg overflow-hidden relative" style={{ minHeight: '40vh' }}>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    className="absolute inset-0"
                                    frameBorder="0"
                                    title="map"
                                    marginHeight="0"
                                    marginWidth="0"
                                    scrolling="no"
                                    src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Macassar&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                                ></iframe>
                            </div>
                            {/* Contact details below the map */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="mb-4">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm">EMAIL</h2>
                                    <a href="mailto:iekraam.charles@gmail.com" className="text-indigo-500">iekraam.charles@gmail.com</a>
                                </div>
                                <div className="mb-4">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm">PHONE</h2>
                                    <p>+27732950388</p>
                                </div>
                                <div className="mb-4">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm">ADDRESS</h2>
                                    <p>Macassar</p>
                                </div>
                                <div>
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm">TRADING HOURS</h2>
                                    <p>Mon - Fri: 08:00 - 17:00<br/>Closed on Saturdays, Sundays and Public Holidays</p>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 w-full md:w-1/2">
                            <Contact/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default contact;

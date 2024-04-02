import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className='max-w-[500px] mx-auto py-16 px-4'>
            <h1 className='text-2xl sm:text-3xl font-bold text-center mb-6 text-white'>Let's Work
                Together</h1>
            <form className='max-w-[600px] w-full mx-auto bg-white shadow-xl rounded-lg p-6 sm:p-8'>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                        <input
                            className='appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            type="text"
                            placeholder='Name'
                        />
                    </div>
                    <div className='w-full md:w-1/2 px-3'>
                        <input
                            className='appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            type="email"
                            placeholder='Email'
                        />
                    </div>
                </div>
                <div className='mb-6'>
                    <input
                        className='appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        type="text"
                        placeholder='Subject'
                    />
                </div>
                <div className='mb-6'>
                    <textarea
                        className='appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        cols="30"
                        rows="10"
                        placeholder='Message'
                    ></textarea>
                </div>
                <button
                    className='w-full py-3 bg-custom-orange text-white rounded-lg hover:bg-blue-700 transition-colors duration-300'
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact;

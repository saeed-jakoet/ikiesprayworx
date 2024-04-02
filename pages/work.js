import React from 'react';
import Portfolio from '../components/Portfolio';

const Work = () => {
    return (
        <div>
            <div className='relative h-screen bg-fixed bg-center bg-cover custom-img'>
                <div className='absolute inset-0 bg-black opacity-40'></div>
                <div className='absolute inset-0 flex flex-col justify-center items-center text-white z-10'>
                    <h2 className='text-5xl font-bold mb-6 text-center'>Discover Masterpieces in Every Detail</h2>
                    <p className='py-5 text-xl mb-8 text-center max-w-lg'>Embark on a visual journey through a collection of meticulously crafted transformations. Delve into a world where imagination meets craftsmanship, where every stroke of creativity brings life to spaces. Experience the artistry that defines us. Click on the images to uncover the magic of before and after.</p>
                </div>
            </div>
            <Portfolio />
        </div>
    )
}

export default Work;

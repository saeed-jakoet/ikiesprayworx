import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 text-center'>
            <h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
            <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
                <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                    <Image
                        src='https://images.unsplash.com/photo-1641569109075-169265cc0640?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
                        alt='/'
                        layout='responsive'
                        width='677'
                        height='451'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1582332872732-d3784c63d448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1597846411462-c8bce7b5b759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='w-full h-full'>
                    <Image
                        src='https://images.unsplash.com/photo-1502085671122-2d218cd434e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1526&q=80'
                        alt='/'
                        width='215'
                        height='217'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

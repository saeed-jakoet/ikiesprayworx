import Link from 'next/link'
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {Link as ScrollLink} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav);
    };

    const toggleNav = () => {
        setNav(!nav);
    };

    // This function will be called when any menu item is clicked
    const closeMenu = () => {
        setNav(false);
    };


    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#ffffff')
                setTextColor('#000000')
            } else {
                setColor('transparent')
                setTextColor('#ffffff')
            }
        }
        window.addEventListener('scroll', changeColor);
    }, []);

    return (
        <div
            style={{backgroundColor: `${color}`}}
            className='fixed left-0 top-0 w-full z-50 ease-in duration-300'
        >
            <div className='h-20 mt-5 lg:mr-10 flex justify-between items-center p-4 text-white font-bold'>
                <div>
                    <Image width={350} height={350} src='/logo.svg' alt='heroImage'/>
                </div>
                <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                    <li className='p-4 cursor-pointer'>
                        <ScrollLink to='home' smooth={true} duration={500}
                                    className='hover:underline '>Home</ScrollLink>
                    </li>
                    {/*<li className='p-4 cursor-pointer'>*/}
                    {/*    <ScrollLink to='services' smooth={true} duration={500}*/}
                    {/*                className='hover:underline'>Services</ScrollLink>*/}
                    {/*</li>*/}
                    <li className='p-4 cursor-pointer'>
                        <ScrollLink to='gallery' smooth={true} duration={500}
                                    className='hover:underline '>Gallery</ScrollLink>
                    </li>
                    <li className='p-4 cursor-pointer'>
                        <ScrollLink to='contact' smooth={true} duration={500}
                                    className='hover:underline '>Contact</ScrollLink>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? (
                        <AiOutlineClose size={20} style={{color: `${textColor}`}}/>
                    ) : (
                        <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>
                    )}
                </div>
                {/* Mobile Menu */}
                <div
                    className={nav ? 'fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 sm:hidden flex justify-center items-center' : 'hidden'}>
                    <ul className="text-white">
                        <li className='p-4 text-4xl hover:bg-white hover:text-black hover:bg-opacity-25 rounded-lg transition duration-300'>
                            <ScrollLink to="home" smooth={true} duration={500} onClick={closeMenu}>Home</ScrollLink>
                        </li>
                        <li className='p-4 text-4xl hover:bg-white hover:text-black hover:bg-opacity-25 rounded-lg transition duration-300'>
                            <ScrollLink to="about" smooth={true} duration={500} onClick={closeMenu}>About</ScrollLink>
                        </li>
                        <li className='p-4 text-4xl hover:bg-white hover:text-black hover:bg-opacity-25 rounded-lg transition duration-300'>
                            <ScrollLink to="services" smooth={true} duration={500}
                                        onClick={closeMenu}>Services</ScrollLink>
                        </li>
                        <li className='p-4 text-4xl hover:bg-white hover:text-black hover:bg-opacity-25 rounded-lg transition duration-300'>
                            <ScrollLink to="contact" smooth={true} duration={500}
                                        onClick={closeMenu}>Contact</ScrollLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from './../../images/logo.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState([false])
    return (
        <nav className='flex justify-between p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
            <div className='flex gap-5 ml-6'>
                <img className='w-20 h-20' src={logo} alt="" />
                <h1 className='text-4xl font-bold text-white font-sans py-6'>Dream Weave Station</h1>
            </div>
            <div className='flex justify-center items-center text-white font-mono font-bold text-xl mr-10'>
                <div className='md:hidden' onClick={() => setOpen(!open)}>
                    <span>
                        {
                            open === true ?
                                <XMarkIcon className="h-8 w-8 " />
                                : <Bars3Icon className="h-8 w-8" />
                        }
                    </span>
                </div>
                <div className={`md:flex gap-4 absolute md:static duration-500 responsiveNav ${open ? 'top-12' : '-top-36'}`}>
                    <Link to="/">Home</Link>
                    <Link to="/service">Service</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Portfolio</Link>
                </div>
            </div>
        </nav >
    );
};

export default Header;
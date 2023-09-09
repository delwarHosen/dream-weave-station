import React from 'react';
import './Banner.css'
import logo from './../../images/logo.png'
const Banner = () => {
    return (
        <div className='flex justify-around p-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% '>
            <div className='p-10 w-2/5'>
                <h2 className='text-2xl font-bold text-purple-500'>Dream Weave Station</h2>
                <p className='text-sm leading-5 font-normal text-white'>Welcome to Dream Weave Stations, where imagination meets innovation in a tapestry of digital artistry.
                </p>
                <span>

                </span>
                <button className='text-white mt-4 w-32 h-9 font-medium rounded-3xl shadow-2xl bg-purple-500 opacity-100 ' >Book Now</button>
            </div>
            <div>
                <img className=' w-72 h-56	' src={logo} alt="" />
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import icon from './../../images/icons8-graphic-design-96 2.png'
const Service = ({ service }) => {
    console.log(service)
    const { name, img, description } = service
    return (
        <div className='border border-yellow-400 rounded-3xl mt-7 mx-auto py-7 w-40 h-72 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
            <img className='mx-auto h-20 w-20 top-44 -left-16' src={icon} alt="" />
            <h4 className='h-8 top-64 font-medium text-lg text-white text-center'>{name}</h4>
            <p className='text-sm leading-5 font-normal text-white'>{description}</p>
            <button className='text-white mt-4 w-32 h-9 font-medium rounded-3xl shadow-2xl bg-purple-500 opacity-100 ' >Book Now</button>
        </div>
    );
};

export default Service;
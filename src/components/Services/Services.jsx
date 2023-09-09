import React, { } from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div>
            <h2 className='text-3xl text-center mt-4 font-bold'>Our Services</h2>
            <div className='grid grid-cols-4 mt-4 text-center ml-10 mr-10'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;

// via-purple-500 to-pink-500
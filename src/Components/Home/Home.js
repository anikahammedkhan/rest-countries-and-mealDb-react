import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Home = () => {
    const countrys = useLoaderData();
    console.log(countrys);
    return (
        <div className='w-4/5 mx-auto mt-3'>
            <h1 className='text-center font-bold text-3xl'>Country Found : {countrys.length}</h1>
            <div className='grid grid-cols-3 gap-6 mt-8 justify-items-center'>
                {
                    countrys.map(country => <Country key={country.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Home;
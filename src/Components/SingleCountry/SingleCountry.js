import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SingleCountry = () => {
    const singleData = useLoaderData();
    const countryData = singleData[0];
    console.log(countryData)
    const { name, flags, capital, continents, currencies, languages, population, region, timezones } = countryData;
    return (
        <div className='w-1/2 mx-auto pt-4'>
            <div className='text-center font-bold text-4xl mb-8'>
                <h1>Country Details</h1>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={flags.png} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{name.common}</h2>
                    <div className='text-lg font-semibold'>
                        <p>Capital : {capital ? capital : 'No data Found'}</p>
                        <p>Region : {region ? region : 'No data  Found'}</p>
                        <p>Population : {population ? population : 'No data  Found'}</p>
                        <p>Continents : {continents[0] ? continents[0] : 'No data  found'}</p>
                        <p>Time Zone : {timezones[0] ? timezones[0] : 'No data  Found'}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to='../countries'>Go Back</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCountry;
import React from 'react';

const Country = ({ country }) => {
    const { name, flags, capital, region, population } = country;
    return (
        <div className="card w-full h-full bg-base-100 shadow-xl">
            <figure><img className='object-fit w-full' src={flags.png} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name.common}</h2>
                <p>Region : {region}</p>
                <p>Capital : {capital ? capital[0] : 'Not Found'}</p>
                <p>Population : {population ? population : 'Not Found'}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See More Details</button>
                </div>
            </div>
        </div>
    );
};

export default Country;
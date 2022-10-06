import React from 'react';
import Lottie from 'lottie-react';
import countries from '../Assets/76469-globe-world.json';
import food from '../Assets/4762-food-carousel.json';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='text-4xl font-bold text-center mt-4'>Wanna Explore Something New ?!</h1>
            <div className='flex p-16 justify-evenly items-center'>
                <div className='w-1/3 text-center'>
                    <h1 className='text-2xl font-semibold mb-4'>Let's Explore Some Countries</h1>
                    <Lottie animationData={countries} />
                    <button className='btn btn-success mt-4'><Link to='/countries'>Explore Countries</Link></button>
                </div>
                <div className='w-1/3 text-center'>
                    <h1 className='text-2xl font-semibold mb-4'>Got Tired Exploring Countries? <br />Let's Eat Some Food...</h1>
                    <Lottie animationData={food} />
                    <button className='btn btn-success mt-4'><Link to='/meals'>Explore Meals</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../MealsCategory/Category';
const Meals = () => {
    const loadMealsByCat = useLoaderData();
    const categories = loadMealsByCat.categories;
    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='text-4xl font-bold my-6 text-center'>Select Meals Category</h1>
            <div className='grid grid-cols-3 gap-5 justify-items-center'>
                {
                    categories.map(category => <Category key={category.idCategory} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Meals;
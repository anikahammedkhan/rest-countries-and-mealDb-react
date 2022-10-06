import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';
const MealList = () => {
    const list = useLoaderData()
    const mealList = list.meals;
    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='text-3xl font-bold text-center my-7'>Avilable Meals : {list.meals.length}</h1>
            <div className='grid grid-cols-3 gap-5 justify-items-center'>
                {
                    mealList.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default MealList;
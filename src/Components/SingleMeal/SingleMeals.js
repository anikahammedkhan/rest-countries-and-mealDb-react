import React from 'react';
import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom';

const SingleMeals = () => {
    const mealData = useLoaderData();
    const singleMeal = mealData.meals[0];
    const { strMeal, strArea, strCategory, strInstructions, strMealThumb, strTags } = singleMeal;
    return (
        <div className='w-4/5 mx-auto'>
            <h1>Meal Details</h1>
            <div className="card w-1/3 bg-base-100 shadow-xl mx-auto">
                <figure><img className='w-full' src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {strMeal}
                        <div className="badge badge-secondary">{strTags}</div>
                    </h2>
                    <p>Category : {strCategory}</p>
                    <p>Area : {strArea}</p>
                    <p>Details : {strInstructions}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to='../categories'>Go Back</Link></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleMeals;
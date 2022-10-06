import React from 'react';
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
    const { strMeal, idMeal, strMealThumb } = meal;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={strMealThumb} alt="Meal" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <p>Meal ID : {idMeal}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`../mealDetails/${idMeal}`}>See Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Meal;
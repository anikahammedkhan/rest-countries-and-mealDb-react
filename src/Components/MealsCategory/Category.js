import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { strCategory, strCategoryThumb, strCategoryDescription } = category;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={strCategoryThumb} alt="Category" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strCategory}</h2>
                <p>{strCategoryDescription.slice(0, 150)}....</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`../meal/${strCategory}`}>Select</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Category;
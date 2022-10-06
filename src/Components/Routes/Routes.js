import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Countries from "../Countries/Countries";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import MealList from "../MealList/MealList";
import Meals from "../Meals/Meals";
import SingleCountry from "../SingleCountry/SingleCountry";
import SingleMeals from "../SingleMeal/SingleMeals";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Home /> },
            { path: "home", element: <Home /> },
            {
                path: "countries",
                loader: () => fetch('https://restcountries.com/v3.1/all'),
                element: <Countries></Countries>
            },
            {
                path: "categories",
                loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
                element: <Meals></Meals>
            },
            {
                path: `country/:id`,
                loader: ({ params }) => fetch(`https://restcountries.com/v3.1/alpha/${params.id}`),
                element: <SingleCountry></SingleCountry>
            },
            {
                path: `meal/:cat`,
                loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.cat}`),
                element: <MealList></MealList>
            },
            {
                path: `mealDetails/:id`,
                loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`),
                element: <SingleMeals></SingleMeals>
            },
        ]
    },
    { path: "*", element: <div>404</div> },
]);

export default router;
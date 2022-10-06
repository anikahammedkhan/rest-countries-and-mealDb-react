import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Countries from "../Countries/Countries";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Meals from "../Meals/Meals";
import SingleCountry from "../SingleCountry/SingleCountry";

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
                path: "meals",
                element: <Meals></Meals>
            },
            {
                path: `country/:id`,
                loader: ({ params }) => fetch(`https://restcountries.com/v3.1/alpha/${params.id}`),
                element: <SingleCountry></SingleCountry>
            }
        ]
    },
    { path: "*", element: <div>404</div> },
]);

export default router;
import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                loader: () => fetch('https://restcountries.com/v3.1/all'),
                element: <Home />
            },
            { path: "/home", element: <Home /> },
        ]
    },
    { path: "*", element: <div>404</div> },
]);

export default router;
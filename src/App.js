import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Productdetails from "./components/Productdetails";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"


const Headingcomponent = () => {
 // Arrow function 
    return(
        <>
            <Header />
            <Outlet /> 
        </>
    )
}

const router = createBrowserRouter([
{
    path:"/",
    element:<Headingcomponent />,
    children:[{
            path:"/",
            element:<Body />
        },
        {
            path:"/about",
            element:<About />,
        },
        {
            path:"/product/:ids",   /* for dynamin routing  */
            element:<Productdetails />
        }
    ],
    errorElement:<Error />
},
])


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />) // To render component use < /> around variable name to understand babel this is component

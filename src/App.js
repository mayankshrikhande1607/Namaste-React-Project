import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import About from "./components/About";
import AddtoCart from "./components/Addtocart";
import Error from "./components/Error";
import Productdetails from "./components/Productdetails";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import { Provider } from "react-redux";
import appStore from "./utils/redux-store/appStore";


const Headingcomponent = () => {
 // Arrow function 
    return(
        <Provider store={appStore}>
            <div>  
                <Header />
                <Outlet /> 
            </div>
        </Provider>
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
            element:<Productdetails />,
        },{
            path:"/cart",
            element:<AddtoCart />
        }
    ],
    errorElement:<Error />
},
])


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />) // To render component use < /> around variable name to understand babel this is component

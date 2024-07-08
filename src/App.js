import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"


const Headingcomponent = () => {
 // Arrow function 
    return(
        <>
            <Header />
            <Body /> 
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Headingcomponent/>) // To render component use < /> around variable name to understand babel this is component

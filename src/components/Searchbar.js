import { useState } from "react";

const Searchbar=(props)=>{
    const [product,setproduct]=useState("")

    return(
        <div className="search-bar-container">
            <div className="search-input" >
                <input type="text" value={product} placeholder="product type" onChange={(e)=>{
                    setproduct(e.target.value)
                }} ></input>
            </div>
            <div className="search-btn" >
                <button onClick={()=>{
                    props.search(product)
                }}>Search</button>
            </div>
        </div>
    )
}

export default Searchbar;
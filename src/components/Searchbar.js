import { useState } from "react";

const Searchbar=(props)=>{
    const [product,setproduct]=useState("")

    return(
        <div className="search-bar-container flex justify-center ">
            <div className="search-input px-20 mt-1 border-solid border-4 border-black-100 rounded-md " >
                <input type="text" value={product} placeholder="product type" onChange={(e)=>{
                    setproduct(e.target.value)
                }} ></input>
            </div>
            <div className="search-btn px-5 py-2 bg-slate-200 rounded-lg ml-2 mt-2 " >
                <button onClick={()=>{
                    props.search(product)
                }}>Search</button>
            </div>
        </div>
    )
}

export default Searchbar;
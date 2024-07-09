import {useEffect,useState} from "react";
import { PROD_URL } from "../utils/constant/Constants";

const Productdetails = ()=>{
    const [getproduct,setgetProduct] = useState([])

    useEffect(()=>{
        fetchProduct()
    },[])

    const fetchProduct= async()=>{
        const data = await fetch(PROD_URL+"4");
        const json = await data.json()
        setgetProduct(json)
    }

    if(getproduct.length === 0) return <div>No data to display!!</div>

    const {category,description,image,price,title,rating} = getproduct
    return(
        <div className="product-cantainer">
           <div className="product-heaing" style={{textAlign:'center'}}><h1>Product Details</h1></div>
           <div className="product-details-cantainer">
            <div className="product-details">
                <h3>Product Name: {title}</h3>
                <h4>category: {category}</h4>
                <h5> price: Rs {price}</h5>
                <h5>Rating: {rating.rate}</h5>
                <p> <strong>discription</strong> : {description}</p>
            </div>
            <div className="product-image">
                <img src={image}></img>
            </div>
           </div>
        </div>
    )
}

export default Productdetails
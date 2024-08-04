import {useEffect,useState} from "react";
import { PROD_URL } from "../utils/constant/Constants";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux-store/cartSlice";

const Productdetails = ()=>{
    const {ids} = useParams();
    const [getproduct,setgetProduct] = useState([])

    useEffect(()=>{
        fetchProduct()
    },[])

    const fetchProduct= async()=>{
        const data = await fetch(PROD_URL+ids);
        const json = await data.json()
        setgetProduct(json)
    }
    const dispatch = useDispatch()
    const addProduct =(product)=>{
        dispatch(addItem(product))
    }

    if(getproduct.length === 0) return <div>No data to display!!</div>

    const {category,description,image,price,title,rating} = getproduct
    return(
        <div className="product-cantainer">
           <div className="product-heaing" style={{textAlign:'center',fontSize:'45px'}}><h1>Product Details</h1></div>
           <div className="product-details-cantainer">
            <div className="product-details">
                <h3><strong>Product Name</strong>: {title}</h3>
                <h4><strong>category</strong>: {category}</h4>
                <h5><strong>price Rs</strong> : {price}</h5>
                <h5><strong>Rating</strong> :{rating.rate}</h5>
                <p><strong>discription</strong> : {description}</p>
            </div>
            <div>
                <div className="product-image">
                    <img src={image}></img>
            
                </div>
                <div className="" style={{marginTop:'12px'}}>
                        <button style={{background:'#3fb93f',padding:'5px',color:'white',borderRadius:'5px',margin:'2px'}} onClick={()=>addProduct(getproduct)} >Add to cart</button>
                        <button style={{background:'#7676e7',padding:'5px',color:'white',borderRadius:'5px',margin:'2px'}}>Buy product</button>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Productdetails
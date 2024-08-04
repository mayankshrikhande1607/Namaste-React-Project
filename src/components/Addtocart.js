import { useSelector } from "react-redux";
import Addtocartdetails from "./Addtocartdetails";


const AddtoCart =()=>{
    const catData = useSelector((store)=>store.cart.items)
    return(
        <div className="cartcontainer">
            {catData.map((item)=>{
                return(
                <Addtocartdetails prodDetails={item} />
                )
            })}
        </div>
    )
}

export default AddtoCart;
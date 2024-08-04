import {Link} from "react-router-dom";
import { LOGO_URL } from "../utils/constant/Constants";
import { useSelector } from "react-redux";

const Header = ()=>{
    
    // subscribe to our store cart slice
    const cartItem = useSelector((store)=>store.cart.items)
    return(
        <div>
            <div className=" header-container  flex justify-between bg-gray-100 ">
                <div className="logo-box">
                    <img className=" logo-img " alt="logo" src={LOGO_URL} />
                </div>
                <div className="flex items-center ">
                    <ul className="flex " > 
                        <li className="p-2">
                           <Link to="/">Home</Link>
                        </li>
                        <li className="p-2">
                            <Link to="/about" >About Us</Link>
                        </li>
                        <li className="p-2">Contact Us</li>

                        <li className="p-2 font-bold text-large">
                           <Link to="/cart"> Cart {cartItem.length} -Items </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
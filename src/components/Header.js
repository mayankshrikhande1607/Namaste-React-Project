import {Link} from "react-router-dom";
import { LOGO_URL } from "../utils/constant/Constants";

const Header = ()=>{
    return(
        <div>
            <div className="nav-container">
                <div className="logo-box">
                    <img className="logo" alt="logo" src={LOGO_URL} />
                </div>
                <div className="nav-element">
                    <ul>
                        <li>
                           <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" >About Us</Link>
                        </li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
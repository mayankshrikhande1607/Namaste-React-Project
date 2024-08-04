import { Link } from "react-router-dom";

const Addtocartdetails = (props) => {
    const { image, category,title,price,id } = props.prodDetails
    console.log(props)
    return (
        <div className="cart-outer-container">
            <div className="cart-product-container">
                <div className="cart-product-image" >
                    <img src={image} />
                </div>
                <div className="cart-product-details">
                    <div className="product-details-box">
                        <h1>category: {category}</h1>
                        <h1>Title:{title},</h1>
                        <h1>Price:{price}</h1>
                    </div>
                    <div className="Back-product-button">
                        <Link to={"/product/"+id}>
                            <button>Back to product</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addtocartdetails;
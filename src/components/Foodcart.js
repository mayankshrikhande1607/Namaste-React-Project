
const Foodcart =(props)=>{
    const {clothdata} = props
    const {image,category,price,title,rating} = clothdata
    console.log(clothdata)
    return(
        <div className="foodcart-container">
            <div className="food-img">
                <img src={image} />
            </div>
            <div className="food-details">
                <h3>category: {category}</h3>
                <h4>Title: {title}</h4>
                <h4>price:Rs {price}</h4>
                <h5>rating: {rating.rate}</h5>
            </div>
        </div>
    )
}

export default Foodcart;
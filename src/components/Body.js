import Searchbar from "./Searchbar";
import Foodcart from "./Foodcart";
import { useState, useEffect } from "react";

const Body = () => {
    const [mockData, setmockData] = useState([])
    const [filterData,setfilterData]=useState([])
    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://fakestoreapi.com/products");
        const finalData = await data.json();
        setmockData(finalData)
        setfilterData(finalData)
    }
    const searchProduct =(data)=>{
       const filterdata= mockData.filter((item)=>{
            return item.category.toLowerCase().includes(data.toLowerCase())
        })
        setfilterData(filterdata)
    }

    return (
        <>
            <Searchbar search={searchProduct} />
            <div className="foodCart">
                {filterData.map((item) => {
                    return (<Foodcart clothdata={item} />)
                })}
            </div>
        </>
    )

}

export default Body;
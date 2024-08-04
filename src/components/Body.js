import Searchbar from "./Searchbar";
import Foodcart, { Promotedfoodcart } from "./Foodcart";
import { PROD_URL } from "../utils/constant/Constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
    const [mockData, setmockData] = useState([])
    const [filterData, setfilterData] = useState([])

    /** this is higher order component variable */
    const Foodcardpramoted = Promotedfoodcart(Foodcart)

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch(PROD_URL);
        const finalData = await data.json();
        setmockData(finalData)
        setfilterData(finalData)
    }
    const searchProduct = (data) => {
        const filterdata = mockData.filter((item) => {
            return item.category.toLowerCase().includes(data.toLowerCase())
        })
        setfilterData(filterdata)
    }

    return (
        <>
            <Searchbar search={searchProduct} />
            <div className="foodCart flex justify-around flex-wrap ">
                {filterData.map((item) => {
                    return (
                        <Link key={item.id} to={"/product/" + item.id}>
                            {item.rating.rate > 3 ?
                                <Foodcardpramoted clothdata={item} />
                                : <Foodcart clothdata={item} />}
                        </Link>
                    )
                })}
            </div>
        </>
    )

}

export default Body;
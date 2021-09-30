import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        function getProducts() {
            axios.get("http://localhost:8070/product/").then((res) => {
                setProducts(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getProducts();
    }, [])

    return(
        <div className="container">
            <h1>All products suckers</h1>
            <br/>
            <h2>List</h2>

            {products.map((val, key) => {
                return (
                    <div>
                        <h1>{val.name}</h1><h1>{val.category}</h1>
                        <h3>{val.description}</h3><h1>{val.price}</h1>
                    </div>
                )
            })}
        </div>
    )
}
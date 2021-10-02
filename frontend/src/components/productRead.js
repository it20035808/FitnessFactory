import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import "../styles/AllProducts.css";


export default function ReadProduct() {

    useEffect(() => {
        axios.get('http://localhost:8070/product/').then((response) => {
            setProduct(response.data)
        })

    }, [])

    const [ProductList, setProduct] = useState([]);
    const [searchItem, setSearchItem] = useState("");

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8070/product/delete/${id}`).then((then => {
            Swal.fire({
                title: 'Deleted Successfully',
                icon: 'success'
            });
            setProduct(ProductList.filter((val) => {
                return val._id != id;
            }))
        }))
    };

    const history = useHistory();

    const routeChange = (id) => {
        console.log(id);
        let path = `/update/${id}`;
        history.push(path);
    }

    const gotoAdd = ()=>{
        let path = "/add";
        history.push(path);
    }

    return (

        <div className="productBody" >
            <div className="productContainer" >

                <h2> List of products  </h2>

                <div className="input-group rounded">
                    <input type="search" className="form-control rounded" placeholder="Enter Product name" aria-label="Search"
                        aria-describedby="search-addon"
                        onChange={(e) => {
                            setSearchItem(e.target.value);
                        }} />
                    <span className="input-group-text border-0" id="search-addon">
                        <button type="button" className="btn btn-primary">Search</button>
                        <i className="fas fa-search"></i>
                    </span>
                </div> <br />
                {ProductList.filter((val) => {
                    if (searchItem == "") {
                        return val
                    } else if (val.name.toLowerCase().includes(searchItem.toLowerCase()) || val.category.toLowerCase().includes(searchItem.toLowerCase())) {
                        return val
                    }
                }).map((val, key) => {

                    return <div>
                        <table className="table table-dark">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Description </th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td>{val.name} <br /> <br /> <a type="button" className="btn btn-danger" onClick={() => deleteProduct(val._id)} > Delete Product </a> <br /> <br />

                                        <a type="button" className="btn btn-info" onClick={() => routeChange(val._id)} > Edit Product </a>

                                    </td>


                                    <td>{val.category} </td>
                                    <td>{val.description}  </td>
                                    <td>{val.price} </td>

                                    <td>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                })}
                <div class="flex-add-contain">
                    <button class="btn btn-primary" type="button" onClick={() => gotoAdd()}>Add a new product</button>
                </div>
            </div>
        </div>)
}
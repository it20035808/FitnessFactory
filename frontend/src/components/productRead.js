import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import background from "../img/gym5.jpg";



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

    return (

        <div style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
        }}>
            <div class="container" >

                <h2 class="display-3" > List of products  </h2>

                <div class="input-group rounded">
                    <input type="search" class="form-control rounded" placeholder="Enter Product name" aria-label="Search"
                        aria-describedby="search-addon"
                        onChange={(e) => {
                            setSearchItem(e.target.value);
                        }} />
                    <span class="input-group-text border-0" id="search-addon">
                        <button type="button" class="btn btn-primary">Search</button>
                        <i class="fas fa-search"></i>
                    </span>
                </div> <br />
                {ProductList.filter((val)=> {
                    if (searchItem == "") {
                        return val
                    } else if (val.name.toLowerCase().includes(searchItem.toLowerCase()) || val.category.toLowerCase().includes(searchItem.toLowerCase())) {
                        return val
                    }
                }).map((val, key) => {

                    return <div>
                        <table class="table table-dark">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Description </th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td>{val.name} <br /> <br /> <a type="button" class="btn btn-danger" onClick={() => deleteProduct(val._id)} > Delete Product </a> <br /> <br />

                                        <a type="button" class="btn btn-info" onClick={() => routeChange(val._id)} > Edit Product </a>

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
            </div>
        </div>)
}
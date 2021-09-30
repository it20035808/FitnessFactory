import React, { useState, useEffect } from "react";
import axios from "axios";
import background from "../gymb10.jpg";
import { useHistory } from "react-router";
import Swal from "sweetalert2";


export default function ReadSupplier() {

    useEffect(() => {
        axios.get('http://localhost:8070/supplier/').then((response) => {
            setSupplier(response.data)
        })

    }, [])

    const [SupplierList, setSupplier] = useState([]);
    

    const deleteSupplier = (id) => {
        axios.delete(`http://localhost:8070/supplier/delete/${id}`).then((then => {
            Swal.fire({
                title: "Deleted Successfully",
                icon: 'success'
            });
        }))
    };

    const history = useHistory();
    const updateSupplier = (id) => {
        console.log(id);
        let path = `/update/${id}`;
        history.push(path);
    }

    return (<div style={{
        backgroundImage: `url(${background})`,
        maxWidth: "100%"
    }}>
       <div class="container" >



            <h2 class="display-3" > All Suppliers  </h2>

            <div class="input-group rounded">
                <input type="search" class="form-control rounded" placeholder="Search " aria-label="Search"
                    aria-describedby="search-addon" />
                <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                    <a type="button" class="btn btn-info" href="http://localhost:3000/Search" > Search  </a>
                </span>
            </div> <br />
            {SupplierList.map((val, key) => {

                return <div>
                    <table class="table table-dark">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Supplier Id</th>
                                <th scope="col">Supplier Name</th>
                                <th scope="col">Supplier Address </th>
                                <th scope="col">Supplier Phone Number </th>
                                <th scope="col">Supplier Email </th>
                                <th scope="col"> Order Id </th>
                                <th scope="col"> Product Description </th>
                                <th scope="col"> Unit Cost </th>
                                <th scope="col"> Quantity </th>
                                <th scope="col"> Total Amount </th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>{val.supplierId} <br /> <br /> <a type="button" class="btn btn-danger" onClick={() => deleteSupplier(val._id)} > Delete  </a> <br /> <br />

                                    <a type="button" class="btn btn-info" onClick={() => updateSupplier(val._id)} > Edit  </a>
                                </td>

                                <td>{val.supplierName}  </td>
                                <td>{val.address} </td>
                                <td>{val.phoneNumber} </td>
                                <td>{val.email}</td>
                                <td>{val.orderId}</td>
                                <td>{val.productDescription}</td>
                                <td>{val.unitCost}</td>
                                <td>{val.quantity}</td>
                                <td>{val.totalAmount}</td>

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
import React, {useState, useEffect} from "react";
import axios from "axios";
import background from "../gymb10.jpg";
import './ComponentStyles.css'
import {useHistory} from "react-router";
import Swal from "sweetalert2";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';



export default function ReadSupplier() {

    useEffect(() => {
        axios.get('http://localhost:8070/supplier/').then((response) => {
            setSupplier(response.data)
        })

    }, [])

    const [SupplierList, setSupplier] = useState([]);
    const [searchItem, setSearchItem] = useState("");

    const deleteSupplier = (id) => {
        axios.delete(`http://localhost:8070/supplier/delete/${id}`).then((then => {
            Swal.fire({
                title: "Deleted Successfully",
                icon: 'success',
            });
        }))
    };

    const history = useHistory();
    const updateSupplier = (id) => {
        console.log(id);
        let path = `/update/${id}`;
        history.push(path);
    }

    const gotoAdd = ()=>{
        let path = "/add";
        history.push(path);
    }

    return (<div style={{
        maxWidth: "100%",
    }}
                 className={"h-full DisplaySVGBackground"}
    >
        <div class="pt-24 container">


            <h2 class="display-3 font-black mb-3"> All Suppliers </h2>

            <div class="input-group rounded">
                <input type="search" class="form-control rounded" placeholder="Search " aria-label="Search"
                       aria-describedby="search-addon"
                       onChange={(e) => {
                           setSearchItem(e.target.value);
                       }}/>

                    <button className={"bg-blue-300 px-5 ml-2 rounded border-2 border-blue-400"}>Search</button>

            </div>
            <br/>
            {SupplierList.filter((val) => {
                if (searchItem == "") {
                    return val
                } else if (val.supplierName.toLowerCase().includes(searchItem.toLocaleLowerCase())) {
                    return val
                }
            }).map((val, key) => {

                return <div>
                    <table Id = "Supplier" class="table table-dark rounded-lg">
                        <thead class="thead-dark">
                        <tr>
                            <th scope="col">Supplier Id</th>
                            <th scope="col">Supplier Name</th>
                            <th scope="col">Supplier Address</th>
                            <th scope="col">Supplier Phone Number</th>
                            <th scope="col">Supplier Email</th>
                            <th scope="col"> Order Id</th>
                            <th scope="col"> Product Description</th>
                            <th scope="col"> Unit Cost</th>
                            <th scope="col"> Quantity</th>
                            <th scope="col"> Total Amount</th>
                        </tr>
                        </thead>

                        <tbody>

                        <tr>
                            <td>{val.supplierId}
                                <br/><br/><br/>

                                <div className={"grid grid-rows-1 grid-cols-2 gap-3"}>
                                    <a type="button" className="btn btn-danger "
                                       onClick={() => deleteSupplier(val._id)}> Delete </a>

                                    <a type="button" className="btn btn-info"
                                       onClick={() => updateSupplier(val._id)}> Edit </a>

                                </div>
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
            <div class="grid place-items-center">
                    <button class="btn btn-primary bg-blue-400" type="button" onClick={() => gotoAdd()}
                    style={{width:"30em"}}>Add a new supplier</button>

&nbsp;&nbsp;&nbsp;&nbsp;

<ReactHTMLTableToExcel

        id="test-table-xls-button"

        className="btn btn-primary"

        table="Supplier"

        filename="tablexls"

        sheet="tablexls"

        buttonText="Download as Excel file"/>



                </div>
        </div>
    </div>)
}
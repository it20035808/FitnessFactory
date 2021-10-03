import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Swal from "sweetalert2";



export default function EditSupplier(props) {

    const [SupplierList, setSupplier] = useState([]);

    const [proData, setData] = useState({
        supplierId: "",
        supplierName: "",
        address: "",
        phoneNumber: "",
        email: "",
        orderId: "",
        productDescription: "",
        unitCost: "",
        quantity: "",
        totalAmount: ""
    })


    useEffect(() => {
        const pid = props.match.params.id
        axios.get('http://localhost:8070/supplier/get/' + pid).then((res) => {
            setData(res.data)
        }).catch((err) => {
            Swal.fire({
                title: err,
                icon: 'error'
            })
        })
    }, [])

    const history = useHistory();
    function updateProduct(e) {
        e.preventDefault();

        const pid = props.match.params.id
        axios.put('http://localhost:8070/supplier/update/' + pid, proData).then((then) => {
            Swal.fire({
                title: "Updated Successfully",
                icon: 'success'
            });
            history.push("/");
        }).catch((err) => {
            Swal.fire({
                title: err,
                icon: 'error'
            })
        })
    }

    function handle(e) {
        const newdata = { ...proData }
        newdata[e.target.id] = e.target.value;
        setData(newdata)
    }

    const gotoAdd = ()=>{
        let path = "/";
        history.push(path);
    }
    return (
        <div style={{
            maxWidth: "100%"
        }}
            className={"UpdateSVGBackground"}
        >
            <div className="pt-24 container">

                <h2 class="display-3 font-black mb-3"> Update Supplier </h2>


                <span className="border">
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <form onSubmit={updateProduct}>
                            <div className="form-group">
                                <label for=" supplierId">Supplier Id</label>
                                <input type="text" className="form-control" id=" supplierId" placeholder="Enter Supplier Id"
                                    value={proData.supplierId}
                                    onChange={(e) => {
                                        handle(e);
                                    }} />

                            </div>
                            <div className="form-group">

                                <label for="suppliertName">Supplier Name</label>
                                <input type="text" className="form-control" id="supplierName" placeholder="Enter Supplier Name"
                                    value={proData.supplierName}
                                    onChange={(e) => {
                                        handle(e);
                                    }} />

                            </div>
                            <div className="form-group">

                                <label for="address">Supplier Address</label>
                                <input type="text" className="form-control" id="address" placeholder="Enter Supplier Address"
                                    value={proData.address}
                                    onChange={(e) => {
                                        handle(e);
                                    }} />


                            </div>
                            <div className="form-group">

                                <label for="phoneNumber">Supplier Phone Number</label>
                                <input type="text" className="form-control" id="phoneNumber" placeholder="Enter Supplier Phone Number"
                                    value={proData.phoneNumber}
                                    onChange={(e) => {
                                        handle(e);
                                    }} />


                            </div>

                            <div className="form-group">

                                <label for="email">Supplier Email</label>
                                <input type="text" className="form-control" id="email" placeholder="Enter Supplier Email"
                                    value={proData.email}
                                    onChange={(e) => {
                                        handle(e);
                                    }} />


                            </div>
                            <div className="form-group">

                                <label for="orderId">Order Id</label>
                                <input type="text" className="form-control" id="orderId" placeholder="Enter Order Id"
                                    value={proData.orderId}
                                    onChange={(e) => {
                                        handle(e);
                                    }} />


                            </div>
                            <div className="form-group">

                                <label for="productDescription">Product Description</label>
                                <input type="text" className="form-control" id="productDescription" placeholder="Enter Product Description"
                                    value={proData.productDescription}
                                    onChange={(e) => {
                                        handle(e);
                                    }} />


                            </div>

                            <div className="form-group">

                                <label for="unitCost">Unit Cost</label>
                                <input type="text" className="form-control" id="unitCost" placeholder="Enter Unit Cost"
                                    value={proData.unitCost}
                                    onChange={(e) => {
                                        handle(e);
                                    }} />


                            </div>

                            <div className="form-group">

                                <label for="quantity">Quantity</label>
                                <input type="text" className="form-control" id="quantity" placeholder="Enter Quantity "
                                    value={proData.quantity}
                                    onChange={(e) => {
                                        handle(e);
                                    }} />


                            </div>
                            <div className="form-group">

                                <label for="totalAmount">Total Amount</label>
                                <input type="text" className="form-control" id="totalAmount" placeholder="Enter Total Amount"
                                    value={proData.totalAmount}
                                    onChange={(e) => {
                                        handle(e);
                                    }} />


                            </div>


                            <button type="submit" className="btn btn-primary min-w-full">Submit</button>

                            <div class="grid place-items-center pt-5">
                                <button class="btn btn-primary bg-blue-400" type="button" onClick={() => gotoAdd()}
                                    style={{ width: "30em" }}>Supplier List</button>
                            </div>

                        </form>
                    </div>
                </span>


            </div>
        </div>
    )
}

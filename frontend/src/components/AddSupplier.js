import React, { useState } from "react"
import background from "../gymb12.jpg";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddSupplier() {
  const [supplierId, setSupplierId] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [unitCost, setUnitCost] = useState("");
  const [quantity, setQuantity] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newSupplier = {
      supplierId,
      supplierName,
      address,
      phoneNumber,
      email,
      orderId,
      productDescription,
      unitCost,
      quantity,
      totalAmount
    }

    axios.post("http://localhost:8070/supplier/add", newSupplier).then(() => {

      Swal.fire({
        title: "Supplier Added Successfully",
        icon: 'success'
    });

    }).catch((err) => {
      Swal.fire({
        title: err,
        icon: 'error'
    });
    })

  }

  return (
    <div style={{
        backgroundImage: `url(${background})`,
        maxWidth: "100%"
    }}>
        <div className="container">
            <span className="border">
                <div className="shadow p-3 mb-5 bg-white rounded">
        <form onSubmit={sendData}>
          <div className="form-group">
            <label for=" supplierId">Supplier Id</label>
            <input type="text" className="form-control" id=" supplierId" placeholder="Enter Supplier Id"
              onChange={(e) => {
                setSupplierId(e.target.value);

              }} />

          </div>
          <div className="form-group">

            <label for="suppliertName">Supplier Name</label>
            <input type="text" className="form-control" id="supplierName" placeholder="Enter Supplier Name"
              onChange={(e) => {
                setSupplierName(e.target.value);

              }} />

          </div>
          <div className="form-group">

            <label for="address">Supplier Address</label>
            <input type="text" className="form-control" id="address" placeholder="Enter Supplier Address"
              onChange={(e) => {
                setAddress(e.target.value);

              }} />


          </div>
          <div className="form-group">

            <label for="phoneNumber">Supplier Phone Number</label>
            <input type="text" className="form-control" id="phoneNumber" placeholder="Enter Supplier Phone Number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);

              }} />


          </div>

          <div className="form-group">

            <label for="email">Supplier Email</label>
            <input type="text" className="form-control" id="email" placeholder="Enter Supplier Email"
              onChange={(e) => {
                setEmail(e.target.value);

              }} />


          </div>
          <div className="form-group">

            <label for="orderId">Order Id</label>
            <input type="text" className="form-control" id="orderId" placeholder="Enter Order Id"
              onChange={(e) => {
                setOrderId(e.target.value);

              }} />


          </div>
          <div className="form-group">

            <label for="productDescription">Product Description</label>
            <input type="text" className="form-control" id="productDescription" placeholder="Enter Product Description"
              onChange={(e) => {
                setProductDescription(e.target.value);

              }} />


          </div>

          <div className="form-group">

            <label for="unitCost">Unit Cost</label>
            <input type="text" className="form-control" id="unitCost" placeholder="Enter Unit Cost"
              onChange={(e) => {
                setUnitCost(e.target.value);

              }} />


          </div>

          <div className="form-group">

            <label for="quantity">Quantity</label>
            <input type="text" className="form-control" id="quantity" placeholder="Enter Quantity "
              onChange={(e) => {
                setQuantity(e.target.value);

              }} />


          </div>
          <div className="form-group">

            <label for="totalAmount">Total Amount</label>
            <input type="text" className="form-control" id="totalAmount" placeholder="Enter Total Amount"
              onChange={(e) => {
                setTotalAmount(e.target.value);

              }} />


          </div>


          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
           </span>


      </div>
    </div>


  )
}
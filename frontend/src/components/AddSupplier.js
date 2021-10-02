import React, {useState} from "react"
import background from "../gymb12.jpg";
import axios from "axios";
import './ComponentStyles.css'
import Swal from "sweetalert2";
import ErrorModal from "./ErrorModal";

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

    const [visibility, setVisibility] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');


    const changeModalVisibilityHandler = (state) => {
        setVisibility(state);
    };


    function sendData(e) {
        e.preventDefault();


        if (isNaN(Number(supplierId))) {
            setErrorMsg(() => {
                return "Supplier ID must be a number."
            })
            changeModalVisibilityHandler(true)
            return
        }

        if (supplierName.trim().length === 0) {
            setErrorMsg(() => {
                return 'Supplier Name must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (address.trim().length === 0) {
            setErrorMsg(() => {
                return 'address Name must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (isNaN(Number(phoneNumber))) {
            setErrorMsg(() => {
                return "phone Number must be a number."
            })
            changeModalVisibilityHandler(true)
            return
        }

        let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regExp.test(email)) {
            setErrorMsg(() => {
                return "Email must be a Filled Correctly."
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (isNaN(Number(orderId))) {
            setErrorMsg(() => {
                return "Order ID must be a number."
            })
            changeModalVisibilityHandler(true)
            return
        }

        if (productDescription.trim().length === 0) {
            setErrorMsg(() => {
                return "Product description must be Filled."
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (isNaN(Number(unitCost))) {
            setErrorMsg(() => {
                return "Unit cost must be a number."
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (isNaN(Number(quantity))) {
            setErrorMsg(() => {
                return "Quantity must be a number."
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (isNaN(Number(totalAmount))) {
            setErrorMsg(() => {
                return "Total Amount must be a number."
            })
            changeModalVisibilityHandler(true)
            return;
        }

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
            totalAmount,
        }


        axios.post("http://localhost:8070/supplier/add", newSupplier).then(() => {

            Swal.fire({
                title: "Supplier Added Successfully",
                icon: 'success',
            });

        }).catch((err) => {
            Swal.fire({
                title: err,
                icon: 'error',
            });
        })

    }

    return (
        <div style={{
            maxWidth: "100%",
        }}
             className={"CreateSVGBackground"}
        >
            <div className="pt-24 container">

                <h2 className="display-3 font-black mb-3"> Create a new Supplier </h2>

                <span className="border">
                <div className="shadow-lg p-3 mb-5 bg-white rounded ">
                    <form onSubmit={sendData} className={"p-8 pt-3"}>
                        <div className="form-group">
                         <label for=" supplierId">Supplier Id</label>
                        <input type="text"                    className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                               id=" supplierId" placeholder="Enter Supplier Id"
                               onChange={(e) => {
                                   setSupplierId(e.target.value);

                               }}/>

          </div>
          <div className="form-group ">

            <label for="suppliertName">Supplier Name</label>
            <input type="text"                    className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                   id="supplierName" placeholder="Enter Supplier Name"
                   onChange={(e) => {
                       setSupplierName(e.target.value);

                   }}/>

          </div>
          <div className="form-group">

            <label for="address">Supplier Address</label>
            <input type="text"                    className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                   id="address" placeholder="Enter Supplier Address"
                   onChange={(e) => {
                       setAddress(e.target.value);

                   }}/>


          </div>
          <div className="form-group">
            <label for="phoneNumber">Supplier Phone Number</label>
            <input type="text"                    className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                   id="phoneNumber" placeholder="Enter Supplier Phone Number"
                   onChange={(e) => {
                       setPhoneNumber(e.target.value);

                   }}/>
          </div>

          <div className="form-group">

            <label for="email">Supplier Email</label>
            <input type="text"                    className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                   id="email" placeholder="Enter Supplier Email"
                   onChange={(e) => {
                       setEmail(e.target.value);

                   }}/>


          </div>
          <div className="form-group">

            <label for="orderId">Order Id</label>
            <input type="text"                    className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                   id="orderId" placeholder="Enter Order Id"
                   onChange={(e) => {
                       setOrderId(e.target.value);

                   }}/>


          </div>
          <div className="form-group">

            <label for="productDescription">Product Description</label>
            <input type="text"
                   className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"

                   id="productDescription" placeholder="Enter Product Description"
                   onChange={(e) => {
                       setProductDescription(e.target.value);

                   }}/>


          </div>

          <div className="form-group">




              <label for="unitCost">Unit Cost</label>
           <div className="relative">
                        <div
                            className="absolute text-gray-600 dark:text-gray-400 flex items-center px-3 border-r dark:border-gray-700 h-full">
                            <span className="uppercase text-sm leading-tight tracking-normal">usd</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Unit Cost"
                            onChange={(e) => {
                                setUnitCost(e.target.value);

                            }}
                            id="unitCost"
                            className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow"
                        />
                    </div>


          </div>

          <div className="form-group">

            <label for="quantity">Quantity</label>
            <input type="text"                    className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                   id="quantity" placeholder="Enter Quantity "
                   onChange={(e) => {
                       setQuantity(e.target.value);

                   }}/>


          </div>
          <div className="form-group">

            <label for="totalAmount">Total Amount</label>
            <input type="text"                    className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                   id="totalAmount" placeholder="Enter Total Amount"
                   onChange={(e) => {
                       setTotalAmount(e.target.value);

                   }}/>


          </div>


          <button type="submit" className="btn btn-primary min-w-full mt-5 p-2">Submit</button>
        </form>
                </div>
           </span>


            </div>

            <div>
                <ErrorModal errorMsg={errorMsg} onChangeVisibility={changeModalVisibilityHandler}
                            visibility={visibility}/>
            </div>
        </div>
    )
}
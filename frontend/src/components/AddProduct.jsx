import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { useHistory } from "react-router";
import '../styles/AddProduct.css';
import NavBar from "./NavBar";
import Footer from "./Footer";



function AddProduct() {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    const [nameErr, setNameErr] = useState({});
    const [categoryErr, setCategoryErr] = useState({});
    const [descriptionErr, setDescriptionErr] = useState({});
    const [priceErr, setPriceErr] = useState({});

    const history = useHistory();
    function sendData(e) {
        e.preventDefault();
        const isValid = formValidation();

        const newProduct = {
            name,
            category,
            description,
            price
        }

        console.log(newProduct);

        if (isValid) {

            axios.post("http://localhost:8070/products/add", newProduct).then(() => {
                Swal.fire({
                    title: 'Product Added Successfully',
                    icon: 'success'
                })
                setName("");
                setCategory("");
                setDescription("");
                setPrice(0);
                history.push("/");
            }).catch((err) => {
                Swal.fire({
                    title: err,
                    icon: 'error'
                })
            })


        }


    }

    const formValidation = () => {
        const nameErr = {};
        const categoryErr = {};
        const descriptionErr = {};
        const priceErr = {};
        let isValid = true;

        if (name.trim().length < 5) {
            nameErr.nameShort = "Name is too short";
            isValid = false;
        }

        if (name.trim().length == 0) {
            nameErr.nameEmpty = "Name is empty please enter";
            isValid = false;
        }

        if (category.trim().length == 0) {
            categoryErr.categoryEmpty = "Category is empty please enter";
            isValid = false;
        }

        if (description.trim().length == 0) {
            descriptionErr.descriptionEmpty = "Description is empty please enter";
            isValid = false;
        }

        if (!price.toString().trim()) {
            priceErr.priceEmpty = "Price is empty";
            isValid = false;
        }


        setNameErr(nameErr);
        setCategoryErr(categoryErr);
        setDescriptionErr(descriptionErr);
        setPriceErr(priceErr);
        return isValid;
    }

    const gotoView = () => {
        let path = "/store";
        history.push(path);
    }

    return (
        <div>
            <NavBar/>
            <div className="AddBody">
            <div className="Addcontainer">
                <span className="border">
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <form onSubmit={sendData}>
                            <div class="form-group">
                                <label for="name">Product Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter product name"
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }} />
                                {Object.keys(nameErr).map((key) => {
                                    return <div style={{ color: "red" }}>{nameErr[key]}</div>
                                })}
                            </div>

                            <div className="form-group">
                                <label for="category">Product Category</label>
                                <input type="text" className="form-control" id="category" placeholder="Enter product category"
                                    onChange={(e) => {
                                        setCategory(e.target.value);
                                    }} />
                                {Object.keys(categoryErr).map((key) => {
                                    return <div style={{ color: "red" }}>{categoryErr[key]}</div>
                                })}
                            </div>

                            <div className="form-group">
                                <label for="description">Product Description</label>
                                <textarea className="form-control" id="description" rows="3" placeholder="Enter description"
                                    onChange={(e) => {
                                        setDescription(e.target.value);
                                    }}></textarea>
                                {Object.keys(descriptionErr).map((key) => {
                                    return <div style={{ color: "red" }}>{descriptionErr[key]}</div>
                                })}
                            </div>

                            <div className="form-group">
                                <label for="price">Product Price</label>
                                <input type="number" className="form-control" id="price" placeholder="Enter product price"
                                    onChange={(e) => {
                                        setPrice(e.target.value);
                                    }} />
                                {Object.keys(priceErr).map((key) => {
                                    return <div style={{ color: "red" }}>{priceErr[key]}</div>
                                })}
                            </div>

                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" required="true" />
                                <label className="form-check-label" for="exampleCheck1">I've Checked everything is correct</label>
                            </div>
                            <div className="flex-button">
                                {/*original bootstrap class name for button = btn btn-primary */}
                                <button type="submit" className="btn btn-outline-primary">Add Product</button>
                            </div>
                            <div className="flex-button2">
                                <button type="button" className="btn btn-outline-dark" onClick={() => gotoView()}>View All Products</button>
                            </div>
                        </form>
                    </div>
                </span>

            </div >
        </div >
    <Footer/>
        </div>
    )
}

export default AddProduct;
import React, { useState, useEffect } from "react";
import axios from "axios";
import abc from '../abc.jpg';

export default function AddCP() {

        const [name, setName] = useState("");
        const [HealthC, setHealthC] = useState("");
        const [WoutE, setWoutE] = useState("");
        const [Crtg, setCrtg] = useState("");
        const [Wtg, setWtg] = useState("");
        const [BMI, setBMI] = useState("");
        const [Dieting, setDieting] = useState("");

        const [nameError, setNameError] = useState({});
        const [BMIError, setBMIError] = useState({});
        const [HealthCError, setHealthCError] = useState({});
        const [WoutError, setWoutError] = useState({});
        const [CTError, setCTError] = useState({});
        const [WTError, setWTError] = useState({});
        const [DietingError, setDietingError] = useState({});


        function sendData(e) {
                e.preventDefault();
                // alert("Your client plan has been added succesfully!");
                const isValid = formValidation();

                if (isValid) {
                        const newCP = {
                                name, HealthC, WoutE, Crtg, Wtg, BMI, Dieting

                        }
                        axios.post("http://localhost:8070/clientplan/add", newCP).then(() => {
                                alert("Clientplan has succesfully added");
                        }).catch((err) => {
                                alert(err)
                        })

                }

                setName("");
                setHealthC("");
                setWoutE("");
                setCrtg("");
                setWtg("");
                setBMI("");
                setDieting("");
        }

        const formValidation = () => {
                const nameError = {};
                const BMIError = {};
                const HealthCError={};
                const  WoutError={};
                const CTError={};
                const WTError={};
                const DietingError={};

                let isValid = true;

                if (!name.trim() ) {
                        nameError.nameshort = "prefered name cannot be empty..";
                        isValid = false;
                }

                if (!BMI.trim()) {
                        BMIError.nameshort = "BMI value cannot be empty";
                        isValid = false;
                }

                if (!HealthC.trim()) {
                        HealthCError.nameshort = "Health  cannot be empty";
                        isValid = false;
                }

                if (!WoutE.trim()) {
                        WoutError.nameshort = "Workout exeperience cannot be empty";
                        isValid = false;
                }

                if (!Crtg.trim()) {
                        CTError.nameshort = "Circuit training cannot be empty";
                        isValid = false;
                }

                if (!Wtg.trim()) {
                        WTError.nameshort = "Weight training cannot be empty";
                        isValid = false;
                }

                if (!Dieting.trim()) {
                        DietingError.nameshort = "Dieting cannot be empty";
                        isValid = false;
                }



                setNameError(nameError);
                setHealthCError(HealthCError);
                setBMIError(BMIError);
                setWoutError(WoutError);
                setCTError(CTError);
                setWTError(WTError);
                setDietingError(DietingError);

                return isValid;
        }


        return (

                <div class="container" style={{ backgroundImage: `url(${abc})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '1000px' }}>


                        <form onSubmit={sendData}>
                                <div class="form-group" class="container">
                                        <label for="PreferedName" > <h4> Prefered Name </h4> </label>
                                        <input type="text" class="form-control" id="name" placeholder="Enter the prefered name of the client" onChange={(e) => {
                                                setName(e.target.value);
                                        }} />

                                        {Object.keys(nameError).map((key) => {
                                                return <div style={{ color: "red" }}> {nameError[key]} </div>
                                        })}


                                </div>

                                <div class="form-group" class="container">
                                        <label for="Age"> <h4> Health Condition </h4> </label>
                                        <input type="text" class="form-control" id="HealthC" placeholder="Enter the health condition of the client" onChange={(e) => {
                                                setHealthC(e.target.value);
                                        }} />
                                </div>
                                {Object.keys(HealthCError).map((key) => {
                                        return <div style={{ color: "red" }}> {HealthCError[key]} </div>
                                })}
                                <div class="form-group" class="container">
                                        <label for="Age"> <h4> Workout Experience </h4> </label>
                                        <input type="text" class="form-control" id="WoutE" placeholder="Enter the workout experience of the client" onChange={(e) => {
                                                setWoutE(e.target.value);
                                        }} />
                                </div>
                                {Object.keys(WoutError).map((key) => {
                                        return <div style={{ color: "red" }}> {WoutError[key]} </div>
                                })}
                                <div class="form-group" class="container">
                                        <label for="Age"> <h4> Circuit Training </h4></label>
                                        <input type="text" class="form-control" id="Crtg" placeholder="Enter the specific trainings" onChange={(e) => {
                                                setCrtg(e.target.value);
                                        }} />
                                </div>
                                {Object.keys(CTError).map((key) => {
                                        return <div style={{ color: "red" }}> {CTError[key]} </div>
                                })}
                                <div class="form-group" class="container">
                                        <label for="Age"> <h4> Weight Training </h4> </label>
                                        <input type="text" class="form-control" id="Wtg" placeholder="Enter the specific trainings" onChange={(e) => {
                                                setWtg(e.target.value);
                                        }} />
                                </div>
                                {Object.keys(WTError).map((key) => {
                                        return <div style={{ color: "red" }}> {WTError[key]} </div>
                                })}
                                <div class="form-group" class="container">
                                        <label for="Age"> <h4> BMI Value </h4> </label>
                                        <input type="number" class="form-control" id="BMI" placeholder="Enter the BMI value of the client" onChange={(e) => {
                                                setBMI(e.target.value);
                                        }} />
                                </div>
                                {Object.keys(BMIError).map((key) => {
                                        return <div style={{ color: "red" }}> {BMIError[key]} </div>
                                })}

                                <div class="form-group" class="container">
                                        <label for="Age"> <h4> Diet Plan </h4> </label>
                                        <input type="text" class="form-control" id="Dieting" placeholder="Enter a suitable diet plan" onChange={(e) => {
                                                setDieting(e.target.value);
                                        }} />
                                </div>
                                {Object.keys(DietingError).map((key) => {
                                        return <div style={{ color: "red" }}> {DietingError[key]} </div>
                                })}
                                <div class="container" >
                                        <br></br>
                                        <button type="submit" class="btn btn-dark btn-lg btn-block" > Create the plan! </button> <br />
                                        <a href="http://localhost:3000/" class="btn btn-info" role="button" class="btn btn-dark btn-lg btn-block "> Home </a>
                                </div>
                        </form>

                </div>

        )


}


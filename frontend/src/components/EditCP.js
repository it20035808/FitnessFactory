import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Swal from "sweetalert2";

export default function EditProduct(props) {

    const [WList, setWList] = useState([]);

    const [WData, setData] = useState({
        
        WoutE: "",
        


    })


    useEffect(() => {
        const id = props.match.params.id
        axios.get('http://localhost:8070/clientplan/' + id).then((res) => {
            setWList(res.data)
        }).catch((err) => {
            // Swal.fire({
            //     title: err,
            //     icon: 'error'
            // })
        })
    })

    const history = useHistory();

    function updateProduct(e) {
        e.preventDefault();

        const id = props.match.params.id
        axios.put('http://localhost:8070/clientplan/update/' + id, WData).then((then) => {
            Swal.fire({
                title: "Updated Successfully",
                icon: 'success'
            });
            history.push("/read");
        }).catch((err) => {
            Swal.fire({
                title: err,
                icon: 'error'
            })
        })
    }

    function handle(e) {
        const newdata = { ...WData }
        newdata[e.target.id] = e.target.value;
        setData(newdata)
    }


    return (

       
        <div className="container">
            <span className="border">
                <div className="shadow p-3 mb-5 bg-white rounded">
                    <form onSubmit={updateProduct}>
                    <h2> Update Workout Schedule </h2>
                        <div class="form-group">
                            <label for="name"> New Workout Schedule</label>
                            <input type="text" className="form-control" id="WoutE" placeholder="Enter workouts u want to change"
                                value={WData.WoutE}
                                onChange={(e) => {
                                    handle(e);
                                }} />
                        </div>

                        <button type="submit" className="btn btn-primary">Update the schedule</button>
                    </form>
                </div>
            </span>

        </div>
    )

}
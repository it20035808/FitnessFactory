import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export default function ReadCP() {

    useEffect(() => {
        axios.get('http://localhost:8070/clientplan/').then((response) => {
            setCPList(response.data)
        })

    }, [])

    const [CPList, setCPList] = useState([]);

    const deleteCP = (id) => {
        axios.delete(`http://localhost:8070/clientplan/delete/${id}`).then((then => {
            alert("Deleted succesfuly!");
        }))
    };

    const history = useHistory();
    const routeChange = (id) => {

        console.log(id);
        let path = `/update/${id}`;
        history.push(path)
    }

    return (<div class="container" >

        <h2 class="display-3" > Plans of Clients  </h2>

        <div class="input-group rounded">
            <input type="search" class="form-control rounded" placeholder="Enter Client's prefered name for their Plan" aria-label="Search"
                aria-describedby="search-addon" />
            <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
            </span>
        </div> <br />
        {CPList.map((val, key) => {

            return <div>
                <table class="table table-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Prefered Name</th>
                            <th scope="col">Health Condition</th>
                            <th scope="col">Workout Schedule </th>
                            <th scope="col">Circuit Training </th>
                            <th scope="col">Weight Training </th>
                            <th scope="col"> BMI </th>
                            <th scope="col"> Diet Plan </th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>{val.name} <br /> <br /> <a type="button" class="btn btn-danger" onClick={() => deleteCP(val._id)} > Delete Plan </a> <br /> <br />
                                <a href="http://localhost:3000/update/" type="button" class="btn btn-success" onClick={() => routeChange(val._id)}  > Edit Plan </a> </td>
                            <td>{val.HealthC} </td>
                            <td>{val.WoutE}  </td>
                            <td>{val.Crtg} </td>
                            <td>{val.Wtg} </td>
                            <td>{val.BMI}</td>
                            <td>{val.Dieting}</td>

                            <td>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        })}

        <a href="http://localhost:3000/" class="btn btn-info" role="button" class="btn btn-dark btn-lg btn-block "> Home </a>
    </div>
    )
}


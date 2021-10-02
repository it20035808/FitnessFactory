import React, { Component } from "react";
import axios from 'axios';

export default class ProgreportDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            progreport:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/progreport/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    progreport:res.data.progreport
                });

                console.log(this.state.progreport);
            }
        });
      }

    render() {
        const {instructorID,HoursInMonth,HoursWorkedInMonth} = this.state.progreport;

        return (

            <div class="bg-image" style={{backgroundImage: "url(https://t3.ftcdn.net/jpg/01/05/43/72/240_F_105437217_a0KzcjKOXejFmbGuTeaREl1Q9SmqvAhL.jpg)" , height: "100vh"  }}>
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.6)"}}>
                    <div class="d-flex justify-content-center align-items-center h-100">

                        <div style={{marginTop:'20px', marginRight:'-300px'}}>
                            <h2 style={{color:'#6A71E1'}}> Instructor ID = {instructorID} &nbsp; Progress Report Details In This Month</h2> 
                            <hr/><br/> <br/>

                            <dl className="row">  
                                <dt className="col-sm-6"> <h3> Hours In Month  </h3> </dt>
                                <dd className="col-sm-3"> <h3> = &nbsp; {HoursInMonth} </h3> </dd>

                                <dt className="col-sm-6"> <h3> Hours Worked In Month &nbsp;  </h3> </dt>
                                <dd className="col-sm-3"> <h3> = &nbsp; {HoursWorkedInMonth} </h3> </dd>
                                
                                <dt className="col-sm-6"> <h3> Hours Remaining To Work In Month &nbsp;  </h3> </dt>
                                <dd className="col-sm-3"> <h3> = &nbsp; {HoursInMonth - HoursWorkedInMonth} </h3> </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
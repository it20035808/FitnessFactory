import React, { Component } from "react";
import axios from 'axios';
import NavBar from "./NavBar";
import Footer from "./Footer";

export default class ScheduleDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            schedule:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/schedules/schedule/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    schedule:res.data.schedule
                });

                console.log(this.state.schedule);
            }
        });
      }

    render() {

        const {instructorID,days,startTime,endTime} = this.state.schedule;

        return (
            <div>
                <NavBar/>
                <div class="bg-image" style={{backgroundImage: "url(https://t3.ftcdn.net/jpg/02/01/90/08/240_F_201900817_3yWVYkJEV9y4r7y51x2N5okERbhi3cqx.jpg)" , height: "100vh"  }}>
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.6)"}}>
                    <div class="d-flex justify-content-center align-items-center h-100">


                        <div style={{marginTop:'30px', marginRight:'-380px'}}>
                            <h2 style={{color:'#6A71E1'}}> Instructor ID = {instructorID} &nbsp; Schedule Details</h2> 
                            <hr/>

                            <dl className="row">  
                                <dt className="col-sm-3"> <h3>Days &nbsp; </h3> </dt>
                                <dd className="col-sm-9"> <h3> = &nbsp; &nbsp; {days} </h3> </dd>

                                <dt className="col-sm-3"> <h3> Start Time &nbsp; </h3> </dt>
                                <dd className="col-sm-9"> <h3> = &nbsp; &nbsp; {startTime} </h3> </dd>

                                <dt className="col-sm-3"> <h3> End Time &nbsp; </h3> </dt>
                                <dd className="col-sm-9"> <h3> = &nbsp; &nbsp; {endTime} </h3> </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
                <Footer/>
            </div>
        )
    }
}
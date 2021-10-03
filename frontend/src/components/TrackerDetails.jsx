import React, { Component } from 'react';
import axios from 'axios';
import workout4 from '../images/workout4.jpg';
import NavBar from "./NavBar";
import Footer from "./Footer";

export default class ProgressDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            tracker:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/tracker/tracker/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    tracker:res.data.tracker
                }); 

                console.log(this.state.tracker);
            }

        });

    }

    render() {
        const {clientID,eventID,sessionsCompleted,calories} = this.state.tracker;

        return (
            <div>
                <NavBar/>
                <div style={{marginTop:'5px', backgroundImage: `url(${workout4})`,  backgroundPosition:'cover', backgroundSize:'cover' , width:'100%', height:'600px'}}>
            <h1><b>Progress Tracker</b></h1>
            <hr/>

            <dl className="row">

                <dt className="col-sm-3"  ><h3><b>Client ID</b></h3></dt>
                <dd className="col-sm-9" ><h3>{clientID}</h3><br/></dd>

                <dt className="col-sm-3" ><h3><b>Event ID</b></h3></dt>
                <dd className="col-sm-9"><h3>{eventID}</h3><br/></dd>

                <dt className="col-sm-3"><h3><b>Sessions Completed</b>&nbsp;&nbsp;&nbsp;</h3></dt>
                <dd className="col-sm-9"><h3>{sessionsCompleted}</h3><br/></dd>

                <dt className="col-sm-3"><h3><b>Calories Burnt</b></h3></dt>
                <dd className="col-sm-9"><h3>{sessionsCompleted*calories}</h3><br/></dd>
                
            </dl>  
            </div>
                <Footer/>
            </div>
        )
        
    }
}

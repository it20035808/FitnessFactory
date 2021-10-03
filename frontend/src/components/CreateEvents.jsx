import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router'; 
import workout3 from '../images/workout3.jpg';
import NavBar from "./NavBar";
import Footer from "./Footer";

export default class CreatePost extends Component {

    constructor(props){
        super(props);
        this.state={
            event:"",
            description:"",
            eventCategory:"",
            calories:""
        }
    }

  
    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value

        })
    }


    onSubmit = (e) =>{

        e.preventDefault();

        const {event,description,eventCategory,calories} = this.state;

        const data ={
            
            event:event,
            description:description,
            eventCategory:eventCategory,
            calories:calories
        }

        console.log(data)

        axios.post("http://localhost:8070/events/post/save",data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {
                        
                        event:"",
                        description:"",
                        eventCategory:"",
                        calories:""

                    }
                )
            }
        })

        alert("New Event Created");
        this.setState({ redirect: "/events" });

    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
        return (
            <div>
                <NavBar/>
                <div style={{ backgroundImage: `url(${workout3})`,  backgroundPosition:'center', backgroundSize:'cover' , width:'100%', height:'570px'}}>
                <h1 className="container">Create New Event</h1>
                <form onSubmit = {this.onSubmit}>

                    <div className="container" style={{marginBottom:'2px'}}>
                        <label style={{marginBottom:'2px'}}><h6><b>Event</b></h6></label>
                        <input type="text"
                        className="form-control"
                        name="event"
                        placeholder="Enter Event"
                        value={this.state.event}
                        onChange={this.handleInputChange}
                        required/>
                    </div>

                    <div className="container" style={{marginBottom:'2px'}}>
                        <label style={{marginBottom:'2px'}}><h6><b>Description</b></h6></label>
                        <input type="text"
                        className="form-control"
                        name="description"
                        placeholder="Enter Description"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        required/>
                    </div>

                    <div className="container" style={{marginBottom:'1px'}}>
                        <label style={{marginBottom:'1px'}}><h6><b>Event Category</b></h6></label>
                        <input type="text"
                        className="form-control"
                        name="eventCategory"
                        placeholder="Enter Event Category"
                        value={this.state.eventCategory}
                        onChange={this.handleInputChange}
                        required/>
                    </div>

                    <div className="container" style={{marginBottom:'1px'}}>
                        <label style={{marginBottom:'1px'}}><h6><b>Calories</b></h6></label>
                        <input type="text"
                        className="form-control"
                        name="calories"
                        placeholder="Enter Calories Burnt Per Session"
                        value={this.state.calories}
                        onChange={this.handleInputChange}
                        required/>
                    </div>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                    <button className="btn btn-success" type="submit" style={{marginTop:'40px'}}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>

                </form>
            
            </div>
                <Footer/>
            </div>
        );
    }
}

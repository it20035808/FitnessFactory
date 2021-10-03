import React, { Component } from 'react';
import axios from 'axios';
import workout6 from '../images/workout6.jpg';
import NavBar from "./NavBar";
import Footer from "./Footer";

export default class PostDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/events/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                }); 

                console.log(this.state.post);
            }

        });

    }

    render() {
        const {eventID,event,description,eventCategory,calories} = this.state.post;

        return (
            <div>
                <NavBar/>
                    <div style={{marginTop:'20px', backgroundImage: `url(${workout6})`,  backgroundPosition:'center', backgroundSize:'cover' , width:'100%', height:'570px'}}>
                    <h1><b>{event}</b></h1><br/>
                    <hr/>

                    <dl className="row">

                        <dt className="col-sm-3"><h3><b>Event ID</b></h3></dt>
                        <dd className="col-sm-9"><h3>{eventID}</h3><br/></dd>
                    
                        <dt className="col-sm-3"><h3><b>Description</b></h3></dt>
                        <dd className="col-sm-9"><h3>{description}</h3><br/></dd>

                        <dt className="col-sm-3"><h3><b>Event Category</b></h3></dt>
                        <dd className="col-sm-9"><h3>{eventCategory}</h3><br/></dd>

                        <dt className="col-sm-3"><h3><b>Calories</b></h3></dt>
                        <dd className="col-sm-9"><h3>{calories}</h3><br/></dd>
                        
                    </dl>  
                    </div>
                <Footer/>
            </div>
        )
        
    }
}

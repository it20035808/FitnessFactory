//Create home component
import React, { Component, useEffect, useState } from "react";
import axios from "axios";

//import components
import NavBar from "./NavBar";
import Footer from "./Footer";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import '../styles/ManageUsers.css';

export default class ManageUsers extends Component{
  constructor(props){
    super(props);

    this.state={
      users:[]
    };

    //this.handleUserUpdate = this.handleUserUpdate.bind(this);
  }

  componentDidMount(){
    const id = this.props.match.id;

    
  }

  render(){
    return(
      <div>
        <NavBar />
        <h4>User Accounts Management</h4>

        
        <Footer />
      </div>
    )
  }

}


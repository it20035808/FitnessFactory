import React, {Component} from "react";
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div> 
                <nav className="navbar navbar-expand-lg navbar-warningr" style={{backgroundColor:'#D5FFA2'}}>
                    <div className="container-fluid">
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                    <Link to="/" className="nav-link active"> <i class="fas fa-home"></i>      <b> Home </b> </Link>  
                                </li> &nbsp; &nbsp; &nbsp; &nbsp;
                                <li className="nav-item">
                                    <Link to="/homeschedule" className="nav-link active"> <i class="far fa-calendar-alt"></i> <b> Instructor Schedules </b> </Link>  
                                </li> &nbsp; &nbsp; &nbsp;
                                <li className="nav-item">
                                    <Link to="/homeprogreport" className="nav-link active"> <i class="fas fa-file-contract"></i> <b> Progress Reports </b> </Link> 
                                </li>
                            </ul> 
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
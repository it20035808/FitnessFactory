import React, { Component } from "react";
import {BrowserRouter,Route} from 'react-router-dom';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CreateSchedule from "./components/CreateSchedule";
import EditSchedule from "./components/EditSchedule";
import ScheduleDetails from "./components/ScheduleDetails";
import HomeProgreport from "./components/HomeProgreport";
import CreateProgreport from "./components/CreateProgreport";
import EditProgreport from "./components/EditProgreport";
import ProgreportDetails from "./components/ProgreportDetails";
import Mainp from "./components/Mainp";


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container"> 
                    <NavBar/>
                    <Route path="/homeschedule" exact component={Home}></Route>
                    <Route path="/add"  component={CreateSchedule}></Route>
                    <Route path="/edit/:id"  component={EditSchedule}></Route>
                    <Route path="/schedule/:id"  component={ScheduleDetails}></Route>
                    <Route path="/homeprogreport" exact component={HomeProgreport}></Route>
                    <Route path="/addprogreport" exact component={CreateProgreport}></Route>
                    <Route path="/editprogreport/:id" exact component={EditProgreport}></Route>
                    <Route path="/progreport/:id"  component={ProgreportDetails}></Route>
                    <Route path="" exact component={Mainp}></Route>
                </div>
            </BrowserRouter>
        )
    }
}
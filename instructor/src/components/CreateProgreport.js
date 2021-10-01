import React, {Component} from "react";
import axios from 'axios'

export default class CreateProgreport extends Component {

    constructor(props){
        super(props);
        this.state={
            instructorID:"",
            HoursInMonth:"",
            HoursWorkedInMonth:""
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

    const {instructorID,HoursInMonth,HoursWorkedInMonth} = this.state;

    const data = {
        instructorID:instructorID,
        HoursInMonth:HoursInMonth,
        HoursWorkedInMonth:HoursWorkedInMonth
    }

    console.log(data);

    axios.post("/progreport/save", data).then((res) =>{
        if(res.data.success){
            alert("Instructor Progress Report Created successfully!");
            this.setState(
                 {
                    instructorID:"",
                    HoursInMonth:"",
                    HoursWorkedInMonth:""
                 }
            )
        }
    })
}

    render() {
        return(

            <div class="bg-image" style={{backgroundImage: "url(https://t4.ftcdn.net/jpg/02/86/16/49/240_F_286164920_T1pKxYbmrjGVqbA8mNkHQRjOWybk0wUK.jpg)" , height: "100vh"  }}>
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.6)"}}>
                    <div class="d-flex justify-content-center align-items-center h-100">



                        <div className="container">
    
                            <h2> Create New Instructor Progress Report </h2>
                            <br/> <br/>
    
                            <form onSubmit = {this.onSubmit}>
                                <div className="row mb-3">
                                    <label for="instructorid" className="col-sm-2 col-form-label"> <h6> Instructor ID </h6> </label>
                                    <div className="col-sm-10">
                                        <input type="instructorID" name="instructorID" className="form-control" id="instructorid" placeholder="Enter instructor ID"
                                            value={this.state.instructorID}  onChange={this.handleInputChange} required/>
                                    </div>
                                </div> <br/>
                
                                <div className="row mb-3">
                                    <label for="HoursInMonth" className="col-sm-2 col-form-label"> <h6> Hours In Month </h6> </label>
                                    <div className="col-sm-10">
                                        <input type="HoursInMonth" name="HoursInMonth" className="form-control" id="HoursInMonth" placeholder="Enter Hours In Month"
                                            value={this.state.HoursInMonth}  onChange={this.handleInputChange} required/>
                                    </div>
                                </div> <br/><br/>
    
                                <div className="row mb-3">
                                    <label for="HoursWorkedInMonth" className="col-sm-2 col-form-label"> <h6> Hours Worked In Month </h6> </label>
                                    <div className="col-sm-10">
                                        <input type="HoursWorkedInMonth" name="HoursWorkedInMonth" className="form-control" id="HoursWorkedInMonth" placeholder="Enter Hours Worked In Month"
                                            value={this.state.HoursWorkedInMonth}  onChange={this.handleInputChange} required/>
                                    </div>
                                </div> <br/> 

                                <button type="submit" className="btn btn-success" style={{marginTop:'15px'}} >
                                    <i className="far fa-check-square"></i>
                                    &nbsp; Create Instructor Progress Report
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
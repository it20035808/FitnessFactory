import React, {Component} from "react";
import axios from 'axios'

export default class CreateSchedule extends Component {

    constructor(props){
        super(props);
        this.state={
            instructorID:"",
            days:"",
            startTime:"",
            endTime:""
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

    const {instructorID,days,startTime,endTime} = this.state;

    const data = {
        instructorID:instructorID,
        days:days,
        startTime:startTime,
        endTime:endTime
    }

    console.log(data);

    axios.post("/schedule/save", data).then((res) =>{
        if(res.data.success){
            alert("Instructor Schedule Created successfully!");
            this.setState(
                {
                     instructorID:"",
                    days:"",
                    startTime:"",
                    endTime:""
                 }
            )
        }
    })
}

    render() {
        return(

            <div class="bg-image" style={{backgroundImage: "url(https://t4.ftcdn.net/jpg/02/08/13/53/240_F_208135384_P3gpf2RVbAMvTcYo5LGK9gq98PZLNfcc.jpg)" , height: "100vh"  }}>
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.6)"}}>
                    <div class="d-flex justify-content-center align-items-center h-100">


                        <div className="container">
                            <br/>
                            <h2> Create New Instructor Schedule </h2>
                            <br/> <br/>
    
                            <form className="needs-validation" noValidate>
                                <div className="row mb-3">
                                    <label for="instructorid" className="col-sm-2 col-form-label"><h6> Instructor ID </h6> </label>
                                    <div className="col-sm-10">
                                        <input type="instructorID" name="instructorID" className="form-control" id="instructorid" placeholder="Enter instructor ID"
                                            value={this.state.instructorID}  onChange={this.handleInputChange}/>
                                    </div>
                                </div> <br/>
                
                                <div className="row mb-3">
                                    <label for="instructorid" className="col-sm-2 col-form-label"> <h6> Days </h6>  </label>
                                    <div className="col-sm-10">
                                        <div className="form-floating">
                                            <select name="days" className="form-select" style={{width: "500px" , height: "55px" }} id="floatingSelect" aria-label="Floating label select example"
                                                value={this.state.days}  onChange={this.handleInputChange}>
                                                <option selected> Select days </option>
                                                <option value="Weekday"> Weekday </option>
                                                <option value="Weekend"> Weekend </option>
                                            </select>
                                        </div>
                                    </div>
                                </div> <br/>
    
                                <div className="row mb-3">
                                    <label for="instructorid" className="col-sm-2 col-form-label"> <h6> Start Time </h6> </label>
                                    <div className="col-sm-10">
                                        <div className="form-floating">
                                            <select name="startTime" className="form-select" style={{width: "500px" , height: "55px" }} id="floatingSelect" aria-label="Floating label select example"
                                                value={this.state.startTime}  onChange={this.handleInputChange}>
                                                <option selected> Select Start time </option>
                                                <option value="06.00 a.m"> 06.00 a.m. </option>
                                                <option value="10.00 a.m."> 10.00 a.m. </option>
                                                <option value="02.00 p.m."> 02.00 p.m. </option>
                                                <option value="06.00 p.m."> 06.00 p.m. </option>
                                            </select>
                                        </div>
                                    </div>
                                </div> <br/>
    
                                <div className="row mb-3">
                                    <label for="instructorid" className="col-sm-2 col-form-label"> <h6> End Time </h6> </label>
                                    <div className="col-sm-10">
                                        <div className="form-floating">
                                            <select name="endTime" className="form-select" style={{width: "500px" , height: "55px" }} id="floatingSelect" aria-label="Floating label select example"
                                                value={this.state.endTime}  onChange={this.handleInputChange}>
                                                <option selected> Select End time </option>
                                                <option value="10.00 a.m."> 10.00 a.m. </option>
                                                <option value="02.00 p.m."> 02.00 p.m. </option>
                                                <option value="06.00 p.m."> 06.00 p.m. </option>
                                                <option value="10.00 p.m."> 10.00 p.m. </option>
                                            </select>
                                        </div>
                                    </div>
                                </div> 

                                <button type="submit" className="btn btn-success" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                                    <i className="far fa-check-square"></i> 
                                    &nbsp; Create New Schedule 
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
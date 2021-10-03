import React, {Component} from "react";
import axios from 'axios'
import NavBar from "./NavBar";
import Footer from "./Footer";

export default class EditSchedule extends Component {

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

    const id = this.props.match.params.id;

    const {instructorID,days,startTime,endTime} = this.state;

    const data = {
        instructorID:instructorID,
        days:days,
        startTime:startTime,
        endTime:endTime
    }

    console.log(data);

    axios.put(`http://localhost:8070/schedules/schedule/update/${id}`, data).then((res) =>{
        if(res.data.success){
            alert("Instructor Schedule Updated Successfully!")
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

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/schedules/schedule/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    instructorID:res.data.schedule.instructorID,
                    days:res.data.schedule.days,
                    startTime:res.data.schedule.startTime,
                    endTime:res.data.schedule.endTime
                });

                console.log(this.state.schedule);
            }
        });
      }

    render() {
        return(
            <div>
                <NavBar/>
                <div class="bg-image" style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZMH0ZL1gkajw-ZbTKckCs8DjnHHCV1sqXQF5sPL_YucOoPS32oRmYWRz-0DZNudB9UU&usqp=CAU)" , height: "100vh"  }}>
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.6)"}}>
                    <div class="d-flex justify-content-center align-items-center h-100">


                        <div className="container">
    
                            <h2> Edit Instructor Shedule </h2>
                            <br/> <br/>
    
                            <form className="needs-validtion" noValidate>
                                <div className="row mb-3">
                                    <label for="instructorid" className="col-sm-2 col-form-label"> <h6> Instructor ID </h6> </label>
                                    <div className="col-sm-10">
                                        <input type="instructorID" name="instructorID" className="form-control" id="instructorid" placeholder="Enter instructor ID"
                                            value={this.state.instructorID}  onChange={this.handleInputChange}/>
                                    </div>
                                </div> <br/>
                
                                <div className="row mb-3">
                                    <label for="instructorid" className="col-sm-2 col-form-label"> <h6> Days </h6> </label>
                                    <div className="col-sm-10">
                                        <div className="form-floating">
                                            <select name="days" className="form-select" style={{width: "500px" , height: "55px" }} id="floatingSelect" aria-label="Floating label select example"
                                                value={this.state.days}  onChange={this.handleInputChange}>
                                                <option selected>  Select days </option>
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
                                </div> <br/>

                                <button type="submit" className="btn btn-success" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                                    <i className="far fa-check-square"></i> 
                                    &nbsp; Update Schedule 
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                <Footer/>
            </div>
        )
    }
}
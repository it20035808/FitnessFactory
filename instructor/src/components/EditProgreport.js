import React, {Component} from "react";
import axios from 'axios'

export default class EditProgreport extends Component {

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

    const id = this.props.match.params.id;

    const {instructorID,HoursInMonth,HoursWorkedInMonth} = this.state;

    const data = {
        instructorID:instructorID,
        HoursInMonth:HoursInMonth,
        HoursWorkedInMonth:HoursWorkedInMonth
    }

    console.log(data);

    axios.put(`/progreport/update/${id}`, data).then((res) =>{
        if(res.data.success){
            alert("Instructor Progress Report Updated Successfully!")
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

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/progreport/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    instructorID:res.data.progreport.instructorID,
                    HoursInMonth:res.data.progreport.HoursInMonth,
                    HoursWorkedInMonth:res.data.progreport.HoursWorkedInMonth
                });

                console.log(this.state.progreport);
            }
        });
      }

      render() {
        return(

            <div class="bg-image" style={{backgroundImage: "url(https://t3.ftcdn.net/jpg/03/01/43/50/240_F_301435090_8cGEHRpP5Ttb4Dsufi6qYF5TXfCoMnuL.jpg)" , height: "100vh"  }}>
                 <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.6)"}}>
                    <div class="d-flex justify-content-center align-items-center h-100">


                        <div className="container">
    
                            <h2> Edit Instructor Progress Report</h2>
                            <br/> <br/>
    
                            <form className="needs-validation" noValidate>
                                <div className="row mb-3">
                                    <label for="instructorid" className="col-sm-3 col-form-label"> <h6> Instructor ID </h6> </label>
                                    <div className="col-sm-8">
                                        <input type="instructorID" name="instructorID" className="form-control" id="instructorid" placeholder="Enter instructor ID"
                                            value={this.state.instructorID}  onChange={this.handleInputChange}/>
                                    </div>
                                </div> <br/>
                
                                <div className="row mb-3">
                                    <label for="HoursInMonth" className="col-sm-3 col-form-label"> <h6> Hours In Month </h6> </label>
                                    <div className="col-sm-8">
                                        <input type="HoursInMonth" name="HoursInMonth" className="form-control" id="HoursInMonth" placeholder="Enter hours in month"
                                            value={this.state.HoursInMonth}  onChange={this.handleInputChange}/>
                                    </div>
                                </div> <br/><br/>
    
                                <div className="row mb-3">
                                    <label for="HoursWorkedInMonth" className="col-sm-3 col-form-label"><h6> Hours Worked In Month </h6> </label>
                                    <div className="col-sm-8">  
                                        <input type="HoursWorkedInMonth" name="HoursWorkedInMonth" className="form-control" id="HoursWorkedInMonth" placeholder="Enter hours worked on month"
                                            value={this.state.HoursWorkedInMonth}  onChange={this.handleInputChange}/>
                                    </div>
                                </div> <br/> 
    
                                <button type="submit" className="btn btn-success" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                                    <i className="far fa-check-square"></i> 
                                    &nbsp; Update Progress Report
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
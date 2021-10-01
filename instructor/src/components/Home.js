import React , { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
constructor(props){
  super(props);

  this.state ={
    schedules:[]
  };
}  

componentDidMount(){
  this.retrieveSchedules();
}

retrieveSchedules(){
  axios.get("/schedules").then(res =>{
    if(res.data.success){
      this.setState({
        schedules:res.data.existingSchedules    
      });

      console.log(this.state.schedules)
    }
  });
}

onDelete = (id) =>{
  axios.delete(`/schedule/delete/${id}`).then((res) =>{
    alert("Deleted Successfully!")
    this.retrieveSchedules();
  })
}

filterData(schedules,searchKey){
  const result = schedules.filter((schedule) =>
  schedule.instructorID.toString().includes(searchKey)||
  schedule.days.toLowerCase().includes(searchKey.toLocaleLowerCase())||
  schedule.startTime.toLowerCase().includes(searchKey.toLocaleLowerCase())||
  schedule.endTime.toLowerCase().includes(searchKey.toLocaleLowerCase())
  )

  this.setState({schedules:result})

}

handleSearchArea = (e) =>{
  const searchKey= e.currentTarget.value;

  axios.get("/schedules").then(res =>{
    if(res.data.success){
      
      this.filterData(res.data.existingSchedules,searchKey)
    }
  });
}

  render() {
    return (
      <div className="bg-image" style={{backgroundImage: "url(http://www.transparentfit.com/images/woman-splash.jpg)" , height: "100vh"  }}>
        <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.6)"}}>
          <div className="d-flex justify-content-center align-items-center h-100">
      
    
            <div className="container">
              <div className="row"> 
                <div className="col-lg-9 mt-2 mb-2"> 
                  <h4 style={{color:'#56AE8E'}}>All Instructor Schedules</h4>
                </div>
              <div className="col-lg-3 mt-2 mb-2"> 
                <input
                  className="form-control"
                  type="search"
                  placeholder="Type To Search Schedules"
                  name="searchQuery"
                  onChange={this.handleSearchArea}>
                </input>
              </div>
            </div>
    
            <table className="table table-hover " style={{marginTop:'40px'}}>
              <thead style={{color:'#A60E8D'}}>
                <tr>
                  <th scope="col"> <h5> <center> Instructor ID </center></h5> </th>
                  <th scope="col"> <h5> <center> Days </center> </h5> </th>
                  <th scope="col"> <h5> <center> Start Time </center></h5> </th>
                  <th scope="col"> <h5> <center> End Time </center></h5> </th>
                  <th scope="col"> <h5> <center> Action </center></h5> </th>
                </tr>
              </thead>
              <tbody>
                {this.state.schedules.map((schedules,index) => (
                <tr key={index}>
                  <td> 
                      <a href={`/schedule/${schedules._id}`} style={{textDecoration:'none'}}>
                        <h6> <center> {schedules.instructorID} </center> </h6>
                      </a>    
                  </td> 
                  <td> <h6> <center> {schedules.days} </center> </h6> </td>
                  <td> <h6> <center> {schedules.startTime} </center> </h6> </td>
                  <td> <h6> <center> {schedules.endTime} </center> </h6> </td>
                  <td> 
                    <center> 
                      <a className="btn btn-warning" href={`/edit/${schedules._id}`}>
                        <i className="fas fa-edit"></i>&nbsp; &nbsp;Edit
                      </a> 
                      &nbsp; &nbsp; &nbsp;
                      <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(schedules._id)}>
                        <i className="far fa-trash-alt"></i>&nbsp; &nbsp; Delete
                      </a> 
                    </center>
                  </td>
                </tr>))}
              </tbody>
            </table>

            <button className="btn btn-success"> <a href="/add" style={{textDecoration:'none' , color:'white'}}> <i class="fas fa-plus-square"></i> &nbsp; Create New Schedule </a></button>
        
          </div>
        </div>
      </div>
    </div>
    )
  }
}
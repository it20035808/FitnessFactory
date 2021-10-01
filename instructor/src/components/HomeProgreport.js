import React , { Component } from 'react';
import axios from 'axios';

export default class HomeProgreport extends Component {
constructor(props){
  super(props);

  this.state ={
    progreports:[]
  };
}  

componentDidMount(){
  this.retrieveProgreports();
}

retrieveProgreports(){
  axios.get("/progreports").then(res =>{
    if(res.data.success){
      this.setState({
        progreports:res.data.existingProgreports    
      });

      console.log(this.state.progreports)
    }
  });
}

onDelete = (id) =>{
  axios.delete(`/progreport/delete/${id}`).then((res) =>{
    alert("Instructor Progress Report Deleted Successfully!")
    this.retrieveProgreports();
  })
}

filterData(progreports,searchKey){
  const result = progreports.filter((progreport) =>
  progreport.instructorID.toString().includes(searchKey)||
  progreport.HoursInMonth.toString().includes(searchKey)||
  progreport.HoursWorkedInMonth.toString().includes(searchKey)
  )

  this.setState({progreports:result})

}

handleSearchArea = (e) =>{
  const searchKey= e.currentTarget.value;

  axios.get("/progreports").then(res =>{
    if(res.data.success){
      
      this.filterData(res.data.existingProgreports,searchKey)
    }
  });
}

  render() {
    return (

      <div class="bg-image" style={{backgroundImage: "url(http://www.transparentfit.com/images/illustrated-woman.jpg)" , height: "100vh"  }}>
        <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.6)"}}>
          <div class="d-flex justify-content-center align-items-center h-100">


            <div className="container">
              <div className="row"> 
                <div className="col-lg-9 mt-2 mb-2"> 
                  <h4 style={{color:'#3679E1'}}>All Instructor Progress Reports </h4>
                </div>
                <div className="col-lg-3 mt-2 mb-2"> 
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search Progress Report"
                    name="searchQuery"
                    onChange={this.handleSearchArea}>
                  </input>
                </div>
              </div>
              <br/>

              <table className="table">
                <thead style={{color:'#A60E8D'}}>
                  <tr>
                    <th scope="col"> <h5> <center> Instructor ID </center></h5> </th>
                    <th scope="col"> <h5> <center> Hours In Month </center> </h5> </th>
                    <th scope="col"> <h5> <center> Hours Worked In Month </center> </h5> </th>
                    <th scope="col"> <h5> <center> Action </center> </h5> </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.progreports.map((progreports,index) => (
                  <tr key={index}>
                    <td> 
                      <a href={`/progreport/${progreports._id}`} style={{textDecoration:'none'}}>
                        <h6> <center> {progreports.instructorID} </center></h6> 
                      </a>    
                    </td>
                    <td> <h6> <center> {progreports.HoursInMonth} </center></h6> </td>
                    <td> <h6> <center> {progreports.HoursWorkedInMonth} </center></h6>  </td>
                    <td>  
                      <center>
                        <a className="btn btn-warning" href={`/editprogreport/${progreports._id}`}>
                          <i className="fas fa-edit"></i>&nbsp; &nbsp;Edit
                        </a> 
                        &nbsp; &nbsp; &nbsp;
                        <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(progreports._id)}>
                          <i className="far fa-trash-alt"></i>&nbsp; &nbsp; Delete
                        </a> 
                      </center>
                    </td>
                  </tr> ))}
                </tbody>
              </table>

              <button className="btn btn-success"> <a href="/addprogreport" style={{textDecoration:'none' , color:'white'}}> <i class="fas fa-plus-square"></i> &nbsp;  Create Progress Report </a></button>
            
            </div>
          </div>
        </div>
      </div>
    )
  }
}
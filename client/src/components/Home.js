import React, { Component } from 'react';
import axios from 'axios';
import workout1 from '../workout1.jpg';
import { Link } from 'react-router-dom';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


export default class Home extends Component {
constructor(props){
    super(props);

    this.state={
        posts:[]
        
    }; 
}

componentDidMount(){
    this.retrievePosts();
}


retrievePosts(){
    axios.get("/posts").then(res =>{
        if(res.data.success){
            this.setState({
                posts:res.data.existingPosts
            });

            console.log(this.state.posts)
        }

    });

}

onDelete = (id) =>{

    axios.delete(`/post/delete/${id}`).then((res) =>{

        alert("Event Deleted Successfully");
        this.retrievePosts();
    })
}

filterData(posts,searchKey){

const result = posts.filter((post) =>
    
    post.event.toLowerCase().includes(searchKey)||
    post.description.toLowerCase().includes(searchKey)||
    post.eventCategory.toLowerCase().includes(searchKey)||
    post.calories.toLowerCase().includes(searchKey)
)

this.setState({posts:result})

}

handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("/posts").then(res =>{
        if(res.data.success){
            
            this.filterData(res.data.existingPosts,searchKey)

        }

    });
}

    render() {
        return (
            <div style={{ backgroundImage: `url(${workout1})`,  backgroundPosition:'center', backgroundSize:'cover' , width:'100%', height:'600px'}}>
              <br/>
              <div className="container">
              <h3><b>All Events - {this.state.posts.length}</b></h3>

            <div className="input-group">
            <input 
            type="search" 
            className="form-control rounded" 
            placeholder="Please enter here to search..." 
            name="searchQuery"
            aria-label="Search" 
            aria-describedby="search-addon"
            style={{height:'40px', width:'30px'}}
            onChange={this.handleSearchArea} />

            
            </div>

            <br/>

              <table id= "Event" className="table">
                  <thead>
                    <tr>
                        
                        <th scope="col"><h5><center><b>Event ID</b></center></h5></th>
                        <th scope="col"><h5><center><b>Event</b></center></h5></th>
                        <th scope="col"><h5><center><b>Description</b></center></h5></th>
                        <th scope="col"><h5><b>Event Category</b></h5></th>
                        <th scope="col"><h5><center><b>Calories</b></center></h5></th>
                        <th scope="col"><h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Action</b></h5></th>
                    </tr> 
                </thead>

                <tbody>
                    {this.state.posts.map((posts,index) =>(
                        <tr key={index}>
                            
                            <td><h6><center>{posts.eventID}</center></h6></td> 
                            <td>
                                <Link to={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                                <h6><center>{posts.event}</center></h6>
                                </Link> 
                                </td> 
                            <td><h6><center>{posts.description}</center></h6></td> 
                            <td><h6><center>{posts.eventCategory}</center></h6></td>
                            <td><h6><center>{posts.calories}</center></h6></td>        
                            <td>
                                <Link className="btn btn-warning" to={`/edit/${posts._id}`}>
                                    <i className="fas fa-edit"></i>&nbsp;Edit
                                </Link>
                                &nbsp;&nbsp;&nbsp;
                                <Link className="btn btn-danger" to="#" onClick={() =>this.onDelete(posts._id)}>
                                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                                </Link>
                                &nbsp;
                                

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table> 

            <button className="btn btn-success"><Link to="/add" style={{textDecoration:'none',color:'white'}}>Create New Event</Link></button>

            &nbsp;&nbsp;&nbsp;&nbsp;
            <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn btn-primary"
                    table="Event"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as Excel file"/>
        </div>

        </div>
        )         
    }   
}

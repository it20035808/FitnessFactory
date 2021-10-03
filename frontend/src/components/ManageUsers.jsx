//Create home component
import React, { Component} from "react";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

//import components
import NavBar from "./NavBar";
import Footer from "./Footer";
import Form from 'react-bootstrap/Form';
//import Container from 'react-bootstrap/Container';
import '../styles/ManageUsers.css';

export default class ManageUsers extends Component{
  constructor(props){
    super(props);

    this.state={
      posts:[],

      userUpdate: {
        newAccLevel: 0
      }
    };

    this.handleUserUpdate = this.handleUserUpdate.bind(this);
  }

  componentDidMount(){
    this.retrievePosts();
  }

  retrievePosts(){
    axios.get("http://localhost:8070/user/getUser").then(res => {
      if (res.data.success){
        this.setState({
          posts:res.data.existingUsers
        })
      }

      console.log(this.state.posts)
    })
  }


  onDelete = (_id) => {
    axios.delete(`http://localhost:8070/user/deleteUser/${_id}`).then((res)=>{
      this.retrievePosts();
    }).catch((err)=>{
      console.log(err)
      this.retrievePosts();
    })
  }

  handleUserUpdate = (e, id) => {

    this.setState({ userUpdate:{newAccLevel: e.target.value}}, ()=>{
      console.log("value: ", e.target.value);
      console.log("state: ", this.state.userUpdate.newAccLevel);
      console.log("id: ", id);

      axios.put(`http://localhost:8070/user/updateUserLevel/${id}`, {accLevel: this.state.userUpdate.newAccLevel}).then((res)=>{
        alert("user updated!");
        window.location.reload();
      }).catch((err)=>{
        console.log(err)
        })
      });

      //this.retrievePosts();
  }  

  filterData(posts, searchKey){
    const result = posts.filter((posts)=>
      posts.username.toLowerCase().includes(searchKey) ||
      posts.username.includes(searchKey) ||
      posts.accType.toLowerCase().includes(searchKey)
    )

    this.setState({posts: result})
  }

  handleSearch = (e) => {
    const searchKey = e.currentTarget.value;
    console.log( e.currentTarget.value)

    axios.get("http://localhost:8070/user/getUser").then(res => {
      if (res.data.success){
        this.filterData(res.data.existingUsers, searchKey)
      }
    });
  }

  goToAddUser = () => {
    window.location.href = "/createAccountPage";
  }



  render(){
    return(
      <div className='secondBody'>
        <NavBar />
        
        <div className='userManblock'>
            <h4>User Accounts Management</h4>


            <hr></hr>

            <div className='row'>
              <div className='col'>
                <div className='searchBar'>
                  <input
                    className='form-control'
                    type='search'
                    placeholder='search user'
                    onChange={this.handleSearch}
                  >

                    </input>
                </div>
              </div>

              <div className='col'>
                <button variant="primary" type="submit" className='btn1' onClick={this.goToAddUser}>
                  Add User 
                </button>
              </div>
            </div>

            <hr></hr>

            <table id="Users" className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Username</th>
                  <th scope="col">Type</th>
                  <th scope="col">Level</th>
                  <th scope="col">Remove User</th>
                </tr>
              </thead>
              <tbody>
                {this.state.posts.map((posts,index) =>(
                  <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{posts.username}</td>
                  <td>{posts.accType}&nbsp;&nbsp;</td>
                  <td>
                      <Form.Select className="accLevelForm"
                          name="accLevel"
                          aria-label="Default select example"
                          onChange={(e)=>this.handleUserUpdate(e, posts._id)}
                      >
                          <option value="null">{posts.accLevel}</option>
                          <option value="1">Level 1 (user)</option>
                          <option value="2">Level 2 (admin)</option>
                      </Form.Select>
                  </td>
      
                  <td>
                    <button className="btn btn-danger" onClick={()=>this.onDelete(posts._id)}>
                      Delete User
                    </button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>

            &nbsp;&nbsp;&nbsp;&nbsp;

                    <ReactHTMLTableToExcel

                            id="test-table-xls-button"

                            className="btn btn-primary"

                            table="Users"

                            filename="tablexls"

                            sheet="tablexls"

                            buttonText="Download as Excel file"/>

        </div>
        
        <Footer />
      </div>
    )
  }

}


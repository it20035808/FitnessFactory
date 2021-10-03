import React, {Component} from 'react';
import Moment from 'moment';
import axios from 'axios';
import { Link } from 'react-router-dom'
import NavBar from "./NavBar";
import Footer from "./Footer";


export default class PaymentDetails extends Component{

    constructor(props){
        super(props);

        this.state={
            expense:{}
        };

    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/expense/expense/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    expense:res.data.expense
                });

                console.log(this.state.expense);
            }

        });

    }



    render(){

        const {ExpenseID,expenseType,expenseDate,expenseDescription,expenseAmount}=this.state.expense;

        return(
            <div>
            <NavBar/>
            <div style={{marginTop:'20px'}} className="container">
                <h4  style={{color:'#6fff00'}}>Expense Record</h4> 
                <hr style={{color:'#00ff6a'}}/>
            <div className="transbox1">   
            <dl className="row">

                <dt className="col-sm-3" style={{color:'#00ff6a'}}>&nbsp;&nbsp;Expense ID</dt>
                <dd className="col-sm-9" style={{color:'#dbfc03'}}>{ExpenseID}</dd>
                <br/><br/><br/>

                <dt className="col-sm-3" style={{color:'#00ff6a'}}>&nbsp;&nbsp;Expense Type</dt>
                <dd className="col-sm-9" style={{color:'#dbfc03'}}>{expenseType}</dd>
                <br/><br/><br/>

                <dt className="col-sm-3" style={{color:'#00ff6a'}}>&nbsp;&nbsp;Date of Expense</dt>
                <dd className="col-sm-9" style={{color:'#dbfc03'}}>{Moment(expenseDate).format("YYYY-MM-DD")}</dd>
                <br/><br/><br/>

                <dt className="col-sm-3" style={{color:'#00ff6a'}}>&nbsp;&nbsp;Description of Expense</dt>
                <dd className="col-sm-9" style={{color:'#dbfc03'}}>{expenseDescription}</dd>
                <br/><br/><br/>

                <dt className="col-sm-3" style={{color:'#00ff6a'}}>&nbsp;&nbsp;Expense Amount (LKR)</dt>
                <dd className="col-sm-9" style={{color:'#dbfc03'}}>{Number(expenseAmount).toFixed(2)}</dd>
                <br/><br/>

            </dl>    
            &nbsp;&nbsp;
            <Link to="/expenses" className="btn btn-primary" style={{ textDecoration: 'none', color: 'white' }}><i class="fas fa-arrow-left"></i>&nbsp;&nbsp;Back</Link><br/><br/>

            </div>
            </div>
                
            <Footer/>
      </div>

            

        )
    }
}
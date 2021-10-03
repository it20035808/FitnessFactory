import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import '../styles/Expense.css';
import { Redirect } from 'react-router';
import NavBar from "./NavBar";
import Footer from "./Footer";



export default class CreatePayment extends Component{

    constructor(props){
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);

    

        this.state={
            userName:'',
            paymentDate:new Date(),
            category:'',
            description:'',
            amount:'',
            categories:[]
        }

    }

    componentDidMount(){
        this.setState({
            categories:['Registration/Admission Fees','Membership Fees','Gym Store','Entrance Fees for an Event','Other'],
            category:'Registration/Admission Fees'

        })
    }

    /*onChangeUserId(e){
        this.setState({
            userId:e.target.value
        });
    }*/

    onChangeUserName(e){
        this.setState({
            userName:e.target.value
        });
    }

   
   onChangeDate(date){
        this.setState({
            paymentDate:date
        });
   }




   onChangeCategory(e){
         this.setState({
             category: e.target.value
            });
    }

    onChangeDescription(e){
        this.setState({
            description:e.target.value
        });
    }

    onChangeAmount(e){
        this.setState({
            amount:e.target.value
        });
    }


   onSubmit=(e)=>{

        e.preventDefault();

        const {userName,paymentDate,category,description,amount} = this.state;

        const data = {
            userName:userName,
            description:description,
            paymentDate:paymentDate,
            category:category,
            amount:amount
        }

        console.log(data)

        axios.post("http://localhost:8070/payment/payment/save",data).then((res)=>{

                if(res.data.success){

                    this.setState({
                        userName:'',
                        paymentDate:'',
                        category:'',
                        description:'',
                        amount:''
                    })
                }

        })

        alert("Payment Added Successfully !");
        this.setState({redirect:"/payments"});
   }


    render(){

        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }


        return(
            <div>
            <NavBar/>
            <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal" style={{color:"#61fffc"}}>Add New Payment</h1><hr style={{color:"#61fffc"}}/>

                    
                    <form className="needs-validation" onSubmit={this.onSubmit}>
                    <div className="transbox2"> 
                   
                    <div className="form-group" style={{marginBottom:'15px'}}>
                      <label htmlFor="userName" className="form-label" style={{marginBottom:'5px', marginLeft:20,color:"#00ffdd"}}>Enter User Name * </label>
                        <input type="text" className="form-control" value={this.state.userName} 
                        placeholder="Enter User Name"
                        onChange={this.onChangeUserName}
                        required
                        style={{width:950, marginLeft:20,marginRight:20,marginTop:3,backgroundColor:'#ededed'}}/><br/>
                    </div>    

                    <div className="form-group" style={{marginBottom:'15px'}}>
                      <label htmlFor="paymentDate" className="form-label" style={{marginBottom:'5px',marginLeft:20,color:"#00ffdd"}}>Choose Payment Date&nbsp;&nbsp;<i class="far fa-calendar-alt"></i>&nbsp;&nbsp;&nbsp; *</label>
                        <div  style={{width:950, marginLeft:20,marginRight:20,marginTop:3}} >
                                <DatePicker
                                    selected={this.state.paymentDate}
                                    onChange={this.onChangeDate}
                                />  
                        </div><br/>
                    </div>   

                    <div className="form-group" style={{marginBottom:'15px'}}>
                      <label htmlFor="category" className="form-label" style={{marginBottom:'5px',marginLeft:20,color:"#00ffdd"}}>Choose Category * </label>
                        <select ref="userInput"  value={this.state.category} onChange={this.onChangeCategory}   className="form-select" aria-label="Default select example"  
                        style={{width:950, marginLeft:20,marginRight:20,marginTop:3,backgroundColor:'#ededed'}} required>
                            {
                                this.state.categories.map(function(categ){
                                        return <option
                                        key={categ}
                                        value={categ}>
                                            {categ}
                                        </option>
                                })
                            }
                         </select>
                         <br/>
                    </div>   

                    <div className="form-group" style={{marginBottom:'15px'}}>
                      <label htmlFor="description" className="form-label" style={{marginBottom:'15px',marginLeft:20,color:"#00ffdd"}}>Enter Payment Description * </label>
                        <textarea type="text" className="form-control"  value={this.state.description} 
                        placeholder="Add Payment description"
                        onChange={this.onChangeDescription}
                        style={{width:950, marginLeft:20,marginRight:20,marginTop:3,backgroundColor:'#ededed'}}
                        required/>
                        <br/>
                    </div>
                   

                    <div className="form-group" style={{marginBottom:'15px'}}>
                      <label htmlFor="amount" className="form-label" style={{marginBottom:'5px',marginLeft:20,color:"#00ffdd"}}>Enter Payment Amount (LKR) * </label>
                        <input type="number" className="form-control"  value={this.state.amount}
                        placeholder="Enter Payment Amount" 
                        onChange={this.onChangeAmount} 
                        style={{width:950, marginLeft:20,marginRight:20,marginTop:3,backgroundColor:'#ededed'}}
                        required/>
                        <br/>
                    </div>

                    </div><br/>
                     
                    <button type="submit" className="btn btn-success" style={{margin:'15'}} ><i class="fas fa-plus"></i>&nbsp;&nbsp;Add New Payment</button>&nbsp;&nbsp;
                    
                    
                </form> 
                
                
            
            </div>

            <Footer/>
      </div>

                
        )
    }
}
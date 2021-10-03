import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { Redirect } from 'react-router';
import NavBar from "./NavBar";
import Footer from "./Footer";

export default class CreatePayment extends Component{

    constructor(props){
        super(props);
        
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);

    

        this.state={
            expenseType:'',
            expenseDate:new Date(),
            expenseDescription:'',
            expenseAmount:'',
            types:[]
        }

    }

    componentDidMount(){
        this.setState({
            types:['Equipment Buying','Equipment Maintenance','Light Bill','Water Bill','Building Maintenance','Other'],
            expenseType:'Equipment Buying'

        })
    }

    
   
   onChangeDate(date){
        this.setState({
            expenseDate:date
        });
   }




   onChangeType(e){
         this.setState({
            expenseType: e.target.value
            });
    }

    onChangeDescription(e){
        this.setState({
            expenseDescription:e.target.value
        });
    }

    onChangeAmount(e){
        this.setState({
            expenseAmount:e.target.value
        });
    }


   onSubmit=(e)=>{

        e.preventDefault();

        const {expenseType,expenseDate,expenseDescription,expenseAmount} = this.state;

        const data = {
            expenseType:expenseType,
            expenseDate:expenseDate,
            expenseDescription:expenseDescription,
            expenseAmount:expenseAmount
        }

        console.log(data)

        axios.post('http://localhost:8070/expenses/expense/save',data).then((res)=>{

                if(res.data.success){

                    this.setState({
                        expenseType:'',
                        expenseDate:'',
                        expenseDescription:'',
                        expenseAmount:''
                    })
                }

        })

        alert("Expense Added Successfully !");
        this.setState({redirect:"/expenses"});

   }


    render(){

        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }

        return(
            <div>
            <NavBar/>
            <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal" style={{color:"#84ff00"}}>Add New Expense</h1><hr style={{color:"#84ff00"}}/>

                    <form className="needs-validation"  onSubmit={this.onSubmit}>
                     <div className="transbox2">   
                    <div className="form-group" style={{marginBottom:'15px'}}>
                      <label htmlFor="category" className="form-label" style={{marginBottom:'5px', marginLeft:20,color:"#dbfc03"}}>Choose Expense Type * </label>
                        <select ref="userInput"  value={this.state.expenseType} onChange={this.onChangeType}   className="form-select" aria-label="Default select example"
                        style={{width:950, marginLeft:20,marginRight:20,marginTop:3,backgroundColor:'#ededed'}} required>
                            {
                                this.state.types.map(function(categ){
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
                      <label htmlFor="paymentDate" className="form-label" style={{marginBottom:'5px', marginLeft:20,color:"#dbfc03"}}>Choose Date of Expense&nbsp;&nbsp;<i class="far fa-calendar-alt"></i>&nbsp;&nbsp;&nbsp; * </label>
                        <div style={{width:950, marginLeft:20,marginRight:20,marginTop:3}}>
                                <DatePicker
                                    selected={this.state.expenseDate}
                                    onChange={this.onChangeDate}
                                required/>    
                        </div><br/>
                    </div>   
  

                    <div className="form-group" style={{marginBottom:'15px'}}>
                      <label htmlFor="description" className="form-label" style={{marginBottom:'5px', marginLeft:20,color:"#dbfc03"}}>Enter Expense Description * </label>
                        <textarea type="text" className="form-control"  value={this.state.expenseDescription} 
                        placeholder="Add Payment description"
                         onChange={this.onChangeDescription} 
                         style={{width:950, marginLeft:20,marginRight:20,marginTop:3,backgroundColor:'#ededed'}}
                         required/>
                        <br/>
                    </div>
                   

                    <div className="form-group" style={{marginBottom:'15px'}}>
                      <label htmlFor="amount" className="form-label" style={{marginBottom:'5px', marginLeft:20,color:"#dbfc03"}}>Enter Expense Amount (LKR) * </label>
                        <input type="number" className="form-control"  value={this.state.expenseAmount}
                        placeholder="Enter Payment Amount" 
                        onChange={this.onChangeAmount} 
                        style={{width:950, marginLeft:20,marginRight:20,marginTop:3,backgroundColor:'#ededed'}}
                        required/>
                        <br/>
                    </div>
                    </div><br/>
                     
                    <button type="submit" className="btn btn-success" style={{margin:'15'}} ><i class="fas fa-plus"></i>&nbsp;&nbsp;Add New Expense</button>&nbsp;&nbsp;
                    
                    
                </form>   
            
            </div>
            <Footer/>
      </div>

                

        )
    }
}
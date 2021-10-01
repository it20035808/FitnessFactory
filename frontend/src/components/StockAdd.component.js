import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';
import Background from './back.jpg';

export default class StockAdd extends Component {
    constructor(props) {
        super(props);

        this.onChangeStockName = this.onChangeStockName.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeUnitPrice = this.onChangeUnitPrice.bind(this);
        this.onChangeUnitCost = this.onChangeUnitCost.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClickDemo = this.onClickDemo.bind(this);
        this.onClickDemo1 = this.onClickDemo1.bind(this);

        this.state = {
            stockName: '',
            category: '',
            quantity: 0,
            unitPrice: 0,
            unitCost: 0,
            categorys: []
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    componentDidMount() {
        this.setState({
            categorys: ['Supplements And Nutritions', 'Bags And Backpacks', 'Recovery And Care', 'Electronics', 'Merchandising'],
            category: 'Supplements And Nutritions'
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onChangeStockName(e) {
        this.setState({
            stockName: e.target.value
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onChangeQuantity(e) {
        this.setState({
            quantity: e.target.value
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onChangeUnitPrice(e) {
        this.setState({
            unitPrice: e.target.value
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onChangeUnitCost(e) {
        this.setState({
            unitCost: e.target.value
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onSubmit(e) {
        e.preventDefault();

        const stock = {
            stockName: this.state.stockName,
            category: this.state.category,
            quantity: this.state.quantity,
            unitPrice: this.state.unitPrice,
            unitCost: this.state.unitCost
        }

        console.log(stock);

        axios.post('http://localhost:5000/stock/add', stock)
            .then(res => console.log(res.data));

        window.location = '/stock';

    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onClickDemo() {
        this.setState({
            stockName: "Heart Rate Monitor",
            category: "Electronics",
            quantity: 25,
            unitPrice: 3250,
            unitCost: 2750
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onClickDemo1() {
        this.setState({
            stockName: "Adidas Hoodie",
            category: "Merchandising",
            quantity: 17,
            unitPrice: 5000,
            unitCost: 4150
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    render() {
        return (
            <div style={{ backgroundImage: `url(${Background})`, backgroundPosition: 'right' }}>
                <hr />
                <Container style={{ marginTop: '5px' }}>

                    <h1 style={{ margin: '5px' }}>Create New Product</h1>
                    <hr />

                    <form onSubmit={this.onSubmit}>
                        <div style={{ margin: '5px' }}>
                            <label>Name: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.stockName}
                                onChange={this.onChangeStockName}
                            />
                        </div>
                        <div style={{ margin: '5px' }}>
                            <label>Category: </label>
                            <select ref="userInput"
                                required
                                className="form-select"
                                value={this.state.category}
                                onChange={this.onChangeCategory}>
                                {
                                    this.state.categorys.map(function (categorys) {
                                        return <option
                                            key={categorys}
                                            value={categorys}>{categorys}
                                        </option>;
                                    })
                                }
                            </select>
                        </div>
                        <div style={{ margin: '5px' }}>
                            <label>Quantity : </label>
                            <input
                                type="number"
                                required
                                className="form-control"
                                value={this.state.quantity}
                                onChange={this.onChangeQuantity}
                            />
                        </div>

                        <div style={{ margin: '5px' }}>
                            <label>Unit Price (in rupees): </label>
                            <input
                                type="number"
                                required
                                className="form-control"
                                value={this.state.unitPrice}
                                onChange={this.onChangeUnitPrice}
                            />
                        </div>
                        <div style={{ margin: '5px' }}>
                            <label>Unit Cost (in rupees): </label>
                            <input
                                type="number"
                                required
                                className="form-control"
                                value={this.state.unitCost}
                                onChange={this.onChangeUnitCost}
                            />
                        </div>
                        <hr />
                        <div style={{ margin: '5px' }}>
                            <Button variant="contained" type="submit" color="primary" starticon={<SaveIcon />}>
                                Save
                            </Button>
                            <div style={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
                                <Button variant="contained" color="primary" onClick={this.onClickDemo}> Demo 1 </Button>
                                &nbsp;
                                <Button variant="contained" color="primary" onClick={this.onClickDemo1}> Demo 2 </Button>
                            </div>
                        </div>
                    </form>
                    <hr />
                </Container>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Background from './back.jpg';

export default class StockEdit extends Component {
    constructor(props) {
        super(props);

        this.onChangeStockName = this.onChangeStockName.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeUnitPrice = this.onChangeUnitPrice.bind(this);
        this.onChangeUnitCost = this.onChangeUnitCost.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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
        axios.get('http://localhost:8070/Stock/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    stockName: response.data.stockName,
                    category: response.data.category,
                    quantity: response.data.quantity,
                    unitPrice: response.data.unitPrice,
                    unitCost: response.data.unitCost
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        this.setState({
            categorys: ['Supplements And Nutritions', 'Bags And Backpacks', 'Recovery And Care', 'Electronics', 'Merchandising'],
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

        axios.post('http://localhost:8070/stock/update/' + this.props.match.params.id, stock)
            .then(res => console.log(res.data));

        window.location = '/stock';

    }
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    render() {
        return (
            <div style={{ backgroundImage: `url(${Background})`, backgroundPosition: 'right' }}>
                <hr />
                <Container style={{ marginTop: '5px' }}>

                    <h1 style={{ margin: '5px' }}>Edit Product</h1>
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
                            <button variant="contained" type="submit" className="btn btn-success">
                                Save
                            </button>
                        </div>
                    </form>
                    <hr />
                </Container>
            </div>
        )
    }
}
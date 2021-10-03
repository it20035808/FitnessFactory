import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Background from './back.jpg';

const Stock = props => (
  <tr>
    <td>{props.stock.stockID}</td>
    <td>{props.stock.stockName}</td>
    <td>{props.stock.category}</td>
    <td>{props.stock.quantity}</td>
    <td>{props.stock.unitPrice}</td>
    <td>{props.stock.unitCost}</td>
  </tr>
)

export default class Stocklist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stocks: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/stock/')
      .then(response => {
        this.setState({ stocks: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
    this.setState({
      search: ['', 'Supplements And Nutritions', 'Bags And Backpacks', 'Recovery And Care', 'Electronics', 'Merchandising'],
    })
    setTimeout(function () {
      window.print()
    }, 1000);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  stockCostQuantityTotal() {
    return (this.state.stocks.reduce((total, currentStock) => total = total + currentStock.unitCost * currentStock.quantity, 0));
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  stockPriceQuantityTotal() {
    return (this.state.stocks.reduce((total, currentStock) => total = total + currentStock.unitPrice * currentStock.quantity, 0));
  }


  StockList() {
    return this.state.stocks.map(currentStock => {
      return <Stock stock={currentStock} deleteStock={this.deleteStock} key={currentStock._id} />;
    })
  }

  render() {
    return (
      <div style={{ backgroundImage: `url(${Background})`, backgroundPosition: 'right' }}>
        <hr />
        <Container>
          <Row>
            <Col><h1>Products Details Report {this.state.stocks.length}</h1></Col>
            <Col><div style={{ display: "flex", justifyContent: "right", alignItems: "right", marginTop: '10px' }}>
              <button className="btn btn-success" onClick={() => window.print()}>PRINT</button>
              &nbsp;
              <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="btn btn-success"
                table="StockReport"
                filename="StockReport"
                sheet="Stock"
                buttonText="Download as XLS" /></div></Col>
          </Row>
          <Row>
            <Col><h5>{new Date().toLocaleString() + ''}</h5></Col>
          </Row>
        </Container>

        <div style={{ margin: '30px' }}>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Total Cost (Rupees)</th>
                <th>Total Value (Rupees)</th>
                <th>Gross Profit (Rupees)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.stockCostQuantityTotal()}</td>
                <td>{this.stockPriceQuantityTotal()}</td>
                <td>{this.stockPriceQuantityTotal() - this.stockCostQuantityTotal()}</td>
              </tr>
            </tbody>
          </Table>
          <hr />
        </div>

        <div style={{ margin: '30px' }}>
          <Table id="StockReport" striped bordered hover variant="light">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Unit Cost</th>
              </tr>
            </thead>
            <tbody>
              {this.StockList()}
            </tbody>
          </Table>
          <hr />
        </div>
      </div>
    )
  }
}
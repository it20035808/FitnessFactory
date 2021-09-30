import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Background from './back.jpg';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Equipment = props => (

  <tr>
    <td>{props.equipment.equipmentID}</td>
    <td>{props.equipment.equipmentName}</td>
    <td>{props.equipment.category}</td>
    <td>{props.equipment.DOP.substring(0, 10)}</td>
    <td>{props.equipment.warranty}</td>
    <td>{props.equipment.lastRD.substring(0, 10)}</td>
    <td>{props.equipment.nextRD.substring(0, 10)}</td>

  </tr>
)

export default class Equipmentprint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      equipments: []
    };
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  componentDidMount() {
    axios.get('http://localhost:5000/equipment/')
      .then(response => {
        this.setState({ equipments: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  equipmentList() {
    return this.state.equipments.map(currentequipment => {
      return <Equipment equipment={currentequipment} key={currentequipment._id} />;
    })
  }

  render() {
    return (
      <div style={{ backgroundImage: `url(${Background})`, backgroundPosition: 'right' }}>
        <hr />
        <Container>
          <Row>
            <Col><h1>Equipments Details Report {this.state.equipments.length}</h1></Col>
            <Col><div style={{ display: "flex", justifyContent: "right", alignItems: "right", marginTop: '10px' }}>
              <Button onClick={() => window.print()}>PRINT</Button></div></Col>
          </Row>
          <Row>
            <Col><h5>{new Date().toLocaleString() + ''}</h5></Col>
          </Row>
        </Container>

        <div style={{ margin: '30px' }}>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Date Of Purchase</th>
                <th>Warranty</th>
                <th>Last repair date</th>
                <th>Next repair date</th>
              </tr>
            </thead>
            <tbody>
              {this.equipmentList()}
            </tbody>
          </Table>
          <hr />
        </div>
      </div>
    )
  }
}
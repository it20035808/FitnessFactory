import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Container } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';
import Background from './back.jpg';

export default class EquipmentAdd extends Component {
    constructor(props) {
        super(props);

        this.onChangeEquipmentName = this.onChangeEquipmentName.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeDOP = this.onChangeDOP.bind(this);
        this.onChangeWarranty = this.onChangeWarranty.bind(this);
        this.onChangeLastRD = this.onChangeLastRD.bind(this);
        this.onChangeNextRD = this.onChangeNextRD.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClickDemo = this.onClickDemo.bind(this);
        this.onClickDemo1 = this.onClickDemo1.bind(this);

        this.state = {
            equipmentName: '',
            category: '',
            DOP: new Date(),
            warranty: 0,
            lastRD: new Date(),
            nextRD: new Date(),
            categorys: []
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    componentDidMount() {
        this.setState({
            categorys: ['Treadmills', 'Bikes', 'Rowing Machines', 'Benches', 'Crosstrainers'],
            category: 'Treadmills'
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onChangeEquipmentName(e) {
        this.setState({
            equipmentName: e.target.value
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onChangeDOP(date) {
        this.setState({
            DOP: date
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onChangeWarranty(e) {
        this.setState({
            warranty: e.target.value
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onChangeLastRD(date) {
        this.setState({
            lastRD: date
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onChangeNextRD(date) {
        this.setState({
            nextRD: date
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onClickDemo() {
        this.setState({
            equipmentName: "Rowing Pro LS1",
            category: "Rowing Machines",
            DOP: new Date("2020-02-14T20:49:29.000+00:00"),
            warranty: 36,
            lastRD: new Date("2021-09-14T20:49:29.000+00:00"),
            nextRD: new Date("2021-11-14T20:49:29.000+00:00")
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onClickDemo1() {
        this.setState({
            equipmentName: "Limited Classic Crosstrainers ",
            category: "Crosstrainers",
            DOP: new Date("2019-10-20T20:49:29.000+00:00"),
            warranty: 60,
            lastRD: new Date("2021-08-20T20:49:29.000+00:00"),
            nextRD: new Date("2021-10-20T20:49:29.000+00:00")
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onSubmit(e) {
        e.preventDefault()

        const equipment = {
            equipmentName: this.state.equipmentName,
            category: this.state.category,
            DOP: this.state.DOP,
            warranty: this.state.warranty,
            lastRD: this.state.lastRD,
            nextRD: this.state.nextRD
        }

        console.log(equipment);

        axios.post('http://localhost:5000/equipment/add', equipment)
            .then(res => console.log(res.data));

        window.location = '/equipment';

    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    render() {
        return (
            <div style={{ backgroundImage: `url(${Background})`, backgroundPosition: 'right' }}>
                <hr />
                <Container style={{ marginTop: '5px' }}>

                    <h1 style={{ margin: '5px' }}>Create New Equipment</h1>
                    <hr />

                    <form onSubmit={this.onSubmit}>
                        <div style={{ margin: '5px' }}>
                            <label>Name: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.equipmentName}
                                onChange={this.onChangeEquipmentName}
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
                            <label>Date of purchase: </label>
                            <div>
                                <DatePicker
                                    selected={this.state.DOP}
                                    onChange={this.onChangeDOP}
                                />
                            </div>
                        </div>

                        <div style={{ margin: '5px' }}>
                            <label>Warranty (in months): </label>
                            <input
                                type="number"
                                className="form-control"
                                value={this.state.warranty}
                                onChange={this.onChangeWarranty}
                            />
                        </div>
                        <div style={{ margin: '5px' }}>
                            <label>Last Repaired Date: </label>
                            <div>
                                <DatePicker
                                    selected={this.state.lastRD}
                                    onChange={this.onChangeLastRD}
                                />
                            </div>
                        </div>
                        <div style={{ margin: '5px' }}>
                            <label>Next Repair Date: </label>
                            <div>
                                <DatePicker
                                    selected={this.state.nextRD}
                                    onChange={this.onChangeNextRD}
                                />
                            </div>
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
                        <hr />
                    </form>
                </Container>
            </div>
        )
    }
}
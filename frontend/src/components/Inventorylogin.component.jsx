import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Background from './back.jpg';
import NavBar from "./NavBar";
import Footer from "./Footer";


export default class StockAdd extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: ''
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    componentDidMount() {
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onSubmit(e) {
        e.preventDefault();

        if (this.state.username === 'admin' && this.state.password === 'admin') {
            window.location = '/main';
        }

        if (this.state.username !== 'admin' || this.state.password !== 'admin') {
            alert("Invalid Login Details");
        }

    }

    render() {
        return (
            <div>
                <NavBar/>
                <div style={{ backgroundImage: `url(${Background})`, backgroundPosition: 'right' }}>
                <hr />
                <Container style={{ marginTop: '5px', width: '500px' }}>

                    <h1 style={{ margin: '5px', display: "flex", justifyContent: "center", alignItems: "center" }}>Login</h1>
                    <hr />

                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label>
                                Username </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                            />
                        </div>

                        <div>
                            <label>
                                Password </label>
                            <input
                                style={{ margin: '5px', display: "flex", justifyContent: "center", alignItems: "center" }}
                                type="password"
                                required
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                            />
                        </div>
                        <br></br>
                        <div style={{ margin: '5px', display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <button variant="contained" type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </form>
                    <hr />
                    <br></br>
                </Container>
            </div>
                <Footer/>
            </div>
            
        )
    }
}
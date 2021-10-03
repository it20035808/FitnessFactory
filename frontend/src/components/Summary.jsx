import React, { Component } from 'react';
import summary1 from '../images/summary1.jpg';
import summary2 from '../images/summary2.jpg';
import summary3 from '../images/summary3.jpg';
import summary4 from '../images/summary4.jpg';
import summary5 from '../images/summary5.jpg';
import NavBar from "./NavBar";
import Footer from "./Footer";

class EventHome extends Component {

    render() {
        <br/>
        return (
            <div>
                <NavBar/>
                <div className="card" style={{ height: '100px', width: '900px' }}><br/>
                <br/><img src={summary1} style={{ height: '300px', width: '1400px' }} /><br/>
                <div className="card-body">
                    <h1 className="card-title"><b>Yoga Event</b></h1><br />
                    <p className="card-text"><h4>Specially designed for senior citizens.</h4></p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><h5>Event ID : 1</h5></li>
                    <li className="list-group-item"><h5>10 sessions of 30 minutes each</h5></li>
                    <li className="list-group-item"><h5>150 calories burnt per session</h5></li>
                </ul>
                <div className="card-body">
                    <a href="https://www.youtube.com/watch?v=vbgxIwQoyN4" className="card-link">Warm Up</a>
                    <a href="https://www.youtube.com/watch?v=GLy2rYHwUqY" className="card-link">Conditioning</a>
                    <a href="https://www.youtube.com/watch?v=CY6QP4ofwx4" className="card-link">Cool Down</a>
                </div>

                <br/><br/><br/>
                <img src={summary2} style={{ height: '300px', width: '1400px' }} /><br />
                <div className="card-body">
                    <h1 className="card-title">Zumba Event</h1><br />
                    <p className="card-text"><h4>Specially designed for women.</h4></p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><h5>Event ID : 2</h5></li>
                    <li className="list-group-item"><h5>15 sessions of 45 minutes each</h5></li>
                    <li className="list-group-item"><h5>300 calories burnt per session</h5></li>
                </ul>
                <div className="card-body">
                    <a href="https://www.youtube.com/watch?v=N1zTPfkM7f8" className="card-link">Warm Up</a>
                    <a href="https://www.youtube.com/watch?v=vG_Bs0QLc3I" className="card-link">Conditioning</a>
                    <a href="https://www.youtube.com/watch?v=QQVwuTQ8rwo" className="card-link">Cool Down</a>
                </div>

                <br/><br/><br/>
                <img src={summary3} style={{ height: '300px', width: '1400px' }} /><br />
                <div className="card-body">
                    <h1 className="card-title">Aerobics</h1><br />
                    <p className="card-text"><h4>Specially designed for teens.</h4></p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><h5>Event ID : 6</h5></li>
                    <li className="list-group-item"><h5>10 sessions of 45 minutes each</h5></li>
                    <li className="list-group-item"><h5>200 calories burnt per session</h5></li>
                </ul>
                <div className="card-body">
                    <a href="https://www.youtube.com/watch?v=a44ayeoSfKM" className="card-link">Warm Up</a>
                    <a href="https://www.youtube.com/watch?v=sSkJZNY1D3Q" className="card-link">Conditioning</a>
                    <a href="https://www.youtube.com/watch?v=W-sKDMG3hko" className="card-link">Cool Down</a>
                </div>

                <br/><br/><br/>
                <img src={summary4} style={{ height: '300px', width: '1400px' }} /><br />
                <div className="card-body">
                    <h1 className="card-title">Cardio Event</h1><br />
                    <p className="card-text"><h4>Specially designed for beginners.</h4></p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><h5>Event ID : 7</h5></li>
                    <li className="list-group-item"><h5>15 sessions of 30 minutes each</h5></li>
                    <li className="list-group-item"><h5>150 calories burnt per session</h5></li>
                </ul>
                <div className="card-body">
                    <a href="https://www.youtube.com/watch?v=7HuB5lHlhpA" className="card-link">Warm Up</a>
                    <a href="https://www.youtube.com/watch?v=141jmEQznK0" className="card-link">Conditioning</a>
                    <a href="https://www.youtube.com/watch?v=W5IiasNutB8" className="card-link">Cool Down</a>
                </div>

                <br/><br/><br/>
                <img src={summary5} style={{ height: '300px', width: '1400px' }} /><br />
                <div className="card-body">
                    <h1 className="card-title">CrossFit Event</h1><br />
                    <p className="card-text"><h4>Specially designed for professionals.</h4></p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><h5>Event ID : 8</h5></li>
                    <li className="list-group-item"><h5>20 sessions of 60 minutes each</h5></li>
                    <li className="list-group-item"><h5>400 calories burnt per session</h5></li>
                </ul>
                <div className="card-body">
                    <a href="https://www.youtube.com/watch?v=0t0EjTVQ-f4" className="card-link">Warm Up</a>
                    <a href="https://www.youtube.com/watch?v=IBuwNheltdI" className="card-link">Conditioning</a>
                    <a href="https://www.youtube.com/watch?v=DOtr16U8V2M" className="card-link">Cool Down</a>
                </div>

            </div>
                <Footer/>
            </div>
        );

    }
}

export default EventHome;

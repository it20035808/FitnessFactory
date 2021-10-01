import React, {Component} from "react";

export default class Mainp extends Component {
    render() {
        return (
            <div className="container"> 
                <div class="bg-image" style={{backgroundImage: "url(https://mk0exerciseblog8gs7t.kinstacdn.com/wp-content/uploads/2017/08/Inspiration_Chris_Ryan.jpg)" , height: "50vh"  }}>
                </div>
                <br/> <br/>
                <p class="placeholder-glow">
                    <span class="placeholder col-12"></span>
                </p>   
                <marquee>  
                    <h1 style={{color:'#008B8B'}}> <center> Welcome To Instructor Management Pages! </center></h1>
                </marquee>
                <p class="placeholder-glow">
                    <span class="placeholder col-12"></span>
                </p> 
            </div>
        )
    }
}
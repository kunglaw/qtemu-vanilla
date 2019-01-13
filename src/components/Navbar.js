import React from "react"
import "./Navbar.css"

class Navbar extends React.Component {

    constructor() {
        super()
        this.state = {
            myclass : {
                color:"red"
            }
    
        }
    }

    render() {
       
        return (
            
            <nav className="nav">
                <div className="logo">
                    <h4 className=""> Qtemu </h4>
                </div>
                <ul className="nav-left">
                    <li><a href="#">Create Meetup</a></li>
                    <li><a href="#">Explore</a></li>
                </ul>
                <ul className="nav-right">
                    <li><a href="#">Login</a></li>
                </ul>
                <div className="clearfix"></div>
            </nav>
        )
    }

}

export default Navbar
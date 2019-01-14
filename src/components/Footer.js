import React from "react"
import "./Footer.css"

class Footer extends React.Component {

    render() {
        return(
            <footer id="footer">
                <div className="container">
                    <hr></hr>
                    <p align="center"> Copyright &copy; 2019 <a href="yudhistira.id">yudhistira.id</a> </p>
                </div>
            </footer>
        )
    }
}

export default Footer
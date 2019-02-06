import React from "react"
import "./Footer.css"
import { connect } from "react-redux"

class Footer extends React.Component {
    render() {
        const { app } = this.props
        return(
            <footer id="footer">
                <div className="container">
                    <hr></hr>
                    <p align="center"> { app.footer } </p>
                </div>
            </footer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        app:state.app
    }
}

export default connect( mapStateToProps )(Footer)
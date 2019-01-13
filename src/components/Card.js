import React from "react"

import "./Card.css"

class Card extends React.Component {
    render() {
        return (
            <div style={ this.props.style } className="card">
                <div className="card-title">
                    <h3> { this.props.title } </h3>
                </div>
                <div className="card-body">
                    { this.props.children }
                </div>
                
            </div>
        )
    }
}

export default Card
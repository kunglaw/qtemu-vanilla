import React from "react"

import "./Card.css"

const Card = (props) => {
    return (
        <div style={ props.style } className="card">
            <div className="card-title">
                <h3> { props.title } </h3>
            </div>
            <div className="card-body">
                { props.children }
            </div>
            
        </div>
    )
}


export default Card
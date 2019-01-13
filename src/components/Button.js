import React from "react" 
import "./Button.css"

class Button extends React.Component {

    constructor (props) {
        super(props)
        
    }

    render() {
        return(
            <button className={ this.props.className }>
                { this.props.children }
            </button>
        ) 
            
        
    }
}

export default Button
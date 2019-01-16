import React from "react" 
import "./Button.css"

const Button = (props) => {

    const {...restProps} = props

    return(
        <button className={ props.className } {...restProps} >
            { props.children }
        </button>
    ) 
}

export default Button
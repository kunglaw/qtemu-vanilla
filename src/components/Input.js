import React from 'react';
import TextField from "@material-ui/core/TextField"

const Input = (props) => {

    const {...restProps} = props;

    return (
        <TextField type={ props.type } name={ props.name } id={ props.id } className={ props.className } {...restProps} />
    );
}

/*

    #2196f3
*/


export default Input;
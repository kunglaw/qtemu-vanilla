import React from 'react';
import Styled from "styled-components"

const Input = (props) => {

    const {...restProps} = props;

    return (
        <input type={ props.type } name={ props.name } id={ props.id } className={ props.className } {...restProps} />
    );
}


export default Input;
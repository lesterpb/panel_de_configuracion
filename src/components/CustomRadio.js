import React from 'react'
import styled from '@emotion/styled'

const Radio = styled.input`
    /* remove standard background appearance */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* create custom radiobutton appearance */
    content: "";
    display: inline-block;
    width: 45px;
    height: 45px;
    /* background-color only for content */
    background-clip: content-box ${props => props.color};
    border: 12px solid ${props => props.color};
    background-color: ${props => props.color};
    border-radius: 50%;
    font-size:10px;
    margin-right: 9px;
    box-sizing: none;

    &:hover{
        cursor: pointer;
    }

    &:checked{
        background-color: ${props => props.color};
        border: 8px solid white;
        outline: none;
        box-shadow: 0px 0px 0px 5px ${props => props.color};
        ;
    }
`

const CustomRadio = ({color='blue',size='30px', name, value}) => {

    return (
        <Radio type='radio' color={color} size={size} name={name} value={value}/>
    )
}

export default CustomRadio
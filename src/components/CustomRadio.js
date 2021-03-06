import React from 'react'
import styled from '@emotion/styled'
import {useEffect} from 'react'

const LabelTag = styled.label`

    margin-right: 10px;
    display: inline-block;
    position: relative;
    padding-left: ${props => props.left};
    margin-bottom: 3rem;
    margin-right: 12px;
    cursor: pointer;
    font-size: 33px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    /* create custom radio (parte de afuera)*/
    .check {
        position: absolute;
        top: 0;
        left: 0;
        height: ${props => {
            switch(props.size){
                case 1: return '26px';
                case 2: return '30px';
                case 3: return '36px';
                case 4: return '40px';
                default: return '26px';
            }
        }};
        width: ${props => {
            switch(props.size){
                case 1: return '26px';
                case 2: return '30px';
                case 3: return '36px';
                case 4: return '40px';
                default: return '26px';
            }
        }};
        background-color: ${props => props.insideColor};
        border: 2px solid ${props => props.insideColor};
        border-radius: 50%;
    }

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    .radio .check {
    position: absolute;
    top: 0;
    left: 0;
    height: ${props => {
        switch(props.size){
            case 1: return '26px';
            case 2: return '30px';
            case 3: return '36px';
            case 4: return '40px';
            default: return '26px';
        }
    }};
    width: ${props => {
        switch(props.size){
            case 1: return '26px';
            case 2: return '30px';
            case 3: return '36px';
            case 4: return '40px';
            default: return '26px';
        }
    }};
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 50%;
}

    /* on mouse-over, add border color */
    &::hover input ~ .check {
        border: 2px solid white;
    }

    /* add background color when the radio is checked */
    input:checked ~ .check {
        background-color: white;
        border:none;
        box-shadow: 0px 0px 0px 5px ${props => props.outsideColor};
    }

    /* create the radio and hide when not checked */
    .check::after {
        content: "";
        position: absolute;
        display: none;
    }

    /* show the radio when checked */
    input:checked ~ .check:after {
        display: block;
    }

    /* radio style (parte de adentro)*/
    .check::after {
        top:  ${props => {
            switch(props.size){
                case 1: return '3.5px';
                case 2: return '4px';
                case 3: return '5px';
                case 4: return '5.2px';
                default: return '4px';
            }
        }};
        left: ${props => {
            switch(props.size){
                case 1: return '3.5px';
                case 2: return '4px';
                case 3: return '5px';
                case 4: return '5.2px';
                default: return '3.5px';
            }
        }};
        width: ${props => {
            switch(props.size){
                case 1: return '18.5px';
                case 2: return '22px';
                case 3: return '26px';
                case 4: return '30px';
                default: return '18.5px';
            }
        }};
        height: ${props => {
            switch(props.size){
                case 1: return '18.3px';
                case 2: return '22px';
                case 3: return '26px';
                case 4: return '30px';
                default: return '18.3px';
            }
        }};
        border-radius: 50%;
        background: ${props => props.insideColor};
    }    
`




const CustomRadio = ({insideColor='blue', outsideColor='blue',size=1, left, name, value, configurations, saveConfigurations, title=null,}) => {
    const {colorSelect} = configurations
    useEffect(()=>{
        if(colorSelect===value)
            document.querySelector(`#radio-color-${value}`).checked=true
    },[colorSelect])

    return (
        <LabelTag insideColor={insideColor} 
                  outsideColor={outsideColor} 
                  className='radio' 
                  size={size}
                  left={left}>{title}
            <input type="radio" name={name} id={`radio-color-${value}`} onChange={()=>{saveConfigurations({...configurations,colorSelect:value})}}/>
            <span className="check"></span>            
        </LabelTag> 
    )
}

export default CustomRadio
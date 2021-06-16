import React from 'react'
import styled from '@emotion/styled'
import '../App.css'
import SVG from "react-inlinesvg";
import Navigator from "../img/Mask Group 42.svg";

  
  const StyledSVG = styled(SVG)`
    .s{
        fill:${props => props.in}
    }
    .m{
        fill:${props => props.out}
    }
    .p{
        fill:${props => props.out}
    }
  `

const ShowChanges = ({configurations,colors}) => {
    const {nameSpace,url,fileSelect,colorSelect} = configurations
    
    return (
        <div className='lateral-view'>
            {colors[colorSelect] ?  <StyledSVG in={colors[colorSelect].in} out={colors[colorSelect].out} src={Navigator} /> 
                                 :   null
            }
        </div>
    )
}

export default ShowChanges
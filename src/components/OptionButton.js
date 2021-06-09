import React from 'react'
import {Button} from 'antd';
import '../App.css'

const OptionButton = ({className,text, name, value,optionButtonSelect,saveOptionButtonSelect,saveOptionButtonUnselect}) => {

    const updateSelection = () => {
        //Recoge el valor
        saveOptionButtonUnselect(optionButtonSelect)
        saveOptionButtonSelect(value)
        
        //Da los estilos al boton
        const button = document.querySelector(`#button-${value}`)        
        button.classList.add('option-button-selected')
    }  

    return (
        <Button className={className}
                id={`button-${value}`} 
                onClick={updateSelection}
        >
            {text}
        </Button>
    )
}

export default OptionButton

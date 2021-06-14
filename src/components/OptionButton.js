import {useEffect} from 'react'
import React from 'react'
import {Button} from 'antd';
// import '../App.css'

const OptionButton = ({className, text, value, configurations, saveConfigurations}) => {
    const {optionButtonSelect} = configurations
    useEffect(()=>{
        if(optionButtonSelect === value){
            const buttonActual = document.querySelector(`#button-${value}`)
            buttonActual.classList.add('option-button-selected')
        }
    },[optionButtonSelect])

    const updateSelection = () => {
        //Quita los estilos al boton
        const buttonBefore = document.querySelector(`#button-${optionButtonSelect}`)   
        if(buttonBefore)     
            buttonBefore.classList.remove('option-button-selected')

        //Recoge el valor actual
        saveConfigurations({...configurations,optionButtonSelect:value})

        //Da los estilos al boton
        const buttonActual = document.querySelector(`#button-${value}`)        
        buttonActual.classList.add('option-button-selected')
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

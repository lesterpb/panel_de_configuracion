import { useEffect } from 'react'
import styled from '@emotion/styled'
import OptionRadio from './OptionRadio'

const Panel = styled.div`    
    height: auto;
    width: 100%;
    border: 1px solid #ddd;    
    border-radius: 5px;
    margin: 10px 4px;
    padding: 0px;
    display: inline-block;
    

    &:hover{
        cursor: pointer;
    }
    
    @media (min-width: 768px) {
        width: 48%;
    }
`
const PanelOption = ({option,description,value, configurations, saveConfigurations,className=null}) => {
    const {panelOptionSelect} = configurations
    useEffect(()=>{
        if(panelOptionSelect===value){
            const panelActual = document.querySelector(`#panel-${value}`)
            panelActual.classList.add('option-panel-selected')
            const textActual = document.querySelector(`#radio-text-${value}`)
            textActual.classList.add('radio-text-selected')
        }
    },[panelOptionSelect])

    const selectPanel = () => {
        //Desmarca el panel y quita los estilos
        const panelBefore = document.querySelector(`#panel-${panelOptionSelect}`)
        panelBefore.classList.remove('option-panel-selected')
        const textBefore = document.querySelector(`#radio-text-${panelOptionSelect}`)
        textBefore.classList.remove('radio-text-selected')

        //Marca el panel y pone los estilos
        const panelActual = document.querySelector(`#panel-${value}`)
        panelActual.classList.add('option-panel-selected')
        const textActual = document.querySelector(`#radio-text-${value}`)
        textActual.classList.add('radio-text-selected')
        saveConfigurations({...configurations,panelOptionSelect:value})
    }

    return(
        <Panel className={className} id={`panel-${value}`}>
            <OptionRadio option={option} 
                         description={description}
                         value={value}
                         style={{marginLeft:'12px',marginBottom:'10px',marginTop:'8px'}}
                         action={selectPanel}/>
        </Panel>
    )
}

export default PanelOption

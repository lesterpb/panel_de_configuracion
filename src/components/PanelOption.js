import {useEffect} from 'react'
import styled from '@emotion/styled'
import { Radio,Row,Col,Typography } from 'antd';
import OptionRadio from './OptionRadio'
import Message from './Message'

const Panel = styled.div`    
    height: 5rem;
    width: 100%;
    border: 1px solid #ddd;    
    border-radius: 5px;
    margin: 10px 5px;
    padding: 5px;
    display: inline-block;
    

    &:hover{
        cursor: pointer;
    }
    
    @media (min-width: 768px) {
        width: 48%;
    }
`

const RadioLabel = styled.span`
   font-weight: 666;
`

const PanelOption = ({option,description,value,panelOptionSelect, savePanelOptionSelect,className=null}) => {
                                                                           
    const {Text} = Typography

    useEffect(()=>{
        // if(panelOptionSelect===value){
        //     const panelActual = document.querySelector(`#panel-${value}`)
        //     panelActual.classList.add('option-panel-selected')
        //     const visualRadio = document.querySelector(`#panel-${value} .ant-radio`);
        //     visualRadio.classList.add('ant-radio-checked') 
        //     const wrapperRadioActual = document.querySelector(`#panel-${value} .ant-radio-wrapper`);
        //     wrapperRadioActual.classList.add('ant-radio-wrapper-checked')
        // }
    },[])

    const selectPanel = () => {
        //Desmarca el panel y quita los estilos
        const panelBefore = document.querySelector(`#panel-${panelOptionSelect}`)
        panelBefore.classList.remove('option-panel-selected')
        // const visualRadioBefore = document.querySelector(`#panel-${panelOptionSelect} .ant-radio`);
        // visualRadioBefore.classList.remove('ant-radio-checked')
        // const wrapperRadioBefore = document.querySelector(`#panel-${panelOptionSelect} .ant-radio-wrapper`);
        // wrapperRadioBefore.classList.remove('ant-radio-wrapper-checked')

        //Marca el panel y pone los estilos
        const panelActual = document.querySelector(`#panel-${value}`)
        panelActual.classList.add('option-panel-selected')
        // const visualRadioActual = document.querySelector(`#panel-${value} .ant-radio`);
        // visualRadioActual.classList.add('ant-radio-checked')
        // const wrapperRadioActual = document.querySelector(`#panel-${value} .ant-radio-wrapper`);
        // wrapperRadioActual.classList.add('ant-radio-wrapper-checked')
        savePanelOptionSelect(value)

        // console.log(`#panel-${panelOptionSelect}`,`#panel-${value}`)
    }

    return(
        <Panel className={className} id={`panel-${value}`}>
            <OptionRadio message={option} value={value}/>
            <Message message={description} 
                   style={{marginBottom:'2.5rem'}} />
            {/* <div style={{marginLeft:'20px',marginBottom:'10px'}}>
                <div style={{display:'flex',justifyContent:'normal'}}>
                    <Typography.Text className="ant-form-text text-wraps" type="secondary" style={{fontSize:'17px'}}>
                        <div style={{position:'relative'}}>
                            <Radio type='radio'
                                    value={value} 
                                    id={`radio-panel-${value}`} 
                                    style={{marginRight:'13px',position:'absolute',top:'3px',left:'-22px'}}
                                    onChange={selectPanel}/> 
                        </div>
                    </Typography.Text> 
                    <div>
                        <Typography.Text className="ant-form-text text-wraps" 
                                        type="secondary">
                            {description}
                        </Typography.Text>
                    </div>  
                </div>        
            </div> */}
        </Panel>
    )
}

export default PanelOption

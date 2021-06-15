import '../css/Components.css'
import { Fragment } from 'react'
import 'antd/dist/antd.css';
import { Form, Input,Radio, Typography, Modal, Button } from 'antd';

import Upload from './Upload'
import Message from './Message'
import CustomRadio from './CustomRadio';
import OptionButton from './OptionButton';
import PanelOption from './PanelOption'

const ConfigurationForm = ({configurations,
                            saveConfigurations,
                            initialValues,
                            messages,
                            numberOfPeopleOptions,
                            privacyOptions,
                            colors}) => {
  //State
  const {optionButtonSelect,panelOptionSelect,colorSelect,nameSpace,url} = configurations
  const {initialOptionButtonSelect,initialPanelOptionSelect,initialColorSelect,initialNameSpace,initialUrl,initialFileSelect} = initialValues
  //antd componets
  const {Title} = Typography
  const {Item} = Form

  
  //methods
  const saveChanges = () => {
    let secondsToGo = 2;
    const modal = Modal.success({
      title: 'Mensaje',
      content: `Los cambios fueron guardados con éxito.`,
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
    console.log(optionButtonSelect,panelOptionSelect,colorSelect,url,nameSpace)
  }

  const clearAll = () => {
    saveConfigurations({
      optionButtonSelect: initialOptionButtonSelect,
      colorSelect:initialColorSelect,
      panelOptionSelect:initialPanelOptionSelect,
      nameSpace:initialNameSpace,
      url:initialUrl,
      fileSelect:initialFileSelect,
    })
    
    console.log(configurations)

    numberOfPeopleOptions.map((option,id) => {
      if(initialOptionButtonSelect!=id)
        document.querySelector(`#button-${id}`).classList.remove('option-button-selected') 
    })

    privacyOptions.map((option,id) => {
      console.log(initialPanelOptionSelect!=id,initialPanelOptionSelect,id)
      if(initialPanelOptionSelect!=id){
        document.querySelector(`#panel-${id}`).classList.remove('option-panel-selected')
        document.querySelector(`#radio-text-${id}`).classList.remove('radio-text-selected')
      }
    })
  }
  
  return (
    <Fragment>
      <Title level={3}>Configuración</Title>
      <Title level={4}>Logo del espacio</Title>          
      <Upload className='mb-default'
              configurations={configurations}
              saveConfigurations={saveConfigurations}/>
      <Message message={messages[0]} 
              infoIcon={true} 
              style={{marginBottom:'0.3rem'}}/>         
      <Message message={messages[1]} 
              style={{marginBottom:'2.5rem'}} />
              
        <Item
          name="nombre_espacio"
          rules={[
            {
              required: true,
              message: 'Por favor inserte el nombre de su espacio de trabajo!',
            },
          ]}
        >
          <label htmlFor="nombre_espacio">
            <Title level={5}>Nombre del espacio</Title>
          </label>
          <Input placeholder="Ep: Mi espacio de trabajo" 
                className='input-default'
                name="nombre_espacio"
                value={nameSpace}
                onChange={e => {saveConfigurations({...configurations,nameSpace:e.target.value})}}/>
          { nameSpace ? null : <p style={{color:'rgb(224, 21, 21)'}}>Campo obligatorio *</p>}
        </Item>

        <Item
          name="url_espacio"
          rules={[
            {
              required: true,
              message: 'Por favor inserte su URL!',
            },
          ]}
        >
          <label htmlFor="url_espacio">
            <Title level={5}>URL del espacio (dirección web)</Title>
          </label>
          <Input  placeholder="Ep: mi.dominio" 
                suffix=".dofleini.com"  
                className='input-default'
                name="url_espacio"
                value={url}
                onChange={e => {saveConfigurations({...configurations,url:e.target.value})}}/>
          { url ? null : <p style={{color:'rgb(224, 21, 21)'}}>Campo obligatorio *</p>}
        </Item>

        <Message message={messages[2]} 
              infoIcon={true} 
              style={{marginBottom:'0.3rem'}}/>         
        <Message message={messages[3]} 
              style={{marginBottom:'2.5rem'}} />

        <Title level={5}>¿Cuantas personas trabajan contigo, incluyendote a ti?</Title>

        { numberOfPeopleOptions.map((number,id) => (
          <OptionButton className='b-round option-button'
                        value={id} 
                        key={`button-${id}`}
                        text={number} 
                        configurations={configurations}
                        saveConfigurations={saveConfigurations}/>
        ))}

        <Message message={messages[0]} 
              infoIcon={true} 
              style={{marginBottom:'0.3rem'}}/>         
        <Message message={messages[1]} 
              style={{marginBottom:'2.5rem'}} />
        
        <Title level={5} >Color del tema</Title>
                  
        {colors.map((color,id) => (
          <CustomRadio color={color} 
                        key={`radio-color-${id}`}
                        size={3} 
                        name='background' 
                        value={id} 
                        configurations={configurations}
                        saveConfigurations={saveConfigurations}/>
        ))}
        

        <Title level={5}>Privacidad del espacio</Title>
        
        <Radio.Group style={{display:'block'}} value={panelOptionSelect}>
          { privacyOptions.map((option, id) => (
            <PanelOption  option={option.option} 
                          description={option.description}
                          value={id} 
                          key={`panel-${id}`}
                          configurations={configurations}
                          saveConfigurations={saveConfigurations}/>
          ))}          
        </Radio.Group>
        
        <div style={{marginTop:'2rem',marginBottom:'10rem',marginLeft:'0.5rem'}}>
            {url && nameSpace ? <Button type='primary b-round' 
                                        style={{marginRight:'1rem',marginBottom:'1rem'}}
                                        onClick={saveChanges}>Guardar Cambios</Button> 
                              : <Button type='primary b-round' 
                                style={{marginRight:'1rem',marginBottom:'1rem'}}
                                disabled
                                onClick={saveChanges}>Guardar Cambios</Button>}
            
            <Button type='default b-round'
                    onClick={clearAll}>Descartar</Button>
        </div>
    </Fragment>
  );
}

export default ConfigurationForm;

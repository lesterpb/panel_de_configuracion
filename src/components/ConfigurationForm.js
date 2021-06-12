import '../css/Components.css'
import {useState,useEffect} from 'react'
import 'antd/dist/antd.css';
import { Form, Input,Radio, Typography, Row,Col } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import styled from '@emotion/styled'

import Upload from './Upload'
import Message from './Message'
import CustomRadio from './CustomRadio';
import OptionButton from './OptionButton';
import PanelOption from './PanelOption'

const Div = styled.div`
  /* display: flex;
  justify-content: ${props => props.justify};
  margin-bottom: ${props => props.marginBottom}; */
 
`

const ConfigurationForm = () => {
  //State
  const [optionButtonSelect,saveOptionButtonSelect] = useState(5)
  const [panelOptionSelect,savePanelOptionSelect] = useState(2)
  const [colorSelect, saveColorSelect] = useState('magenta')
  const [fileSelect,saveFileSelect] = useState(null);

  //style
  const {Title,Text} = Typography;

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const messages=['Este logo identificará tu espacio del resto',
                 'Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con findo transparente',
                 'Puedes cambiar la URL de tu espacio (direccion web) en cualquier momento, pero por costesía hacia tus compañeros de trabajo y otros usuarios de Plankton, porfavor no lo hagas muy seguido :)',
                 'Nota: Si cambias la URL de tu espacio, Plankton automaticamente rediccionará desde la antigua dirección hacia la nueva. En cualquier caso, deberias asegurarte que tus compañeros sepan acerca del cambio porque la dirección anterior pasará a estar libre y puede ser usada por otro espacio en el futuro'
                ]
  
  return (
    <div className='container'>
      <Row>
        <Col xs={24} md={8}>
          <Title level={3}>Configuración</Title>
          <Title level={4}>Logo del espacio</Title>          
          <Upload className='mb-default'
                  saveFileSelect={saveFileSelect}/>
          <Message message={messages[0]} 
                  infoIcon={true} 
                  style={{marginBottom:'0.3rem'}}/>         
          <Message message={messages[1]} 
                   style={{marginBottom:'2.5rem'}} />
          {/* <Message message={message[0]} infoIcon={true} style={{marginBottom:'1.8rem'}}/>         
          <Message message={message[1]} style={{marginBottom:'4.5rem'}} /> */}
          <Form
            layout={'horizontal'}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="nombre_espacio"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <label htmlFor="nombre_espacio">
                <Title level={5}>Nombre del espacio</Title>
              </label>
              <Input placeholder="Ep: Mi espacio de trabajo" className='input-default'/>
            </Form.Item>

            <Form.Item
              name="url_espacio"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <label htmlFor="url_espacio">
                <Title level={5}>URL del espacio (dirección web)</Title>
              </label>
              <Input placeholder="Ep: mi.dominio" suffix=".dofleini.com"  className='input-default'/>
            </Form.Item>

            <Message message={messages[2]} 
                  infoIcon={true} 
                  style={{marginBottom:'0.3rem'}}/>         
            <Message message={messages[3]} 
                   style={{marginBottom:'2.5rem'}} />

            <Title level={5}>¿Cuantas personas trabajan contigo, incluyendote a ti?</Title>

            <OptionButton className='b-round option-button'
                          value={1} 
                          text='Solo yo' 
                          optionButtonSelect={optionButtonSelect}
                          saveOptionButtonSelect={saveOptionButtonSelect}/>
            <OptionButton className='b-round option-button' 
                           value={2} 
                           text='2 - 10' 
                           optionButtonSelect={optionButtonSelect}
                           saveOptionButtonSelect={saveOptionButtonSelect}/>
            <OptionButton className='b-round option-button' 
                          value={3} 
                          text='11 - 25' 
                          optionButtonSelect={optionButtonSelect}
                          saveOptionButtonSelect={saveOptionButtonSelect}/>
            <OptionButton className='b-round option-button'
                          value={4}
                          text='26 -50' 
                          optionButtonSelect={optionButtonSelect}
                          saveOptionButtonSelect={saveOptionButtonSelect}/>
            <OptionButton className='b-round option-button' 
                          value={5} 
                          text='51 - 100' 
                          optionButtonSelect={optionButtonSelect}
                          saveOptionButtonSelect={saveOptionButtonSelect}/>
            <OptionButton className='b-round option-button' 
                          value={6} 
                          text='500+' 
                          optionButtonSelect={optionButtonSelect}
                          saveOptionButtonSelect={saveOptionButtonSelect}/>

            <Message message={messages[0]} 
                  infoIcon={true} 
                  style={{marginBottom:'0.3rem'}}/>         
            <Message message={messages[1]} 
                   style={{marginBottom:'2.5rem'}} />
             
            <Title level={5} >Color del tema</Title>
                       
            <CustomRadio color='green' 
                        size={3} 
                        name='background' 
                        value='green' 
                        saveColorSelect={saveColorSelect}
                        colorSelect={colorSelect}/>
            <CustomRadio color='yellow' 
                        size={3} 
                        name='background' 
                        value='yellow'
                        saveColorSelect={saveColorSelect}
                        colorSelect={colorSelect}/>
            <CustomRadio color='magenta' 
                        size={3} 
                        name='background' 
                        value='magenta'
                        saveColorSelect={saveColorSelect}
                        colorSelect={colorSelect}/>
            <CustomRadio color='bisque' 
                        size={3} 
                        name='background' 
                        value='bisque'
                        saveColorSelect={saveColorSelect}
                        colorSelect={colorSelect}/>
            <CustomRadio color='turquoise' 
                        size={3} 
                        name='background' 
                        value='turquoise'
                        saveColorSelect={saveColorSelect}
                        colorSelect={colorSelect}/>
            <CustomRadio color='salmon' 
                        size={3} 
                        name='background' 
                        value='salmon'
                        saveColorSelect={saveColorSelect}
                        colorSelect={colorSelect}/>
            <CustomRadio color='goldenrod' 
                        size={3} 
                        name='background' 
                        value='goldenrod'
                        saveColorSelect={saveColorSelect}
                        colorSelect={colorSelect}/>
            <CustomRadio color='violet' 
                        size={3} 
                        name='background' 
                        value='violet'
                        saveColorSelect={saveColorSelect}
                        colorSelect={colorSelect}/>
            <CustomRadio color='#2489C5' 
                        size={3} 
                        name='background' 
                        value='#2489C5'
                        saveColorSelect={saveColorSelect}
                        colorSelect={colorSelect}/>

            <Title level={5}>Privacidad del espacio</Title>
            
            <Radio.Group style={{display:'block'}} defaultValue={panelOptionSelect}>
            
            <PanelOption  option='Opcion Uno' 
                          description='Esta es la opcion uno'
                          value={1} 
                          panelOptionSelect={panelOptionSelect}
                          savePanelOptionSelect={savePanelOptionSelect}/>
            <PanelOption  option='Opcion Uno' 
                          description='Esta es la opcion uno'
                          value={2}
                          panelOptionSelect={panelOptionSelect}
                          savePanelOptionSelect={savePanelOptionSelect}/>
              <PanelOption  option='Opcion Uno' 
                            description='Esta es la opcion uno'
                            value={3} 
                            panelOptionSelect={panelOptionSelect}
                            savePanelOptionSelect={savePanelOptionSelect}/>
              <PanelOption  option='Opcion Uno' 
                            description='Esta es la opcion uno'
                            value={4}
                            panelOptionSelect={panelOptionSelect}
                            savePanelOptionSelect={savePanelOptionSelect}/>
                 
            </Radio.Group>
          </Form>
        </Col>
        <Col xs={0} md={16}>
          <h1>Detalle</h1>
        </Col>
      </Row>
    </div>
  );
}

export default ConfigurationForm;

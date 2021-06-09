import './App.css'
import {useState,useEffect} from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Button, Typography, Row,Col } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import Upload from './components/Upload'
import Message from './components/Message'
import CustomRadio from './components/CustomRadio';
import OptionButton from './components/OptionButton';
import PanelOption from './components/PanelOption'
import { root } from 'npm';



function App() {
  //State
  const [optionButtonSelect,saveOptionButtonSelect] = useState('')
  const [optionButtonUnselect,saveOptionButtonUnselect] = useState('')

  const [panelOptionSelect,savePanelOptionSelect] = useState('')
  const [panelOptionButtonUnselect,savePanelOptionUnselect] = useState('')

  useEffect(()=>{
    const button = document.querySelector(`#button-${optionButtonUnselect}`) 
    if(button)       
      button.classList.remove('option-button-selected')
  },[optionButtonSelect])

  //style
  const {Title,Text} = Typography;

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const message=['Este logo identificará tu espacio del resto','Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con findo transparente']
  
  return (
    <div className='container'>
      <Row>
        <Col xs={24} md={10}>
          <Title level={3}>Configuración</Title>
          <Title level={4}>Logo del espacio</Title>          
          <Upload className='mb-default'/>
          <Message message={message[0]} infoIcon={true} className='mb-default'/>         
          <Message message={message[1]} />
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
              <Input placeholder="Ep: Mi espacio de trabajo" className='b-round'/>
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
              <Input placeholder="Ep: mi.dominio" className='b-round'/>
            </Form.Item>

            <Text className="ant-form-text text-wrap" 
                  type="secondary">
              <InfoCircleOutlined /> Puedes cambiar la url de tu espacio (dirección web) en cualquier momento pero por cortesía hacia tus compañeros de trabajo y otros usuarios de Plankton, por favor no lo hagas muy seguido :)
            </Text>

            <Title level={5}>¿Cuantas personas trabajan contigo, incluyendote a ti?</Title>
            
            {/* <Button className='b-round option-button'>Solo yo</Button>
            <Button className='b-round option-button'>2 - 10</Button>
            <Button className='b-round option-button'>11 - 25</Button>
            <Button className='b-round option-button'>26 -50</Button>
            <Button className='b-round option-button'>51 - 100</Button>
            <Button className='b-round option-button'>500+</Button>
            <OptionButton className='b-round option-button' value='600' text='600' name='color'/> */}

            <OptionButton className='b-round option-button'
                          value='1' 
                          text='Solo yo' 
                          name='tamaño'
                          optionButtonSelect={optionButtonSelect}
                          saveOptionButtonSelect={saveOptionButtonSelect}
                          saveOptionButtonUnselect={saveOptionButtonUnselect}/>
            <OptionButton className='b-round option-button' 
                           value='2' 
                           text='2 - 10' 
                           name='tamaño'
                           optionButtonSelect={optionButtonSelect}
                           saveOptionButtonSelect={saveOptionButtonSelect}
                           saveOptionButtonUnselect={saveOptionButtonUnselect}/>
            <OptionButton className='b-round option-button' 
                          value='3' 
                          text='11 - 25' 
                          name='tamaño'
                          optionButtonSelect={optionButtonSelect}
                          saveOptionButtonSelect={saveOptionButtonSelect}
                          saveOptionButtonUnselect={saveOptionButtonUnselect}/>
            <OptionButton className='b-round option-button'
                          value='4' 
                          text='26 -50' 
                          name='tamaño'
                          optionButtonSelect={optionButtonSelect}
                          saveOptionButtonSelect={saveOptionButtonSelect}
                          saveOptionButtonUnselect={saveOptionButtonUnselect}/>
            <OptionButton className='b-round option-button' 
                          value='5' 
                          text='51 - 100' 
                          name='tamaño'
                          optionButtonSelect={optionButtonSelect}
                          saveOptionButtonSelect={saveOptionButtonSelect}
                          saveOptionButtonUnselect={saveOptionButtonUnselect}/>
            <OptionButton className='b-round option-button' 
                          value='6' 
                          text='500+' 
                          name='tamaño'
                          optionButtonSelect={optionButtonSelect}
                          saveOptionButtonSelect={saveOptionButtonSelect}
                          saveOptionButtonUnselect={saveOptionButtonUnselect}/>

            <Text className="ant-form-text text-wraps" 
                  type="secondary">
              <InfoCircleOutlined /> Este logo identificará tu espacio del resto
            </Text>
            
            <Text className="ant-form-text text-wrap pt-4" 
                  type="secondary">
              Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con findo transparente
            </Text>  
             
            <Title level={5}>Color del tema</Title>
            <CustomRadio color='blue' 
                         size='50px' 
                         name='background' 
                         value='blue'/>
            <CustomRadio color='green' size='50px' name='background' value='green'/>
            <CustomRadio color='yellow' size='50px' name='background' value='yellow'/>
            <CustomRadio color='magenta' size='50px' name='background' value='magenta'/>
            <CustomRadio color='bisque' size='50px' name='background' value='bisque'/>
            <CustomRadio color='turquoise' size='50px' name='background' value='blue'/>
            <CustomRadio color='salmon' size='50px' name='background' value='salmon'/>
            <CustomRadio color='goldenrod' size='50px' name='background' value='goldenrod'/>
            <CustomRadio color='violet' size='50px' name='background' value='violet'/>
            <CustomRadio color='honeydew' size='50px' name='background' value='honeydew'/>

            <Title level={5}>Privacidad del espacio</Title>
            <Row>
              <Col span={12}>
                <PanelOption title='Opcion Uno' 
                             message='Esta es la opcion uno'
                             value={1} 
                             name='options'/>
              </Col>
              <Col span={12}>
                <PanelOption title='Opcion Uno' 
                             message='Esta es la opcion uno'
                             value={1} 
                             name='options'/>
              </Col>
            </Row>
            
            
          </Form>
        </Col>
        <Col xs={0} md={14}>
          <h1>Detalle</h1>
        </Col>
      </Row>
    </div>
  );
}

export default App;

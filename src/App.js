import './App.css'
import 'antd/dist/antd.css';
import { Form, Input, Button, Typography, Row,Col } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import Upload from './components/Upload'
import MessageForm from './components/MessageForm'


function App() {
  //style
  const style = {'FontWeight': 'bold'}
  const {Title} = Typography;

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const message1=['Este logo identificará tu espacio del resto','Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con findo transparente']
  
  return (
    <div className='container'>
      <Row>
        <Col xs={24} md={12}>
          <Title>Configuración</Title>
          <Title level={3}>Logo del espacio</Title>          
          <Upload/>
          <MessageForm message={message1}/>
          
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
              <Input placeholder="Ep: Mi espacio de trabajo"/>
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
              <Input placeholder="Ep: mi.dominio"/>
            </Form.Item>

            <Typography.Text className="ant-form-text text-wrap" type="secondary">
              <InfoCircleOutlined /> Puedes cambiar la url de tu espacio (dirección web) en cualquier momento pero por cortesía hacia tus compañeros de trabajo y otros usuarios de Plankton, por favor no lo hagas muy seguido :)
            </Typography.Text>

            <Title level={5}>¿Cuantas personas trabajan contigo, incluyendote a ti?</Title>
            <Row className='py-1'>
              <Col span={4}>
                <Button>Solo yo</Button>
              </Col>
              <Col span={4}>
                <Button>2 - 10</Button>
              </Col>
              <Col span={4}>
                <Button>11 - 25</Button>
              </Col>
              <Col span={4}>
                <Button>26 -50</Button>
              </Col>
              <Col span={4}>
                <Button>51 - 100</Button>
              </Col>
              <Col span={4}>
                <Button>500+</Button>
              </Col>
            </Row>
            <Typography.Text className="ant-form-text text-wraps" type="secondary">
              <InfoCircleOutlined /> Este logo identificará tu espacio del resto
            </Typography.Text>
            
            <Typography.Text className="ant-form-text text-wrap pt-4" type="secondary">
              Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con findo transparente
            </Typography.Text>  

            <Title level={5}>Color del tema</Title>
          </Form>
        </Col>
        <Col xs={0} md={12}>
          <h1>Detalle</h1>
        </Col>
      </Row>
    </div>
  );
}

export default App;

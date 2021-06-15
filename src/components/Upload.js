import React from 'react'
import { Upload,message,Button,Image,Row,Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import '../App.css'

const SubirLogo = ({configurations,saveConfigurations,className=''}) => {
    const {fileSelect} = configurations 
    const props = {
        name: 'file',
        /*aqui va la direccion a donde se envia la foto */
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          /*aqui se salva la direccion que se usa para acceder a la foto una vez subida al sitio*/
          saveConfigurations({...configurations,fileSelect:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'})
          if (info.file.status !== 'uploading') {
            console.log('subiendo la imagen');
          }
          if (info.file.status === 'done') {              
            message.success(`Imagen subida satisfactoriamente`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} Error al intentar subir la imagen`);
          }
        },
      };

    return(
        <Row gutter={[16,16]} align='middle' className={className}>
            <Col style={{borderRadius:'50'}}>
                { fileSelect ? <Image width={80}
                                        height={80}
                                        src={fileSelect}
                                        alt='Img'
                                        style={{borderRadius:'50%',
                                                textAlign:'center',
                                                fontSize:'34px',
                                                fontWeight:'bold',
                                                color:'white',
                                                backgroundColor:'#aaa'}}/> 
                            :  <div style={{borderRadius:'50%',
                                    width: '80px',
                                    height: '80px',
                                    overflow:'hidden',
                                    backgroundColor:'rgb(107, 104, 104)',
                                    fontWeight:'bold',
                                    fontSize:40,
                                    textAlign:'center',
                                    color:'white',
                                    position:'relative'}}>                     
                                    <span style={{position:'absolute',
                                    top:'5px',
                                    left:'28px'}}>B</span> 
                                </div>
                }
                
                   
            </Col>
            <Col>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />} className='b-round'>Subir logo</Button>
                </Upload>
            </Col>
        </Row>
    );
}

export default SubirLogo;
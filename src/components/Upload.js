import React from 'react'
import { Upload,message,Button,Image,Row,Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import '../App.css'

const SubirLogo = ({configurations,saveConfigurations,className=''}) => {
    const {fileSelect} = configurations 
    const props = {
        name: 'file',
        /*action recive the url where the picture will be send*/
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          /*this line get the url where the picture can be see*/
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
                { fileSelect ? <Image width={67}
                                        height={67}
                                        src={fileSelect}
                                        alt='Img'
                                        style={{borderRadius:'50%',
                                                textAlign:'center',
                                                fontSize:'37px',
                                                fontWeight:'bold',
                                                color:'white',
                                                backgroundColor:'#343C4A'}}/> 
                            :  <div style={{borderRadius:'50%',
                                    width: '67px',
                                    height: '67px',
                                    overflow:'hidden',
                                    backgroundColor:'#343C4A',
                                    fontWeight:'bold',
                                    fontSize:30,
                                    textAlign:'center',
                                    color:'white',
                                    position:'relative'}}>                     
                                    <span style={{position:'absolute',
                                    top:'8px',
                                    left:'24px'}}>B</span> 
                                </div>
                }
                
                   
            </Col>
            <Col>
                <Upload {...props}>
                    <Button className='upload-button'>
                      <span className='upload-button-icon'></span>Subir logo
                    </Button>
                </Upload>
            </Col>
        </Row>
    );
}

export default SubirLogo;
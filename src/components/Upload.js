import React from 'react'
import { Upload,message,Button,Image,Avatar,Row,Col } from 'antd';
import { AntDesignOutlined,VerticalAlignTopOutlined,UploadOutlined } from '@ant-design/icons';
import '../App.css'

const SubirLogo = ({saveFileSelect,className=''}) => {

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            saveFileSelect(info.file.name)
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    return(
        <Row gutter={[16,16]} align='middle' className={className}>
            <Col>
                {/* <Avatar
                    size={{
                    xs: 24,
                    sm: 32,
                    md: 40,
                    lg: 64,
                    xl: 70,
                    xxl: 90,
                    }}
                    icon={<AntDesignOutlined />}
                /> */}
                <Image width={80}
                       height={80}
                       src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                       style={{borderRadius:'50%',overflow:'hidden'}}/>
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
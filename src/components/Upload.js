import React from 'react'
import { Button,Avatar,Row,Col } from 'antd';
import { AntDesignOutlined,VerticalAlignTopOutlined } from '@ant-design/icons';
import '../App.css'

const SubirLogo = ({className=''}) => {
    return(
        <Row gutter={[16,16]} align='middle' className={className}>
            <Col>
                <Avatar
                    size={{
                    xs: 24,
                    sm: 32,
                    md: 40,
                    lg: 64,
                    xl: 70,
                    xxl: 90,
                    }}
                    icon={<AntDesignOutlined />}
                />
            </Col>
            <Col>
                <Button icon={<VerticalAlignTopOutlined />} className='b-round'>Subir logo</Button>
            </Col>
        </Row>
    );
}

export default SubirLogo;
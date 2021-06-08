import React from 'react'
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import { Row,Col } from 'antd';

const SubirLogo = () => {
    return(
        <Row gutter={[16,16]} align='middle'>
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
                <Button icon={<VerticalAlignTopOutlined />}>Subir logo</Button>
            </Col>
        </Row>
    );
}

export default SubirLogo;
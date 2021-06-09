import React,{Fragment} from 'react'
import { Row,Col,Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const Message = ({infoIcon=false,message, className}) => {
    return (
        <Row align="bottom" className={className}>
            <Col span={1}>
                <Typography.Text className="ant-form-text text-wraps" type="secondary" style={{fontSize:'17px'}}>
                    {infoIcon ? <InfoCircleOutlined rotate='180'/> : null}  
                </Typography.Text>   
            </Col>
            <Col span={23}>
            <Typography.Text className="ant-form-text text-wraps" type="secondary">
                {message}
            </Typography.Text>               
            </Col>
        </Row>
    )
}

export default Message
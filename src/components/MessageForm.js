import React,{Fragment} from 'react'
import { Row,Col,Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const MessageForm = ({message}) => {
    return (
        <Row align="top">
            <Col span={1}>
                    <InfoCircleOutlined/>
            </Col>
            <Col span={23}>
                {message.map((m)=>(
                    <Fragment>
                        <Typography.Text className="ant-form-text text-wraps" type="secondary">
                            {m}
                        </Typography.Text>
                        <br/>
                    </Fragment>
                ))}                
            </Col>
        </Row>
    )
}

export default MessageForm
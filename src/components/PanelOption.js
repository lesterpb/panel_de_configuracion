import styled from '@emotion/styled'
import { Radio,Row,Col,Typography } from 'antd';

const Panel = styled.div`    
    height: 5rem;
    width: 100%;
    border: 1px solid #40a9ff;
`

const PanelOption = ({title,message,value,name}) => {
    const {Title,Text} = Typography
    return(
        <Panel>
            <Row>
                <Col span={1}>
                    <Radio name={name} value={value}/>
                </Col>
                <Col span={23}>
                    <Title>{title}</Title>
                    <Text>{message}</Text>
                </Col>
            </Row>
        </Panel>
    )
}

export default PanelOption

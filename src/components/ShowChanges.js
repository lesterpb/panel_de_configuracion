import React from 'react'
import styled from '@emotion/styled'
import { Input } from 'antd';
import { Typography,Image,Row,Col } from 'antd';
import '../css/Components.css'

const Window = styled.div`
    height: 30rem;
    border: 1px solid #bbb;
    border-radius: 3px;
    margin-left: 10rem;
    margin-top: 5rem;
    overflow: hidden;
`

const Content = styled.div`
    height: 100%;
    width: 100%;
    border-top: 1px solid #bbb;
    padding: 0.5rem;
    background-color: ${props => props.background};
`

const ShowChanges = ({configurations,colors}) => {
    const {nameSpace,url,fileSelect,colorSelect} = configurations
    return (
        <Window>
            <div style={{padding:'0.5rem'}}>
                <Input addonBefore="http://" 
                       value={url} 
                       addonAfter=".dofleini.com" 
                       readOnly/>
            </div>
            <Content background={colors[colorSelect]}>
                <Row gutter={[16,16]} align='middle'>
                    <Col>
                        { fileSelect ? <Image width={50}
                                                height={50}
                                                src={fileSelect}
                                                alt='B'
                                                style={{borderRadius:'50%',boxShadow:'0px 0px 2px 1px white'}}/> 
                                    :  <div style={{borderRadius:'50%',
                                            width: '50px',
                                            height: '50px',
                                            backgroundColor:'rgb(107, 104, 104)',
                                            fontWeight:'bold',
                                            fontSize:20,
                                            textAlign:'center',
                                            color:'white',
                                            position:'relative',
                                            boxShadow:'0px 0px 5px 1px white'}}>                     
                                            <span style={{position:'absolute',
                                            top:'8px',
                                            left:'19px'}}>B</span> 
                                        </div>
                        }
                        
                        
                    </Col>
                    <Col>
                        <Typography.Text type='' style={{color:'white',fontWeight:'bold'}}>
                            {nameSpace ? nameSpace
                                       : 'Nombre del espacio'}
                        </Typography.Text>
                    </Col>
                </Row>
            </Content>
        </Window>
    )
}

export default ShowChanges
import { Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const Message = ({infoIcon=false,message, className='',style=null}) => {
    return (
        
        <div style={{marginLeft:'20px',marginBottom:'10px',...style}}>
        <div style={{display:'flex',justifyContent:'normal'}}>
            <Typography.Text className="ant-form-text text-wraps" type="secondary" style={{fontSize:'17px'}}>
                {infoIcon ? <div style={{position:'relative'}}>
                                <InfoCircleOutlined rotate='180' 
                                                    style={{marginRight:'13px',position:'absolute',top:'3px',left:'-22px'}}/> 
                            </div>
                            : null}  
            </Typography.Text> 
            <div>
                <Typography.Text className="ant-form-text text-wraps" 
                                    type="secondary">
                    {message}
                </Typography.Text>
            </div>   
        </div>        
        </div>


    )
}

export default Message
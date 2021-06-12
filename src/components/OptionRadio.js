import { Typography,Radio } from 'antd';

const OptionRadio = ({message, value, action=null, className='',style=null}) => {
    return (
        
        <div style={{marginLeft:'20px',marginBottom:'10px',...style}} className={className}>
        <div style={{display:'flex',justifyContent:'normal'}}>
            <Typography.Text className="ant-form-text text-wraps" type="secondary" style={{fontSize:'17px'}}>
                <Radio type='radio' value={value} id={`radio-panel-${value}`} onChange={action}/>  
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

export default OptionRadio
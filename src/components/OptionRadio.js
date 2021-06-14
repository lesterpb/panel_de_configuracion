import { Typography,Radio } from 'antd';

const OptionRadio = ({option,description, value, action=null, className='',style=null}) => {
    return (
        
        <div style={style} className={className}>
            <Radio type='radio' 
                   value={value} 
                   id={`radio-panel-${value}`} 
                   onChange={action}>
                <span id={`radio-text-${value}`} 
                        style={{fontWeight:600}}>
                    {option}
                </span>
                <br/>
                <Typography.Text className="ant-form-text text-wraps" 
                                type="secondary"
                                style={{marginTop:'0.3rem'}}>
                    {description}
                </Typography.Text>
            </Radio>       
        </div>


    )
}

export default OptionRadio
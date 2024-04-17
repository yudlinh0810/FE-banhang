import React from 'react';
import { Input } from 'antd';
const InputComponent = ({ size, placeholder, styleInput, ...rest }) => {
  return <Input size={size} placeholder={placeholder} style={styleInput} {...rest} />;
};

export default InputComponent;

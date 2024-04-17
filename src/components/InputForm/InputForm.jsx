import { Input } from 'antd';
import React from 'react';
import './style.css';

const InputForm = (props) => {
  const { placeholder = 'Nhập Text', ...rests } = props;
  const handleOnChangeInput = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Input
      className='inputs'
      placeholder={placeholder}
      value={props.value}
      {...rests}
      onChange={handleOnChangeInput}
    />
  );
};
export default InputForm;

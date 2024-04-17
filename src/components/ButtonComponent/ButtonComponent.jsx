import React from 'react';
import { Button } from 'antd';
const ButtonComponent = ({ size, styleButton, textButton, styleTextButton, disabled, ...rest }) => {
  return (
    <Button
      style={{
        ...styleButton,
        background: disabled ? '#777' : styleButton?.background ?? 'initial',
      }}
      size={size}
      {...rest}
    >
      <span style={styleTextButton}>{textButton}</span>
    </Button>
  );
};

export default ButtonComponent;

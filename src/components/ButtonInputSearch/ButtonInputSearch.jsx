import React from 'react';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { SearchOutlined } from '@ant-design/icons';
const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = '#fff',
    backgroundColorButton = '#fff',
    colorButton = '#000',
  } = props;
  return (
    <div style={{ display: 'flex' }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        variant={bordered}
        styleInput={{ backgroundColor: backgroundColorInput }}
      />
      <ButtonComponent
        size={size}
        styleButton={{ background: backgroundColorButton, border: !bordered && 'none' }}
        icon={<SearchOutlined color={colorButton} style={{ color: 'fff' }} />}
        textButton={textButton}
        styleTextButton={{ color: colorButton }}
      ></ButtonComponent>
    </div>
  );
};

export default ButtonInputSearch;

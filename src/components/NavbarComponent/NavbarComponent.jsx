import React from 'react';
import { WrapperContent, WrapperLabelText, WrapperTextValue } from './style';
import { Checkbox } from 'antd';

const NavbarComponent = (props) => {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case 'text':
        return options.map((option, index) => {
          return <WrapperTextValue key={index}>{option}</WrapperTextValue>;
        });
      case 'checkbox':
        return (
          <Checkbox.Group
            style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}
            onChange={onChange}
          >
            {options.map((option) => {
              return (
                <Checkbox key={option.value} value={option.value}>
                  {option.label}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        );
      default:
        return {};
    }
  };
  return (
    <div>
      <WrapperLabelText>List Product</WrapperLabelText>
      <WrapperContent>{renderContent('text', ['Ao thun ', 'quan tay'])}</WrapperContent>
    </div>
  );
};

export default NavbarComponent;

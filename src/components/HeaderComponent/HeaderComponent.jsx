import React from 'react';
import { Badge, Col } from 'antd';
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall,
} from './style';
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const HeaderComponent = () => {
  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate('/sign-in');
  };
  const user = useSelector((state) => state.user);
  console.log('user', user);
  return (
    <div
      style={{
        width: '100%',
        background: 'rgb(26, 148, 255)',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
      }}
    >
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader>SEVEN</WrapperTextHeader>
        </Col>
        <Col span={13}>
          <ButtonInputSearch
            size='lager'
            bordered={false}
            textButton='Search'
            placeholder='input search text'
            // onSearch={onSearch}
          />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center' }}>
          <WrapperHeaderAccount>
            <div>
              <UserOutlined style={{ fontSize: '30px' }} />
            </div>
            {user?.name ? (
              <div>{user.name}</div>
            ) : (
              <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
                <WrapperTextHeaderSmall>Login/Register</WrapperTextHeaderSmall>
                <div>
                  <WrapperTextHeaderSmall>Account</WrapperTextHeaderSmall>
                  <CaretDownOutlined style={{ position: 'relative', top: '2px', left: '2px' }} />
                </div>
              </div>
            )}
          </WrapperHeaderAccount>
          <div>
            <Badge count={7} style={{ fontSize: '10px', position: 'absolute', top: '10px' }}>
              <ShoppingCartOutlined
                style={{
                  color: '#fff',
                  fontSize: '30px',
                  position: 'relative',
                  top: '10px',
                }}
              />
            </Badge>
            <WrapperTextHeaderSmall
              style={{ position: 'relative', top: '6px', left: '4px', color: '#fff' }}
            >
              Cart
            </WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

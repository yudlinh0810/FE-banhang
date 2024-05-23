import React, { useState } from 'react';
import { Badge, Col, Popover } from 'antd';
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall,
} from './style';
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { logoutUser } from '../../service/UserService';
import { resetUser } from '../../redux/slices/userSlice';
import Loading from '../LoadingComponent/Loading';
export const HeaderComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleNavigateLogin = () => {
    navigate('/sign-in');
  };
  const user = useSelector((state) => state.user);
  console.log('user', user);
  const handleLogout = async () => {
    setLoading(true);
    localStorage.clear();
    await logoutUser();
    dispatch(resetUser());
    setLoading(false);
  };
  const content = (
    <div>
      <p>Thông tin tài khoản</p>
      <p>Đổi mật khẩu</p>
    </div>
  );
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
          <Loading isPending={loading}>
            <WrapperHeaderAccount>
              <div>
                <UserOutlined style={{ fontSize: '30px' }} />
              </div>
              {user?.name ? (
                <>
                  {/* <div className='dropdown'>
                  <p className='username'>{user?.name}</p>
                  <div className='dropdown-content'>
                    <p className='content'>Thông tin chi tiết</p>
                    <p className='content'>Đổi mật khẩu</p>
                    <p className='content'>function 3</p>
                  </div>
                </div> */}
                  <Popover content={content} trigger='hover'>
                    <div className='username'>{user?.name}</div>
                  </Popover>
                </>
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
          </Loading>
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
          {user?.name ? (
            <div id='logout' onClick={handleLogout}>
              Logout
            </div>
          ) : (
            <div></div>
          )}
        </Col>
      </WrapperHeader>
    </div>
  );
};

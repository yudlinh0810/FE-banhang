import React, { useEffect, useState } from 'react';
import { WrapperContainerLeft, WrapperContainerRight } from './style';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import logoImageL_R from '../../assets/images/logoRegister.png';
import { Image } from 'antd';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import './style.css';
import { useNavigate } from 'react-router-dom';
import * as UserService from '../../service/UserService';
import { useMutationHooks } from '../../hooks/UseMutationHook';
import Loading from '../../components/LoadingComponent/Loading';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/slices/userSlice';

export const SignInPage = () => {
  const [isShowPassword, setIsShowPassWord] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //
  const mutation = useMutationHooks((data) => UserService.loginUser(data));
  const { data, isPending, isSuccess } = mutation;
  useEffect(() => {
    if (isSuccess) {
      navigate('/');
      localStorage.setItem('access_token', JSON.stringify(data?.access_token));
      if (data?.access_token) {
        const decoded = jwtDecode(data?.access_token);
        if (decoded?.id) {
          handleGetDetailUser(decoded?.id, data?.access_token);
        }
      }
    }
  }, [isSuccess]);
  const handleGetDetailUser = async (id, access_token) => {
    const res = await UserService.getDetailsUser(id, access_token);
    dispatch(updateUser({ ...res?.data, access_token: access_token }));
  };
  //
  const handleOnChangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnChangePassword = (value) => {
    setPassword(value);
  };
  const handNavigateSignUp = () => {
    navigate('/sign-up');
  };
  const handleSignIn = () => {
    mutation.mutate({
      email,
      password,
    });
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgb(0, 0, 0, 0.53)',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '800px',
          height: '446px',
          borderRadius: '12px',
          background: '#fff',
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p className='tag_p'>Đăng nhập hoặc tạo tài khoản</p>
          <InputForm placeholder='abc123@gmail.com' value={email} onChange={handleOnChangeEmail} />
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowPassWord(!isShowPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                fontSize: '16px',
                top: '20px',
                right: '8px',
              }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              style={{ margin: '12px 0' }}
              placeholder='password'
              type={isShowPassword ? 'text' : 'password'}
              value={password}
              onChange={handleOnChangePassword}
            />
          </div>
          {data?.status === 'ERR' && (
            <span style={{ color: 'red', fontSize: '12px', marginBottom: '8px' }}>
              {data?.message}
            </span>
          )}
          <Loading isPending={isPending}>
            <ButtonComponent
              disabled={!email.length || !password.length}
              onClick={handleSignIn}
              size={40}
              styleButton={{
                background: 'rgb(255, 57, 69)',
                height: '48px',
                width: '100%',
                border: 'none',
                borderRadius: '6px',
              }}
              textButton={'Đăng nhập'}
              styleTextButton={{ color: '#fff' }}
            />
          </Loading>
          <p className='tag_p cursor' style={{ color: 'rgb(13, 92, 182)' }}>
            Quên mật khẩu?
          </p>
          <p className='tag_p'>
            Chưa có tài khoản?{' '}
            <span
              className='tag_p cursor'
              style={{ color: 'rgb(13, 92, 182)' }}
              onClick={handNavigateSignUp}
            >
              {' '}
              Tạo tài khoản
            </span>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={logoImageL_R}
            preview={false}
            alt={'image_logo_L_R'}
            height={'203px'}
            width={'203px'}
          />
          <h3 className='mstyl'>Mua sắm tại yudlinh</h3>
          <span className='sudmn'>Siêu ưu đãi mỗi ngày</span>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

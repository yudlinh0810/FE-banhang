import React, { useEffect, useState } from 'react';
import InputForm from '../../components/InputForm/InputForm';
import { WrapperContainerLeft, WrapperContainerRight } from './style';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { Image } from 'antd';
import logoImageL_R from '../../assets/images/logoRegister.png';
import './style.css';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useMutationHooks } from '../../hooks/UseMutationHook';
import * as UserService from '../../service/UserService';
import Loading from '../../components/LoadingComponent/Loading';
import * as message from '../../components/Message/Message';

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassWord] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  // const handleOnChangeName = (value) => {
  //   setName(value);
  // };
  // const handleOnChangePhone = (value) => {
  //   setPhone(value);
  // };

  const handleOnChangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnChangeName = (value) => {
    setName(value);
  };
  const handleOnchangePassword = (value) => {
    setPassword(value);
  };
  const handleOnChangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };
  // const togglePasswordVisibility = () => {
  //   setIsShowPassWord((pre) => !pre);
  // };
  const handNavigateSignIn = () => {
    navigate('/sign-in');
  };
  const mutation = useMutationHooks((data) => UserService.signUpUser(data));
  console.log(mutation);
  const { data, isPending, isSuccess, isError } = mutation;
  useEffect(() => {
    if (isSuccess) {
      message.success();
      handNavigateSignIn();
    } else if (isError) {
      message.error();
    }
  }, [isSuccess, isError]);
  const navigate = useNavigate();
  const handleSignUp = () => {
    mutation.mutate({
      // name,
      email,
      password,
      confirmPassword,
      // phone,
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
          <InputForm placeholder='name user' value={name} onChange={handleOnChangeName} />
          {/* <InputForm placeholder='0796636720' value={phone} onChange={handleOnChangePhone} /> */}
          <div style={{ position: 'relative' }}>
            <span
              style={{
                zIndex: 10,
                position: 'absolute',
                fontSize: '16px',
                top: '22px',
                right: '8px',
              }}
              onClick={() => setIsShowPassWord(!isShowPassword)}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              style={{ margin: '12px 0' }}
              placeholder='password'
              type={isShowPassword ? 'text' : 'password'}
              value={password}
              onChange={handleOnchangePassword}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                fontSize: '16px',
                top: '12px',
                right: '8px',
              }}
            >
              {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              style={{ marginBottom: '12px' }}
              placeholder='confirm password'
              type={isShowConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={handleOnChangeConfirmPassword}
            />
          </div>
          {/* <InputForm style={{ margin: '12px 0' }} placeholder='password' />
          <InputForm style={{ marginBottom: '12px' }} placeholder='confirm password' /> */}
          {data?.status === 'ERR' && (
            <span style={{ fontSize: '14px', color: 'red', marginBottom: '8px' }}>
              {data.message}
            </span>
          )}
          <Loading isPending={isPending}>
            <ButtonComponent
              disabled={email.length === 0 || password.length === 0 || confirmPassword.length === 0}
              onClick={handleSignUp}
              size={40}
              styleButton={{
                background: 'rgb(255, 57, 69)',
                height: '48px',
                width: '100%',
                border: 'none',
                borderRadius: '6px',
              }}
              textButton={'Đăng ký'}
              styleTextButton={{ color: '#fff' }}
            />
          </Loading>
          {/* <p className='tag_p' style={{ color: 'rgb(13, 92, 182)' }}>
            Quên mật khẩu?
          </p> */}
          <p className='tag_p'>
            Bạn đã có tài khoản?{' '}
            <span
              className='tag_p'
              style={{ color: 'rgb(13, 92, 182)', cursor: 'pointer' }}
              onClick={handNavigateSignIn}
            >
              {' '}
              Đăng nhập
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

export default SignUpPage;

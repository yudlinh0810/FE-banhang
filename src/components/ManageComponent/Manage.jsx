import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
const Manage = () => {
  const navigator = useNavigate();
  const handleAdminHomePage = () => {
    navigator('/Admin');
  };
  const handleManageUserPage = () => {
    navigator('/manage-user');
  };
  const handleManageProductPage = () => {
    navigator('/manage-product');
  };
  const handleManageInvoicePage = () => {
    navigator('/manage-invoice');
  };
  return (
    <div>
      <div className='item-manage' onClick={handleAdminHomePage}>
        <label htmlFor=''>Admin</label>
      </div>
      <div className='item-manage' onClick={handleManageUserPage}>
        <label htmlFor=''>Quản lý người dùng</label>
      </div>
      <div className='item-manage' onClick={handleManageProductPage}>
        <label htmlFor=''>Quản lý sản phẩm</label>
      </div>
      <div className='item-manage' onClick={handleManageInvoicePage}>
        <label htmlFor=''>Quản lý hóa đơn</label>
      </div>
    </div>
  );
};

export default Manage;

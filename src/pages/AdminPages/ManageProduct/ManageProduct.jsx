import React from 'react';
import HeaderAdmin from '../../../components/HeaderComponent/HeaderAdmin/HeaderAdmin';
import Manage from '../../../components/ManageComponent/Manage';
import './style.scss';
const ManageProduct = () => {
  return (
    <>
      <HeaderAdmin />
      <div style={{ display: 'flex' }}>
        <Manage />
        <div style={{ fontSize: '24px' }}>Manage Product</div>
      </div>
    </>
  );
};

export default ManageProduct;

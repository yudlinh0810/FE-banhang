import React from 'react';
import HeaderAdmin from '../../../components/HeaderComponent/HeaderAdmin/HeaderAdmin';
import Manage from '../../../components/ManageComponent/Manage';
import './style.scss';
const ManageUser = () => {
  return (
    <>
      <HeaderAdmin />
      <div style={{ display: 'flex' }}>
        <Manage />
        <div style={{ fontSize: '24px' }}>Manage User</div>
      </div>
    </>
  );
};

export default ManageUser;

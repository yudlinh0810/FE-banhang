import React from 'react';
import './style.css';
const ProfilePage = (props) => {
  return (
    <div className='flex'>
      <div className='menu'>
        <p className='menu-item'>1</p>
        <p className='menu-item'>2</p>
        <p className='menu-item'>3</p>
      </div>
      <div className='info'>
        <p>info</p>
      </div>
    </div>
  );
};

export default ProfilePage;

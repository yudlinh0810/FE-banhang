import { Menu } from 'antd';
import React, { useState } from 'react';
import { getItem } from '../../../utils';
const AdminHome = (props) => {
  // const items = [
  //   getItem('Quản lý người dùng', 'sub 1', [
  //     getItem('Cập nhật tài khoản', 1),
  //     getItem('Xóa tài khoản', 2),
  //   ]),
  //   getItem('Quản lý Sản phẩm', 'sub 2', [
  //     getItem('Thêm sản phẩm', 1),
  //     getItem('Cập nhật sản phẩm', 2),
  //     getItem('Xóa sản phẩm', 3),
  //   ]),
  // ];
  const items = [
    {
      key: '1',
      label: 'Navigation One',
      children: [
        {
          key: '11',
          label: 'Option 1',
        },
        {
          key: '12',
          label: 'Option 2',
        },
        {
          key: '13',
          label: 'Option 3',
        },
        {
          key: '14',
          label: 'Option 4',
        },
      ],
    },
    {
      key: '2',
      label: 'Navigation Two',
      children: [
        {
          key: '21',
          label: 'Option 1',
        },
        {
          key: '22',
          label: 'Option 2',
        },
        {
          key: '23',
          label: 'Submenu',
          children: [
            {
              key: '231',
              label: 'Option 1',
            },
            {
              key: '232',
              label: 'Option 2',
            },
            {
              key: '233',
              label: 'Option 3',
            },
          ],
        },
        {
          key: '24',
          label: 'Submenu 2',
          children: [
            {
              key: '241',
              label: 'Option 1',
            },
            {
              key: '242',
              label: 'Option 2',
            },
            {
              key: '243',
              label: 'Option 3',
            },
          ],
        },
      ],
    },
    {
      key: '3',
      label: 'Navigation Three',
      children: [
        {
          key: '31',
          label: 'Option 1',
        },
        {
          key: '32',
          label: 'Option 2',
        },
        {
          key: '33',
          label: 'Option 3',
        },
        {
          key: '34',
          label: 'Option 4',
        },
      ],
    },
  ];
  const rootSubMenuKeys = ['sub1', 'sub2', 'sub3'];
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => {
      return openKeys.indexOf(key) === -1;
    });
    if (rootSubMenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      mode='inline'
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 256,
      }}
      items={items}
    ></Menu>
  );
};

export default AdminHome;

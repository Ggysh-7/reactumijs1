import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';

const HeaderAvatar = () => (
  <>
    <div>
      <Avatar shape="square" size="small" icon={<UserOutlined />} />
    </div>
  </>
);

export default HeaderAvatar;
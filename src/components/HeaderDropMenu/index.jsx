import { SettingOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Menu, message, Space } from 'antd';
import React from 'react';
import {useModel,history} from 'umi'
import HeaderAvatar from '../HeaderAvatar/HeaderAvatar';

const HeaderDropMenu = () => {
  const { initialState,setInitialState } = useModel('@@initialState');  
  const handleMenuClick = ({key}) => {
    if(key==='3'){
      setInitialState({isLogin:false,userInfo:null})
      localStorage.removeItem('userInfo')
      sessionStorage.removeItem('userInfo')
      history.push('./login')
      setTimeout(()=>{
        history.push('./login')
    },1000)
      message.info('退出成功');
    }
  };
  
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: '个人信息',
          key: '1',
          icon: <UserOutlined />,
        },
        {
          label: '设置',
          key: '2',
          icon: <SettingOutlined />,
        },
        {
          label: '退出登录',
          key: '3',
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );
  return (
  <Space wrap>
    <HeaderAvatar/>
    <Dropdown.Button overlay={menu}>
      Dropdown
    </Dropdown.Button>
  </Space>
  )
};

export default HeaderDropMenu;

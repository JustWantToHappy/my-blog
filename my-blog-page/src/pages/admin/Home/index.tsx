import { Switch, Avatar } from 'antd';
import { SettingOutlined, FileAddOutlined, CloudOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from 'react';
import { Admin, Main } from "./style"
const Home: React.FC = () => {
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  type MenuItem = {
    id: number;
    name: string;
    icon?: React.ReactNode;
  }
  const menu: Array<MenuItem> = [
    { id: 1, name: "My World", icon: <CloudOutlined /> },
    { id: 2, name: "New Article", icon: <FileAddOutlined /> },
    { id: 3, name: "Comments", icon: <MessageOutlined /> },
    { id: 4, name: "Settings", icon: <SettingOutlined /> },
  ]
  return (
    <Admin inputTheme={theme}>
      <div>
        <div className="avatar">
          <Avatar size="large" icon={<UserOutlined />} />
        </div>
        <div className='menu'>
          <ul>
            {menu.map((item => {
              return <li key={item.id}>
                <span className="icon">{item.icon}</span>
                <span>{item.name}</span>
              </li>
            }))}
          </ul>
        </div>
        <div className='shift'>
          <span style={{ marginRight: "10px" }}>theme</span>
          <Switch onClick={changeTheme} />
        </div>
      </div>
      <Main />
    </Admin>
  );
};

export default Home;
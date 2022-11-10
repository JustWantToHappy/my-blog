import { Switch, Avatar } from 'antd';
import { SettingOutlined, FileAddOutlined, CloudOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from "react-router-dom"
import { Admin, Main } from "./style"
const Home: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const [current, setCurrent] = useState(1);
  const navigate = useNavigate();

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
    path: string;
  }
  const menu: Array<MenuItem> = [
    { id: 1, name: "My World", icon: <CloudOutlined />, path: "world" },
    { id: 2, name: "New Article", icon: <FileAddOutlined />, path: "article" },
    { id: 3, name: "Comments", icon: <MessageOutlined />, path: "comments" },
    { id: 4, name: "Settings", icon: <SettingOutlined />, path: "settings" },
  ]
  const changeRoute = (item: MenuItem) => {
    setCurrent(item.id);
    navigate(item.path);
  }
  useEffect(() => {
    if (window.location.pathname === '/admin/index') {
      navigate("world");
    }
  });
  return (
    <Admin inputTheme={theme}>
      <div>
        <div className="avatar">
          <Avatar size={60} icon={<UserOutlined />} />
          <h4 style={{ marginTop: "10%" }}>useHook</h4>
        </div>
        <div className='menu'>
          <ul>
            {menu.map((item => {
              return <li key={item.id} style={{ color: item.id === current ? theme === 'dark' ? '#E6A23C' : '#00FFFF' : '' }} onClick={() => changeRoute(item)}>
                <span className="icon">{item.icon}</span>
                <span>{item.name}</span>
              </li>
            }))}
          </ul>
        </div>
        <div className='shift'>
          <span style={{ marginRight: "10px" }}>Dark</span>
          <Switch onClick={changeTheme} />
        </div>
      </div>
      <Main inputTheme={theme}>
        <Outlet />
      </Main>
    </Admin>
  );
};

export default Home;
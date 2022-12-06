import React, { useState } from 'react';
import Container from './Layout/Container';
import Header from './Layout/Header';
import { BrowserRouter } from "react-router-dom"
import ReturnTop from './components/ReturnTop';
import "animate.css"
export const Context = React.createContext({ showMenu: false, closeOrOpen: () => { }, theme: true, changeTheme: () => { } });
function App() {
  const [showMenu, setShowMenu] = useState(false);
  // 主题颜色的设置,true表示白天模式
  const [theme, setTheme] = useState(true);
  const closeOrOpen = () => {
    setShowMenu(!showMenu);
  }
  const changeTheme = () => {
    setTheme(!theme);
  }
  return (
    <>
      <BrowserRouter>
        <Context.Provider value={{ showMenu, closeOrOpen, theme, changeTheme }}>
          <Header />
          <Container />
          <ReturnTop />
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { useState} from 'react';
import Container from './Layout/Container';
import Header from './Layout/Header';
import { BrowserRouter } from "react-router-dom"
import ReturnTop from './components/ReturnTop';
export const Context = React.createContext({showMenu:false,closeOrOpen:()=>{}});
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const closeOrOpen = () => {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <BrowserRouter>
          <Context.Provider value={{showMenu,closeOrOpen}}>
            <Header />
            <Container />
            <ReturnTop/>
          </Context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

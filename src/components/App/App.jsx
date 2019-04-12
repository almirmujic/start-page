import React, { useState } from 'react';
// import '../../main';
import Search from '../Search/Search';
import Headlines from '../Headlines/Headlines';
import Bookmarks from '../Bookmarks/Bookmarks';
import ModeBtn from '../ModeBtn/ModeBtn';
import './App.css';

function App() {
  const [isNightMode, setMode] = useState(false);
  const mode = () => setMode(!isNightMode);

  return (
    <div className={isNightMode ? 'night' : ''}>
      <div className="wrapper">
        <ModeBtn mode={mode} />
        <div className="container">
          <Search />
          <Bookmarks />
          <Headlines />
        </div>
      </div>
    </div>
  );
}

export default App;

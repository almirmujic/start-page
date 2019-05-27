import React, { useState } from 'react';
import Greeting from '../Greeting/Greeting';
import Clock from '../Clock/Clock';
import Search from '../Search/Search';
import Bookmarks from '../Bookmarks/Bookmarks';
import ModeBtn from '../ModeBtn/ModeBtn';
import './App.css';

function App() {
  //State
  const [isNightMode, setMode] = useState(false);

  const mode = () => setMode(!isNightMode);

  return (
    <div className={isNightMode ? 'night' : 'light'}>
      <div className="wrapper">
        <div className="container">
          <ModeBtn mode={mode} />
          <Greeting />
          <Clock />
          <Search />
          <Bookmarks />
        </div>
      </div>
    </div>
  );
}

export default App;

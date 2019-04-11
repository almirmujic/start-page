import React, { useState } from 'react';
import Search from '../Search/Search';
import Headlines from '../Headlines/Headlines';
import './App.css';

function App() {
  const [isNightMode, setMode] = useState(false);
  const mode = () => setMode(!isNightMode);

  return (
    <div className={isNightMode ? 'night' : ''}>
      <div className="wrapper">
        <button onClick={mode}>Mode</button>
        <div className="container">
          <Search />
          <Headlines />
        </div>
      </div>
    </div>
  );
}

export default App;

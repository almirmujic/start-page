import React from 'react';
import Search from '../Search/Search';
import Headlines from '../Headlines/Headlines';
import './App.css';

function App() {
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <Search />
          <Headlines />
        </div>
      </div>
    </div>
  );
}

export default App;

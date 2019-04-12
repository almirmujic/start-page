import React from 'react';
import './ModeBtn.css';

function ModeBtn({ mode }) {
  return (
    <label className="switch">
      <input type="checkbox" onClick={mode} />
      <span className="slider round" />
    </label>
  );
}

export default ModeBtn;

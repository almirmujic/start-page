import React from 'react';
import './ModeBtn.css';

function ModeBtn({ mode }) {
  return (
    <label class="switch">
      <input type="checkbox" onClick={mode} />
      <span class="slider round" />
    </label>
  );
}

export default ModeBtn;

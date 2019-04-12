import React, { useState } from 'react';
import './Clock.css';

const Clock = () => {
  const [getTime, setTime] = useState({
    time: new Date().toLocaleTimeString()
  });

  return (
    <div className="clock">
      {getTime.time}
      <p>Hello</p>
    </div>
  );
};

export default Clock;

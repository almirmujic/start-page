import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
  const [getTime, setTime] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setTime(new Date());
  }

  return (
    <div className="clock">
      {getTime.toLocaleTimeString()}
      <p>Hello</p>
    </div>
  );
};

export default Clock;

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
      {getTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </div>
  );
};

export default Clock;

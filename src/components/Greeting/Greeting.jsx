import React from 'react';
import './Greeting.css';

const info = {
  name: 'Almir'
};

const Greeting = () => {
  return <h1>Hello, {info.name}.</h1>;
};

export default Greeting;

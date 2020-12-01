import React, { useState } from 'react';

const UseStateBasics = () => {
  const handleClick = () => {
    if (text === "Akash Here..."){
      setText('hello world')
    }
    else {
      setText('Hello World')
    }
  }
  const [text,setText] = useState('Akash Here...')
  return( 
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>Change Title</button>
    </React.Fragment>);
};

export default UseStateBasics;

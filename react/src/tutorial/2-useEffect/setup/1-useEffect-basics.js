import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [x,sy] = useState(0)

  useEffect(() => {
  console.log('rcall use effecr')
  if (x >= 3){
    document.title=`New M(${x})`
  }


  },[x])
  console.log('render compo')
  return <>
  <h1>{x}</h1>
  <button className="btn" onClick={() => sy(x+1)}>Click</button>

  </>;
};

export default UseEffectBasics;

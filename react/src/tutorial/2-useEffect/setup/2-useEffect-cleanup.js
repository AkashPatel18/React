import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(1000000000000000000000000)

  }


  useEffect(() => {
    window.addEventListener('click',checkSize)
  })

  return (
  <>
  <h1>window</h1>
  <h2>{size} PX</h2>


  
  
  </>
  )};

export default UseEffectCleanup;

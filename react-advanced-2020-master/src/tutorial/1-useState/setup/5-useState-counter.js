import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue] = useState(0)
  const complexIcrease = () => {
    setTimeout (() => {setValue((prevState)=> {
      return prevState+1
    })} , 2000)
    
  }  
  return (
  <>
  <section style={{margin : ' 0'}}>
    <h2>regular counter</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>setValue(value-1)}>decrease</button>
    <button className='btn' onClick={() => setValue(0)}>reset</button>
    <button className='btn' onClick = {() => setValue(value+1)}>increase</button>
    <h2>More Complex Counter</h2>
  <h1>{value}</h1>
  <button className="btn" onClick={complexIcrease}>increase</button>
  </section>
  </>)
};

export default UseStateCounter;

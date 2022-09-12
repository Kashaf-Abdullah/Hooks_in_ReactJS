
import React, { useEffect, useState } from 'react'
import useTitleCount from './useTitleCount';

const CustomeHooks = () => {
  const [count,setCount]=useState(0)
//custom hooks
useTitleCount(count);

  console.log('hello outside');
  
  return (
    <div>
      <h1>{count}</h1>
      <button
       onClick={
        ()=>setCount(count+1)
      
      }
      >click Test</button>
    </div>
  )
}

export default CustomeHooks

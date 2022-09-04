//The useEffect lets you perform side effects in function components
//SIDE EFFECT: side effect are basically anything that affects something outside of the scope 
//of the current function that's being executed .this includes
//. API request to our backened service
//.call to our authenticate service 
//.Error tracking calls to sentry



//Data fetching ,setting up a subscription and manually changing the DOM in React Component are all example of side effects .Weather  or not you are used to calling these  operation  "side effects" , you've likely perform them in your component before
//  
import React, { useEffect, useState } from 'react'

const UseEffectPractise2 = () => {
  const [count,setCount]=useState(0)

  //when page refreh useEffect call
  useEffect(()=>{
    console.log('hello use effect');
if(count>0){
    document.title=`chats${count}`}
    else{
        document.title=`chats`
    }
    
  })
  // first pririoty to outside console then useEffect call


   console.log('hello outside');
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>click</button>
    </div>
  )
}

export default UseEffectPractise2

//The useEffect lets you perform side effects in function components
//SIDE EFFECT: side effect are basically anything that affects something outside of the scope 
//of the current function that's being executed .this includes
//. API request to our backened service
//.call to our authenticate service 
//.Error tracking calls to sentry



//Data fetching ,setting up a subscription and manually changing the DOM in React Component are all example of side effects .Weather  or not you are used to calling these  operation  "side effects" , you've likely perform them in your component before
//  
import React, { useEffect, useState } from 'react'

const UseEffectPractiseDependencyList = () => {
  const [count,setCount]=useState(0)

  //when page refreh useEffect call
  useEffect(()=>{
    console.log('hello use effect');
if(count>0){
    document.title=`chats${count}`}
    else{
        document.title=`chats`
    }
    
//DEPENDENCY LIST ARRAY
// (when we want to run this in this in first time when page load so we use Dependency list array)


},[count]) // now useEffect call when count value change
  // first pririoty to outside console then useEffect call


 
  useEffect(()=>{
    console.log("second useEffect")
  },[])
 
  console.log('hello outside');
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>click</button>
    </div>
  )
}

export default UseEffectPractiseDependencyList

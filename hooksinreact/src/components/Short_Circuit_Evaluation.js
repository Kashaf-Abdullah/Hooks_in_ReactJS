// The short circuit condition is very useful in react when we are trying to render some component or some HTML in our application

import React, { useState } from 'react'

const Short_Circuit_Evaluation = () => {
    const [demo,setDemo]=useState("")
  return (
    <div>

        {/* OR operator will take right side value if condition is false and here useState is empty means conditon  is false  but if we add value in useState so it will show demo (useState)  */}
     
      <h1>{demo || "Hello"}</h1>  
      <h1>{demo && "Hello"}</h1>  
      
    </div>
  )
}

export default Short_Circuit_Evaluation

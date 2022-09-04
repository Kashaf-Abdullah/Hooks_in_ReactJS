import React, { useState } from 'react'

const ThreeDotsInUseState = () => {
  //work with object
  const [name,setName]=React.useState({myname:"kashaf",myage:22})

  const updateData=()=>{

    setName({myname:"kehkasha",myage:22});

    //but we just want to change myname so we use spredOperator
// setName({...name})
  }

    return (
    <div>
      <h1>Name:{name.myname} ,age:20</h1>
    <button onClick={updateData}>Update</button>
    </div>
  )
}

export default ThreeDotsInUseState

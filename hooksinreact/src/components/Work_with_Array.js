import React, { useState } from 'react'

const Work_with_Array = () => {

  const bioData=[{
        id:1,
        name:"kashaf"
    },
{
    id:2,
    name:"ayesha"
},
{
    id:3,
    name:"Hira"
}
]

// console.log(bioData);

const [cleardata,setClearData]=useState(bioData);

const cleardt=()=>{

setClearData([]);

}
  return (
    <>
       
      {
      cleardata.map((curElm)=>

// key is unique ==in our bioData id is unique 
<h1 key={curElm.id}>Name:{curElm.name} id: {curElm.id}  </h1>
      
      )}

      <button onClick={cleardt}>clear</button>
    </>
  )
}

export default Work_with_Array


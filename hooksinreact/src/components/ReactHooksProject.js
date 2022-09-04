//get github users data using useEffect hook with fetch API

import React, { useEffect, useState } from 'react'

const ReactHooksProject = () => {



    const [users,setUsers]=useState([])




const getUsers=async ()=>{

try{
    const response =await fetch('https://jsonplaceholder.typicode.com/posts');
console.log(response);
const data=await response.json();
console.log(data);

setUsers(data)}catch(err){
    console.log(err)
}
}

useEffect(()=>{
    getUsers();
},[])   //[] means useEffect call ince when page refresh 


  return (
    <div className='container-fluid mt-5'>
    <div className='row text-center'>
<div className='col-10 col-md-4 mt-5'>
    {
        users.map((currElm)=>{
            return (
<>
<div><img src="" width="155"></img></div>
<h4>{currElm.title}</h4>
   <span>{currElm.id}</span>

</>

            )
        })
    }
</div>
</div>
    </div>
  )
}

export default ReactHooksProject

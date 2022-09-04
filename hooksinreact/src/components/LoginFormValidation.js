//problem with loginform code

//1.whenever login btn oress so it will wmpty the fields 
//2.unique key property pass && key and object same so write it once

import React,{useState} from 'react'

const LoginFormValidation = () => {
  
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
const [allEntry,setAllEntry]=useState([])

  const submitform=(e)=>{
    e.preventDefault()
    if(email&&password){
   //date id unique id for map function 
   const newEntry={id:new Date().getTime().toString(),email,password}
   setAllEntry([...allEntry,newEntry])
   
   console.log(allEntry)
   
   //fields empty after login btn
   setEmail("")
   setPassword("")
     }
     else{

        alert("add data")
     }
    }




 

  return (
    <div>
      <form action="" onSubmit={submitform}>
     <div>
      <label htmlFor='email'>
EMAIL
      </label>
<input type="text" name="email" id="email" value={email}
onChange={(e)=>setEmail(e.target.value)}

// present in inspect then component
></input>
     </div>
<div>
<label htmlFor='password'>
PASSWORD
      </label>
<input type="password" name="password" id="password" value={password}
onChange={(e)=>setPassword(e.target.value)}></input>
</div>

<button type="submit" > LOGIN</button>
      </form>
      <div>{
  
  allEntry.map((currElm)=>{

    const {id,email,password}=currElm;
          return(
            <div key={id}>
              <p>{email}</p>
              <p>{password}</p>
        </div>      
          )
        })
}</div>
    </div>
  )
}

export default LoginFormValidation

import React,{useState} from 'react'

const LoginForm = () => {
  
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
const [allEntry,setAllEntry]=useState([])

  const submitform=(e)=>{
    e.preventDefault()
const newEntry={email:email,password:password}
setAllEntry([...allEntry,newEntry])

console.log(allEntry)
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
          return(
            <div>
              <p>{currElm.email}</p>
              <p>{currElm.password}</p>
        </div>      
          )
        })
}</div>
    </div>
  )
}

export default LoginForm

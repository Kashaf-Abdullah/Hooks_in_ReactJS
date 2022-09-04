// uncontrolled form ===>Uncontrolled input are like traditional HTML form input
//They remember what you types .You can get their value using a ref


//The Controlled
//An input accepts its current value as a prop ,as well as a callback to change that value .You could say it;s a more "React way "
//of approaching this    <input value={somevalue} onChange={handlechange}>
import React, { useRef,useState } from 'react'

const Ref_UseRef_Hooks = () => {

    //it like a useState only and its preserve the value   NO RERENDER THE COMPONENT
            // const ref=useRef(initialvalue)
            const luckyname=useRef(null)
const [show,setShow]=useState(false)


            const submitform=(e)=>{
                e.preventDefault()
                console.log(luckyname.current.value);
               const name=luckyname.current.value
                name=="" ?alert("fill the data"):setShow(true)
            }
            
            return (
    <>
      <form action="" onSubmit={submitform}>
        <label type="text" >name</label>
        <input type="text" id="luckyname" ref={luckyname}></input>
      <button >submit</button>
      </form>

      <h1>{show? `Your name is ${luckyname.current.value}`: ""}</h1>

    </>
  )
}

export default Ref_UseRef_Hooks

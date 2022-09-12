//npm i react-toastify
import React from 'react'
import { ToastContainer ,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ReactToastify = () => {
    const diffToast=()=>{
// toast("login successfully")
toast.success("login successfully",{
position:"top-center"})
    }
  return (
    <div>
      <h1>welcome</h1>
      <button onClick={diffToast}>login</button>
      <ToastContainer/>
    </div>
  )
}

export default ReactToastify

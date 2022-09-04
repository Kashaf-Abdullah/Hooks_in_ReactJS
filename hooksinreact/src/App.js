import React,{useState}  from "react";
import Work_with_Array from "./components/Work_with_Array";
import ThreeDotsInUseState from "./components/ThreeDotsInUseState";
import Basic_Todo_List from "./components/Basic_Todo_List";
import Short_Circuit_Evaluation from "./components/Short_Circuit_Evaluation";
import LoginForm from "./components/LoginForm";
import LoginFormValidation from "./components/LoginFormValidation";
import UseEffectPractise from "./components/UseEffectPractise";
import UseEffectPractise2 from "./components/UseEffectPractise2";
import UseEffectPractiseDependencyList from "./components/UseEffectDependencyList";
import UseEffect_CleanUp from "./components/UseEffect_CleanUp";
import ReactHooksProject from "./components/ReactHooksProject";
import Ref_UseRef_Hooks from "./components/Ref_UseRef_Hooks";
import UseReducerHook from "./components/UseReducerHook";
import CompA from "./components/UseContext/CompA";


const App=()=>{
const [name,setName]=useState("kashaff")
console.log(useState(name));

const submit=()=>{
setName('hello')
}

const submit2=()=>{
  setName('kashaf')
  }
  
  
  return (
    <>
    {/* <h1>{name}</h1>
    <button onClick={submit} onDoubleClick={submit2}>click me</button>
     */}
     {/* <Work_with_Array/> */}

{/* <ThreeDotsInUseState/> */}
   {/* <Basic_Todo_List/> */}
   {/* <Short_Circuit_Evaluation/> */}
{/* <LoginForm/> */}
{/* <LoginFormValidation/> */}
{/* 
    <UseEffectPractise/>
    <UseEffectPractise2/> */}
    {/* <UseEffectPractiseDependencyList/> */}
    {/* <UseEffect_CleanUp/> */}
{/* <ReactHooksProject/> */}
{/* <Ref_UseRef_Hooks/> */}
{/* <UseReducerHook/> */}
<CompA/>
    </>
  )
}
export default App;
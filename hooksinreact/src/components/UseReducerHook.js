// Reducers  are pure function that takes ub a state and action and return a new state 
//A function is consider pure ,if it adheres to the following rules
//The function always retutn the same output of the same argument passed in
//2.The function does not produce any side-effects

//const [state,dispatch]=useReducer(reducer,initialArg,init);
import React, { useReducer } from 'react'
const initialState=0;
const reducer=(state,action)=>{
console.log(state,action);
if(action.type=="INCREMENT"){
    return state+1;
}
if(action.type=="DECREMENT"){
    return state-1;
}
    return state;
}


const UseReducerHook = () => {
//const [count,setCount]=useState(0)
  const [state ,dispatch]=  useReducer(reducer,initialState)



     
  return (
    <div>
      <p>{state}</p>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>Inc</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>Dec</button>
      
    </div>
  )
}

export default UseReducerHook


//We call dispatch() in our code when we want to changestate.
//   We already have a reducer set up to do the legwork of changing the state.we just need to be able to trigger how to change it
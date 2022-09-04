import React,{useState,useEffect} from 'react'

const UseEffect_CleanUp = () => {
    const [widthCount,setWidthCount]=useState(window.screen.width);

const actualWidth=()=>{
    console.log(window.innerWidth);
    setWidthCount(window.innerWidth)
    
}

    useEffect(()=>{
console.log('add event');

        window.addEventListener("resize",actualWidth);
  
//CLEANUP FUNCTION
// return ()=>{
//     console.log('remove event')
//     window.removeEventListener("resize",actualWidth)

// }

});
  return (
    <div>
      <h1>The actual size of the window</h1>
      <h1>{widthCount}</h1>  
      
    </div>
  )
}

export default UseEffect_CleanUp

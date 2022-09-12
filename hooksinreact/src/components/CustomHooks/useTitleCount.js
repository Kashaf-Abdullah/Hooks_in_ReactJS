import React,{useEffect} from 'react'

//cutome hooks  (we use "use" with our component name)
const useTitleCount = (count) => {

  useEffect(()=>{
    console.log('hello use effect');
if(count>0){
    document.title=`chats${count}`}
    else{
        document.title=`chats`
    }


},[count]); 
}

export default useTitleCount

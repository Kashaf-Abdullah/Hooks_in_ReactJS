import React, { useEffect, useState } from 'react'
//to get all the LS item
const getLocalItem=()=>{
  let list=localStorage.getItem('lists')
  console.log(list);
  if(list){
   return JSON.parse(localStorage.getItem('lists'))
  }
else{
  return [];
}  
}
const Todo = () => {
    const [inputData,setInputData]=useState('')
    const [item,setItems]=useState(getLocalItem())

    const AddItem=()=>{
       if(!inputData){

       }
        else{
    setItems([...item,inputData])
    setInputData('')
    }}

// delete item

const deleteItem=(id)=>{
    const updatedItem=item.filter((elm,index)=>{
return index!=id;
    })
    setItems(updatedItem)
  
}

//removeall

const removeAll=()=>{
    setItems([])
}



//ad local storage to data when item value change

//loocal storage store data in form of string
useEffect(()=>{
  localStorage.setItem('lists',JSON.stringify(item))
},[item])

    return (
    <>
      <div>
        <h1>TODO LIST</h1>
        <input type="text" placeholder="Add Item..."
        value={inputData}
        onChange={(e)=>{
            setInputData(e.target.value)
        }}
        ></input>
        <button titile="Add Item"
        
        onClick={AddItem}>Add</button>

      </div>

      {/* show item */}
      {
        item.map((elm,index)=>{
            
            return (

            <div key={index}>
        <h3>{elm}</h3>
        <button title="Delete Item" onClick={()=>deleteItem(index)}>Delete</button>
      </div>

            )
        })
      }
      <div>

      </div>
    
{/* clear button */}


      <div>
        <button onClick={removeAll}> <span>Check list</span></button>
      </div>

      
    </>
  )
}

export default Todo

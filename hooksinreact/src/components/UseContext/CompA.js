import React, { createContext } from 'react'
import CompB from './CompB'



//BioData context created
const BioData=createContext()  //Now BioData is component ,so we have to export it

const CompA = () => {
  return (
    <div>
      <h1>CompA</h1>
  <BioData.Provider value={"ComponentA"}>
  <CompB /> 
  </BioData.Provider>
     
     
      {/* <CompB name={"Comp A()"}/> */}
    </div>
  )
}

export default CompA
export { BioData };

//if we wanna pass data to C so first we have to pass to CompB then CompC that's wy now we use UseContext
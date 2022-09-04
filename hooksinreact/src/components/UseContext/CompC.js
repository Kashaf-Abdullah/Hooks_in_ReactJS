import React, { useContext } from 'react'
import CompA from './CompA';
import { BioData } from './CompA';
const CompC=()=>{
    
    const CompName=useContext(BioData);
    return (
<>

<h1>CompC {CompName}</h1>

</>
    )
}
export default CompC;
import React, { useEffect } from 'react'
import { useState } from 'react'
import aq from "../API/aq.json"
const Accordian = () => {

const[data,setdata]=useState([]);
const[active,setisactive]=useState(null)
useEffect(()=>{
setdata(aq)
},[])

const handleToggle=(id)=>{
    setisactive((prev)=>(prev===id?null:id))
}


  return (
    <div>
     <h2>Becoming a react developer</h2>
<ul>
{data.map((element)=>{
    return(
        <li key={element.id}>
            <h4>{element.id}</h4>
            <h3>{element.question}</h3>
          {active===element.id&&  <p>{element.answer}</p>}
            <button onClick={()=>handleToggle(element.id)}>{active?"Hide data":"Show data"}</button>
        </li>
    )
})}
</ul>
</div>
  )
}
export default Accordian
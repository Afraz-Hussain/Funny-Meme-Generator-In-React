import React from 'react'

const Todolist = (props) => {
    
    const{data,handeldelete,handelupdate}=props
    
  return (
    <div>
       <ul>
     
            {
            data.map((currelement,index)=>{
                return(
                    <li key={index}>
                        <h2>{currelement}</h2>
                        <button onClick={()=>handeldelete(index)}>delete</button>
                        <button onClick={()=>handelupdate(index)}>UPDATE</button>
                    </li>
                )
            })
            }
       
       </ul>
        </div>
  )
}

export default Todolist
import React, { useState } from 'react'

const TodoInput = (props) => {
    const{handletodo}=props

const[todovalue,settodovalue]=useState('')

const addtodos=()=>{
  
    if(todovalue.value==''){
        alert('cannot submit ewmpty tasks...')
return;
    }
    else{
        handletodo(todovalue)
    }
    settodovalue(" ")
}

  return (
    <div>
<input 
type='text'
placeholder='Enter Your Todo...'
value={todovalue}
onChange={(e)=>settodovalue(e.target.value)}

/>
<button onClick={()=>addtodos(todovalue)}>Add to do</button>
        </div>
  )
}

export default TodoInput
import React, { useEffect, useState } from 'react'

function App() {
  const[funncymeme,setmemes]=useState({
    toptext:'',
    bottomtext:'',
   imageurl: 'https://i.imgflip.com/1g8my4.jpg',
  })
  const[memeimage,setmemeimage]=useState([])
  const fetchmemes=async ()=>{
    try{
       const response=await fetch('https://api.imgflip.com/get_memes')
      const result= await response.json()
      setmemeimage(result.data.memes)
      console.log(result)
    }
    catch(error){
      console.log('errors: '+error)
    }
   
    //console.log(result)
  }
 useEffect(()=>{
  fetchmemes()
  
 },[])

// Upper meme text
function getuppertext(e)
{
  const value=e.target.value
  setmemes((prev)=>({
    ...prev,
    toptext:value
  }))

}

function getlowertext(e){
  const value=e.target.value
  setmemes((prev)=>({
    ...prev,
    bottomtext:value
  }))
 
}

const getrandompicture=()=>{
  const randomimage=Math.floor(Math.random()*memeimage.length)
  const allimages=memeimage[randomimage].url
  setmemes((prev)=>({
    ...prev,
    imageurl:allimages
  }))
  funncymeme.toptext=''
  funncymeme.bottomtext=''
  
  
}


  return (
   
    <div>


    <h1 style={{backgroundColor:'red',padding:'10px'}}>🤣🤣🤣مزاحیہ میمز</h1>

<div>
<span className='toptext'>{funncymeme.toptext}</span>
   <input 
   type='text'
   name='toptext'
   placeholder='Enter FUNNY UPPER CONTENT'
   onChange={getuppertext}
   className='uppertext'
   />
<img src={funncymeme.imageurl} alt="Meme" width="700" height='500' 
style={{marginBottom:'30px'}}/>
</div>

<div>
<input 
   type='text'
   name='toptext'
   placeholder='Enter FUNNY BOTTOM CONTENT'
   onChange={getlowertext}
   className='lowetextinput'
   /> 
  <span className='bottomtext'>{funncymeme.bottomtext}</span>
</div>
    <button onClick={getrandompicture} className='btn'>CHANGE IMAGE😂</button>
    


    </div>
  )
}

export default App

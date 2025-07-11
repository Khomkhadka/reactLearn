import React, { useState } from 'react'

const PageNotFound = () => {

    let a= 10;
    const changed = () =>{
        a= a+1;
       
    }

    const[b,setB] = useState(0)
    const [here,setHere] = useState('')
  return (
    <div className='flex flex-col items-center'>PageNotFound
       <p>avalue</p> {a}, <p>b-value</p>{b},
        
       <div className='flex flex-col'>
         <button onClick={()=>changed()}>click to update a</button>
        <button onClick={()=>setB(b+1)}>click to update b</button>
       </div>
       <div>
        {
            <div className='bg-red-400 h-15 w-15 px-3 py-2'>{here}</div>
        }
         <button onClick={()=> setHere('here')}>click me</button>
       </div>
      
      <div onClick={()=>setHere(!here)}>clickme</div>
      <div>{here?"here":""}</div>
    </div>

  )
}

export default PageNotFound
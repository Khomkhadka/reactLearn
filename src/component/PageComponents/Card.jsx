import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({tittle,description,image}) => {

     const Navigate = useNavigate()

  return (
    <div className='grid gap-2 shadow-md border border-gray-100'>
        <img src={image} className='h-40 w-full object-cover' alt="" />
        <div className='p-4'>
            <h1 className='text-xl font-semibold capitalize'>
                {
                    tittle
                }
            </h1>
            <div className='line-clamp-3'> {description}</div>
            <button onClick={()=>Navigate(`/card/${tittle}`)} className='border border-blu-400 w-fit text-blue-400 h-fit px-10 py-2 rounded-md mt-3 '>Read More</button>
        </div>
    </div>
  )
}

export default Card
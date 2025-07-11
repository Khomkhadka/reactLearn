import React from 'react'
import { useLocation } from 'react-router-dom'

const Banner = ({tittle,subtittle}) => {
    const location = useLocation()
    console.log(location)
  return (
    <div className='h-screen bg-red-500'>
        <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww" className='h-full w-full oject-cover' alt="" />
        <div className='absolute top-0 w-full h-full flex justify-center items-center flex-col left-0 right-0 bg-black/30 z-10'>
        <div>welcome to {location.pathnme}</div>
        <div>{subtittle}</div>
        </div>
    </div>
  )
}

export default Banner
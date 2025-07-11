import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const Toolbar = () => {
  const location = useLocation()
  const nav_items = [
    {tittle:"Home" ,path:'/'},
    {tittle:"About",path:'/about'},
    {tittle:"Contact", path:'##'},
    {tittle:"Blog", path:'##'},
    {tittle:"Event", path:'##'}

  ]

  return (
    <div className='flex justify-between px-10 fixed top-10 z-50 left-0 right-0 mx-auto w-11/12 py-4 shadow-2xl bg-blue-600'>
        <div className='font-bold text-xl'>Training</div>
    <div className='flex gap-4 mr-9'>
        {
          nav_items.map((val,i)=>{
             return <div className='relative'>
             <Link key={i}  className={`capitalize ${location.pathname==val.path?"text-red-600": "text-white"} cursor-pointer `} to={val.path}>{val.tittle}</Link>
             <div className={`bg-white h-1 ${location.pathname==val.path ? "w-full" : "w-0"} transition-all duration-700 delay-75 ease-in-out`}></div>
             </div>
          })
        }
    </div>
    </div>
  )
}

export default Toolbar
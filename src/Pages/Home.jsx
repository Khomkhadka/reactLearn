import React, { useEffect, useState } from 'react'
import Banner from '../component/UI/Banner.jsx'
import { useNavigate } from 'react-router-dom'
import Card from '../component/PageComponents/Card.jsx'
import GetData from '../HOC/GetData.jsx'
const Home = () => {
  const Navigate = useNavigate()
  function transfer() {
    alert("done")
    Navigate('/about')
  }

  
 const data = GetData ('services')
  

  // const Data = [
  //   {
  //     tittle: "Sunset1",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis, nesciunt fugit earum dolor distinctio porro quisquam, vel, dignissimos facilis impedit? Qui nulla quae adipisci quia voluptatibus consequuntur nihil iste?",
  //     image:"https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?semt=ais_hybrid&w=740"
  //   },
  //     {
  //     tittle: "sunset2",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis, nesciunt fugit earum dolor distinctio porro quisquam, vel, dignissimos facilis impedit? Qui nulla quae adipisci quia voluptatibus consequuntur nihil iste?",
  //     image:"https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?semt=ais_hybrid&w=740"
  //   },
  //     {
  //     tittle: "sunset3",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis, nesciunt fugit earum dolor distinctio porro quisquam, vel, dignissimos facilis impedit? Qui nulla quae adipisci quia voluptatibus consequuntur nihil iste?",
  //     image:"https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?semt=ais_hybrid&w=740"
  //   }
  // ]
  return (
    <div >
      
    <Banner/>
    <div className='grid grid-cols-3 gap-6 w-10/12 mx-auto mt-10'>
    {data.map((item,i)=>{
      return <Card  tittle={item.title} description={item.summary} image={item.coverImage.url}/>
    })}
    </div>

    </div>
  )
}

export default Home
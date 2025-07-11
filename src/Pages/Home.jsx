import React, { useEffect } from 'react'
import Banner from '../component/UI/Banner.jsx'
import { useNavigate } from 'react-router-dom'
import Card from '../component/PageComponents/Card.jsx'
import axios from 'axios'
const Home = () => {
  const Navigate = useNavigate()
  function transfer() {
    alert("done")
    Navigate('/about')
  }
 
  const getData = () =>{
    try {
      axios.get('https://gastro-backend.e-aribt.com/api/services').then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getData()
  },[])

  const Data = [
    {
      tittle: "Sunset1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis, nesciunt fugit earum dolor distinctio porro quisquam, vel, dignissimos facilis impedit? Qui nulla quae adipisci quia voluptatibus consequuntur nihil iste?",
      image:"https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?semt=ais_hybrid&w=740"
    },
      {
      tittle: "sunset2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis, nesciunt fugit earum dolor distinctio porro quisquam, vel, dignissimos facilis impedit? Qui nulla quae adipisci quia voluptatibus consequuntur nihil iste?",
      image:"https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?semt=ais_hybrid&w=740"
    },
      {
      tittle: "sunset3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis, nesciunt fugit earum dolor distinctio porro quisquam, vel, dignissimos facilis impedit? Qui nulla quae adipisci quia voluptatibus consequuntur nihil iste?",
      image:"https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?semt=ais_hybrid&w=740"
    }
  ]
  return (
    <div >
      
    <Banner/>
    <div className='grid grid-cols-3 gap-6 w-10/12 mx-auto mt-10'>
    {Data.map((item,i)=>{
      return <Card  tittle={item.tittle} description={item.description} image={item.image}/>
    })}
    </div>

    </div>
  )
}

export default Home
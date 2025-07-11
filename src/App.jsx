import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import { Route,Routes } from 'react-router-dom'
import Toolbar from './component/Navigation/Toolbar'
import PageNotFound from './PageNotFound'
import CardDetails from './Pages/CArdDetails'


const App = () => {
  return (
   <>
   <Toolbar/>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/card/:id' element={<CardDetails />} />
    <Route path='*' element={<PageNotFound/>}/>
   </Routes>
  
   </>
  )
}

export default App
import React from 'react'
import './App.css'
import About from './pages/landing/About'
import Contact from './pages/landing/Contact'
import LandingPage from './pages/landing/LandingPage'




const App=() => {


  return (
   <div className='font-[Poppins]'>
  
    <LandingPage/>
    <Contact/>
    <About/>
    </div> 
   
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import AboutUs from './Screens/AboutUs'
import NotFound from './Screens/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element = {<HomeScreen/>} />
      <Route path="/About-us" element = {<AboutUs/>} />
      <Route path="*" element = {<NotFound/>} />
    </Routes>
  )
}

export default App

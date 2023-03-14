import React from 'react'
import User from './components/User'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Career from "./components/Career"


function App() {
  return (

    <>
    {/* <User name="vishnu"/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/career" element={<Career/>}/>
      </Routes>
    </BrowserRouter>
   

    </>
  )
}

export default App
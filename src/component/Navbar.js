import React from 'react'
import { Link } from 'gatsby'

function Navbar() {
  return (
    <nav>
  <h1>Web-worrier</h1>
   <div className='links'>
   
    <Link to="/"> Home</Link>
    <Link to="/pages/about"> About</Link>
    <Link to="/projets"> Portfolio Projects</Link>

   </div>


    </nav>
  )
}

export default Navbar
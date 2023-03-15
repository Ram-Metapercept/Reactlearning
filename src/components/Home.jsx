import React from 'react'
import { Link } from "react-router-dom"
function Home(props) {
    return (
        <>
        <h1>Welcome to Home Page </h1>
        <Link to="/signIn">Login</Link><br />
        <Link to="/signUp">Sign Up</Link>
    </>
    )
}
export default Home

      

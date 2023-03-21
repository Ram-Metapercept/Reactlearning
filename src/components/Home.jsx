import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Addtask from './Addtask';
import Header from './Header';
import SignUp from './SignUp';
import SignIn from './SignIn';

function Home(props) {
  return (
    <>
      <Header />
      <Addtask />
    </>
  )
}
export default Home












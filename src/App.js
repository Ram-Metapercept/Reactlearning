import React,{useEffect,useState} from 'react'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {auth} from "./firebase"

function App() {
  const [userName,setUserName]=useState("")
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)
      }else{
        setUserName("")
      }
    })
  },[])
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App

       

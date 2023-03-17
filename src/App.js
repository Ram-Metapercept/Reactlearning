import React,{useEffect,useState,useNavigate} from 'react'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {auth} from "./firebase"
import Addtask from './components/Addtask';
import TodoTask from './components/TodoTask';
import InProgress from './components/InProgress';
import TaskDone from "./components/TaskDone"
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
         
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addtask" element={<Addtask />} />
          <Route path="/todoTask" element={<TodoTask />} />
          <Route path="/inProgress" element={<InProgress />} />
          <Route path="/taskDone" element={<TaskDone />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
      
     



       

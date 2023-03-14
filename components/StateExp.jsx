import React,{useState,useEffect} from 'react'
// ---------state management using hooks in functional component

function StateExp() {
    const [count,setCount]=useState(0)
    const [data,setData]=useState("Ram")
    const updateCount=()=>{
        setCount(count+1)
    }
    const updatData=()=>{
        setData("Shyam")
    }

    useEffect(()=>{
        console.log("mounted")
    },[count])
    

  return (
   <>
   <h1>count --{count}</h1>
   <button onClick={updateCount}>update Me</button>
   <h1>name --{data}</h1>
   <button onClick={updatData}>update Me</button>
   </>


  )
}

export default StateExp
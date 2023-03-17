import React from 'react'
import { Link } from "react-router-dom"
import Addtask from './Addtask';
import Header from './Header';
import { Box,Switch,
    useColorMode,
    useColorModeValue,Heading,FormControl,FormLabel} from "@chakra-ui/react"
function Home(props) {

    return (
        <>
        <Header/>
      <Addtask/>

    </>
    )
}
export default Home
  
       
       
     
     
        
          

      

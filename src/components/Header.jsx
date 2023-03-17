
import { Image, Flex, Button, HStack, chakra,ListItem ,List} from '@chakra-ui/react';
import { Link ,useNavigate} from "react-router-dom"

import React, { useState} from "react";
import Addtask from './Addtask';


export default function Header() {
  // const [showForm, setShowForm] = useState(false)
  // const handleClick = () => {
  //   setShowForm(false)
  // }
  // const handleCloseForm = () => {
  //   setShowForm(false)
  // }

const navigate=useNavigate()
const handleLogOut=()=>{
  navigate("/")
}
  return (
    <chakra.header id="header">
      <nav>
        <Flex
          w="100%"
          px="6"
          py="5"
          align="center"
          justify="space-between"
          bg="gray.100"
        >
          <Image src="../logo/logo.jpg" width={50} height={50}  />
          <HStack as="nav" spacing="5">
            <Link to="/addtask">Addtask</Link>
            <Link to="/todoTask">TodoTask</Link>
            <Link to="/inProgress">InProgress</Link>
            <Link to="/taskDone">TaskDone</Link>
          </HStack>
          <HStack>
            <Button onClick={handleLogOut}>
              Log out
            </Button>
          </HStack>
        </Flex>
      </nav>

      {/* {showForm && <Addtask />} */}
    </chakra.header>
  );
}









  

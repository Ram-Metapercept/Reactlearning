import { Box, Image, Flex, Button, HStack, chakra, Stack, Text } from '@chakra-ui/react';
import { Link, useNavigate } from "react-router-dom";
import React from "react";
export default function Header() {
  const navigate = useNavigate()
  const handleLogOut = () => {
    navigate("/")
  }
  return (
    <Box as="header" id="header">
      <nav>
        <Flex
          px={{ base: "2", sm: "6" }}
          py={{ base: "3", sm: "5" }}
          justify="space-between"
          align="center"
          bg="blue.200"
          borderBottom="1px solid"
          borderColor="gray.300"
        >
          <Flex align="center">
            <Image src="../logo/logo.jpg" width={50} height={50} />
            <chakra.span fontSize={{ base: "lg", sm: "2xl" }} fontWeight="bold" ml="2">Task Manager</chakra.span>
          </Flex>
          <Box display={{ base: "block", md: "none" }} mr="4">
          </Box>
          <HStack as="nav" spacing="4" display={{ base: "none", md: "flex" }}>
            <Link to="/addtask" >Add Task</Link>
            <Link to="/todoTask">To-Do Tasks</Link>
            <Link to="/inProgress">In Progress</Link>
            <Link to="/taskDone" >Tasks Done</Link>
          </HStack>
          <HStack display={{ base: "none", md: "flex" }}>
            <Button onClick={handleLogOut} variant="ghost" colorScheme="teal">Log out</Button>
          </HStack>
        </Flex>
      </nav>


    </Box>
  )
}






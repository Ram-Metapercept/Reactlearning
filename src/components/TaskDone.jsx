
import React, { useState } from 'react';
import { Box, Flex, Grid, Heading, Card, CardHeader, CardBody, Text, Center, Menu, MenuButton, MenuItem, MenuList, IconButton } from "@chakra-ui/react";
import axios from "axios";
import { useLoaderData } from 'react-router-dom';
import Header from './Header';
import UpdateTask from './UpdateTask';
import { Link } from "react-router-dom"


const Completed = () => {
  const tasks = useLoaderData();
  // this is api call for taskStatus updation using taskId in params and taskStatus in req body

  const handleStatusDeleted = (taskId, isDeleted) => {
    axios
      .delete(`http://localhost:4000/api/deleteTask/${taskId}`, { isDeleted })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // used menu  user click on three dots to update taskStatus 
  return (
    <Box w="100%">
      <Header />
      <Flex justifyContent="center" h="60vh">
        <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={6} w={["90%", "80%", "70%"]} p="2rem">
          {tasks.data.map(task => (
            task.taskStatus === "Completed" && task.isDeleted === false && (
              <Card key={task.id}>
                <CardHeader display="flex" justifyContent="space-between" alignItems="center">
                  <Menu>
                    <MenuButton as={IconButton} icon={<i className="fas fa-ellipsis-v">...</i>} bg="gray.100" size="xs" variant="ghost" ml="auto" />
                    <MenuList>
                      <MenuItem >
                        <Link to={`/getTask/${task.id}`}>View</Link>
                      </MenuItem>
                      <MenuItem >
                        <Link to={`/updateTask/${task.id}`}>Edit</Link>
                      </MenuItem>
                      <MenuItem onClick={() => handleStatusDeleted(task.id, true)}>
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </CardHeader>
                <Center><Heading size="md">{task.title}</Heading></Center>
                <CardBody>
                  <Center><Text>Start Date: {task.startDate}</Text></Center>
                  <Center><Text>Due Date: {task.dueDate}</Text></Center>
                  <Center><Text>Status: {task.taskStatus}</Text></Center>
                </CardBody>
              </Card>
            )
          ))}
        </Grid>
      </Flex>
    </Box>

  );
}
export default Completed;
//this is taskLoader which is passed as prop in the toDo component
export const taskLoader = async (req, res) => {
  try {
    const response = await axios.get("http://localhost:4000/api/getTask");
    return response.data;
  } catch (error) {
    // console.log(error);
    throw new Error("Error loading tasks");
  }
};














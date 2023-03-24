import React, { useState } from 'react';
import { Box, Flex, Grid, Heading, Card, CardHeader, CardBody, Text, Center, Menu, MenuButton, MenuItem, MenuList ,IconButton} from "@chakra-ui/react";
import axios from "axios";
import { useLoaderData } from 'react-router-dom';
import Header from './Header';


const Completed = () => {
  const tasks = useLoaderData();
const handleStatusUpdate = (taskId, taskStatus) => {
    axios
      .put(`http://localhost:4000/api/updateTask/${taskId}`, { taskStatus })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
return (
    <Box w="100%" bg="white">
    <Header />
    <Flex justifyContent="center" h="60vh">
      <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={6} w={["90%", "80%", "70%"]} p="2rem">
        {tasks.data.map(task => (
          task.taskStatus === "Completed" && (
            <Card key={task.id}>
              <CardHeader display="flex" justifyContent="space-between" alignItems="center">
                <Menu>
                  <MenuButton as={IconButton} icon={<i className="fas fa-ellipsis-v">...</i>} bg="gray.100" size="xs" variant="ghost" ml="auto" />
                  <MenuList>
                    <MenuItem onClick={() => handleStatusUpdate(task.id, "ToDo")}>
                      ToDo
                    </MenuItem>
                    <MenuItem onClick={() => handleStatusUpdate(task.id, "InProgress")}>
                      In Progress
                    </MenuItem>
                    <MenuItem onClick={() => handleStatusUpdate(task.id, "Completed")}>
                      Completed
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

export const taskLoader = async (req, res) => {
  try {
    const response = await axios.get("http://localhost:4000/api/getTask");
    return response.data;
  } catch (error) {
    // console.log(error);
    throw new Error("Error loading tasks");
  }
};












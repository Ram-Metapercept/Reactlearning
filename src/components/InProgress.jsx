import React  from 'react';
import { Box, SimpleGrid, Heading, Card, CardHeader, CardFooter, CardBody, Text, Center } from "@chakra-ui/react";
import Axios from "axios";
import { useLoaderData } from 'react-router-dom';

export default function TodoTask() {

  const tasks = useLoaderData();

  return (
    <div>
     
      <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
        <SimpleGrid
          spacing={6} 
          minChildWidth="300px"
          bg="gray.300"
          w="80%"
          p="2rem"
        >
          {tasks.data.map(task => (
            task.taskStatus == "inProgress" && (
              <Card key={task.id}>
                <CardHeader>
                  <Center><Heading >{task.title}</Heading></Center>
                </CardHeader>
                <CardBody>
                  <Center><Text>Start Date: {task.startDate}</Text></Center>
                  <Center><Text>Due Date:{task.dueDate}</Text></Center>
                  <Center><Text>Task Status:{task.taskStatus}</Text></Center>
                </CardBody>
              </Card>
            )
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
}
export const taskLoader = async (req, res) => {
  try {
    const response = await Axios.get("http://localhost:4000/api/getTask");
    return response.data;
  } catch (error) {
    // console.log(error);
    throw new Error("Error loading tasks");
  }
};










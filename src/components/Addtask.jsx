import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Flex,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";


function Addtask() {
  const [values, setValues] = React.useState({
    title: "",
    startDate: "",
    dueDate: "",
    priority: "",
    taskStatus: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = () => {
    // checking all fields are filled or not
    if (
      !values.title ||
      !values.startDate ||
      !values.dueDate ||
      !values.priority ||
      !values.taskStatus
    ) {
      return setErrorMsg("fill all fields");
    }

    // Send the form data to the backend using the fetch() function
    fetch("http://localhost:4000/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        //for handling  response from the backend
        console.log(data);
        alert("Task added successfully!");
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
        alert("An error occurred while adding the task. Please try again later.");
      });

    setErrorMsg("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleReset = () => {
    setValues({
      title: "",
      startDate: "",
      dueDate: "",
      priority: "",
      taskStatus: "",
    });
  };

  return (
    <Flex
      justify="center"
      align="center"
      height="100vh"
      bg="gray.100"
      px={{ base: 4, md: 8 }}
    >
      <Box
        width={{ base: "full", md: "md" }}
        rounded="lg"
        bg="white"
      
        px={{ base: 4, md: 8 }}
        py={12}
        boxShadow='dark-lg' 
        

      >
        <FormControl onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            </FormControl>
            <FormControl isRequired>
            <FormLabel>Start Date</FormLabel>
            <Input
              type="date"
              name="startDate"
              value={values.startDate}
              onChange={handleChange}
            />
            </FormControl >
            <FormControl isRequired>
            <FormLabel>Due Date</FormLabel>
            <Input
              name="dueDate"
              type="date"
              value={values.dueDate}
              onChange={handleChange}
            />
            </FormControl>
            <FormControl isRequired>
            <FormLabel>Priority</FormLabel>
            <Select
              name="priority"
              value={values.priority}
              placeholder="Select your Priority"
              onChange={handleChange}
            >
              <option value="Highest">Highest</option>
              <option value="High">High</option>
              <option value="Low">Low</option>
              <option value="Lowest">Lowest</option>
            </Select>
            </FormControl>
            <FormLabel>Task Status</FormLabel>
            <Select
              name="taskStatus"
              value={values.taskStatus}
              placeholder="Select your Task status "
              onChange={handleChange}
            >
              <option value="ToDo">yet to do</option>
              <option value="inProgress">inProgress</option>
              <option value="completed">Completed</option>
            </Select>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                colorScheme="teal"
                variant="solid"
                borderRadius="5"
                bg="tomato"
                w={{ base: "full", md: "auto" }}
                onClick={handleSubmission}
              >
                Submit
              </Button>
              <Button
                colorScheme="teal"
                variant="solid"
                borderRadius="5"
                bg="tomato"
                w={{ base: "full", md: "auto" }}
                onClick={handleReset}
              >
                Reset
              </Button>
            </Stack>
          </Stack>
        </FormControl>
      </Box>
    </Flex>)
}
export default Addtask






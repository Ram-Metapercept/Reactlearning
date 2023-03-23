import React, { useState } from "react";
import Header from './Header';  
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Flex,
  Input,
  Select,
  Stack,
  FormErrorMessage
} from "@chakra-ui/react";




function Addtask() {
  const [values, setValues] = React.useState({
    title: "",
    startDate: "",
    dueDate: "",
    priority: ""
   
  });


  const [errorMsg, setErrorMsg] = useState("");


  const handleSubmission = () => {
    // checking all fields are filled or not
    if (
      !values.title ||
      !values.startDate ||
      !values.dueDate ||
      !values.priority
     
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
      priority: ""


    });
  };


  return (
    <>
    <Header/>
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
            <FormControl isRequired isInvalid={!values.title}>
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            {(!values.title) && (
              <FormErrorMessage>title is required.</FormErrorMessage>
            )}
            </FormControl>
            <FormControl isRequired isInvalid={!values.startDate}>
            <FormLabel>Start Date</FormLabel>
            <Input
              type="date"
              name="startDate"
              value={values.startDate}
              onChange={handleChange}
            />


            {(!values.startDate) && (
              <FormErrorMessage>Start Date is required.</FormErrorMessage>
            )}
            </FormControl >
            <FormControl isRequired isInvalid={!values.dueDate}>
            <FormLabel>Due Date</FormLabel>
            <Input
              name="dueDate"
              type="date"
              value={values.dueDate}
              onChange={handleChange}
            />
           
            {(!values.dueDate) && (
              <FormErrorMessage>Due Date is required.</FormErrorMessage>
            )}
            </FormControl>
            <FormControl isRequired isInvalid={!values.priority}>
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
            {(!values.priority) && (
              <FormErrorMessage>Priority is required.</FormErrorMessage>
            )}
            </FormControl>
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
    </Flex>
    </>)
}
export default Addtask





// import React, { useState } from "react";
// import Header from './Header';  
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Flex,
//   Input,
//   Select,
//   Stack,
//   FormErrorMessage,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   useDisclosure
// } from "@chakra-ui/react";


// function Addtask() {
//   const [values, setValues] = React.useState({
//     title: "",
//     startDate: "",
//     dueDate: "",
//     priority: ""
   
//   });

//   const [errorMsg, setErrorMsg] = useState("");

//   const handleSubmission = () => {
//     // checking all fields are filled or not
//     if (
//       !values.title ||
//       !values.startDate ||
//       !values.dueDate ||
//       !values.priority 
      
//     ) {
//       return setErrorMsg("fill all fields");
//     }

//     // Send the form data to the backend using the fetch() function
//     fetch("http://localhost:4000/api/create", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(values),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         //for handling  response from the backend
//         console.log(data);
//         alert("Task added successfully!");
//         onClose();
//       })
//       .catch((error) => {
//         // Handle any errors that occur during the request
//         console.error(error);
//         alert("An error occurred while adding the task. Please try again later.");
//       });

//     setErrorMsg("");
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };

//   const handleReset = () => {
//     setValues({
//       title: "",
//       startDate: "",
//       dueDate: "",
//       priority: ""

//     });
//   };

//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Button colorScheme="teal" variant="solid" onClick={onOpen}>
//         Add Task
//       </Button>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Add Task</ModalHeader>
//           <ModalBody>
//             <FormControl onSubmit={handleSubmit}>
//               <Stack spacing={3}>
//                 <FormControl isRequired isInvalid={!values.title}>
//                   <FormLabel>Title</FormLabel>
//                   <Input
//                     name="title"
//                     value={values.title}
//                     onChange={handleChange}
//                   />
//                   {(!values.title) && (
//                     <FormErrorMessage>title is required.</FormErrorMessage>
//                   )}
//                 </FormControl>
//                 <FormControl isRequired isInvalid={!values.startDate}>
//                   <FormLabel>Start Date</FormLabel>
//                   <Input
//                     type="date"
//                     name="startDate"
//                     value={values.startDate}
//                     onChange={handleChange}
//                   />

//                   {(!values.startDate) && (
//                     <FormErrorMessage>Start Date is required.</FormErrorMessage>
//                   )}
// <FormLabel>Due Date</FormLabel>
// <Input
//   name="dueDate"
//   type="date"
//   value={values.dueDate}
//   onChange={handleChange}
// />

// {(!values.dueDate) && (
//   <FormErrorMessage>Due Date is required.</FormErrorMessage>
// )}
// </FormControl>
// <FormControl isRequired isInvalid={!values.priority}>
// <FormLabel>Priority</FormLabel>
// <Select
//   name="priority"
//   value={values.priority}
//   placeholder="Select your Priority"
//   onChange={handleChange}
// >
//   <option value="Highest">Highest</option>
//   <option value="High">High</option>
//   <option value="Low">Low</option>
//   <option value="Lowest">Lowest</option>
// </Select>
// {(!values.priority) && (
//   <FormErrorMessage>Priority is required.</FormErrorMessage>
// )}
// </FormControl>
// <Stack direction={{ base: "column", md: "row" }} spacing={4}>
//   <Button
//     colorScheme="teal"
//     variant="solid"
//     borderRadius="5"
//     bg="tomato"
//     w={{ base: "full", md: "auto" }}
//     onClick={handleSubmission}
//   >
//     Submit
//   </Button>
//   <Button
//     colorScheme="teal"
//     variant="solid"
//     borderRadius="5"
//     bg="tomato"
//     w={{ base: "full", md: "auto" }}
//     onClick={handleReset}
//   >
//     Reset
//   </Button>
// </Stack>
// </Stack>
// </FormControl>
// </ModalBody>
// </ModalContent>
// </Modal>
// </>
//   )}
//   export default Addtask
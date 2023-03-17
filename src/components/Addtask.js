import React,{useState} from "react";
import { Box, Button, FormControl, FormLabel, Input,Select,Stack } from "@chakra-ui/react";

function Addtask() {
  const [values, setValues] = React.useState({
    title: "",
    startDate: "",
    dueDate: "",
    priority: ""
  });

  const [errorMsg, setErrorMsg] = useState("")


  const handleSubmission = () => {
    // checking all fields are filled or not 
    if (!values.title || !values.startDate || !values.dueDate || !values.priority) {
      return <h1> {setErrorMsg(alert("fill all fields"))}</h1>
    }
    alert("form submitted")
    setErrorMsg("")
  }
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
<Box mx="500">
        <Box display='flex'
          alignItems='center'
          justifyContent='center'
  
          rounded='lg' bg='white'
          border="xl"
          boxShadow='dark-lg'  
          px="50" mx="200" w="md" height="50vh" mt="200">
          {/* <Box boxShadow='dark-lg' p='6' > */}
      <FormControl onSubmit={handleSubmit}>
        <Stack spacing={3}>
        <FormLabel>Title</FormLabel>
        <Input name="title" value={values.title} onChange={handleChange} />
        <FormLabel>Start Date</FormLabel>
        <Input type ="date" name="startDate" value={values.startDate} onChange={handleChange} />
        <FormLabel>Due Date</FormLabel>
        <Input
          name="dueDate"
          type="date"
          value={values.dueDate}
          onChange={handleChange}
        />

<FormLabel>Priority</FormLabel>
             <Select  name="priority" value={values.priority} placeholder='Select option' onChange={handleChange} >
               <option value='Highest'>Highest</option>
              <option value='High'>High</option>
               <option value='Low'>Low</option>
              <option value='Lowest'>Lowest</option>
             </Select>


             <Stack direction='row' spacing={10} align='center' mt="5">
                <Button colorScheme='teal' variant='solid' borderRadius='5' bg='tomato' mt="-1" w="full" onClick={handleSubmission}  >
                Submit
                </Button>
                <Button colorScheme='teal' variant='solid' borderRadius='5' bg='tomato' mt="-10" w="full" onClick={handleReset}  >
                Reset
                </Button>
            
           </Stack>
           </Stack>
      </FormControl>
    </Box>
    </Box>
  );
}

export default Addtask;









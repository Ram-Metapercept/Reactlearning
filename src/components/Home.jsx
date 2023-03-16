import React from 'react'
import { Link } from "react-router-dom"
import { Box,Switch,
    useColorMode,
    useColorModeValue,Heading,FormControl,FormLabel} from "@chakra-ui/react"
function Home(props) {
    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue('gray.100', 'gray.700');
    return (
        <>
        <Box w="100%" h="100vh" bg="formBackground">
        <Heading>Welcome to Home Page </Heading>
        {/* <Link to="/signIn">Login</Link><br />
        <Link to="/signUp">Sign Up</Link> */}
        <FormControl display="flex" alignItems="center" justifyContent={'flex-end'}>
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          {/* used for switching to dark mode */}
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
        </Box>
    </>
    )
}
export default Home
  
          

      

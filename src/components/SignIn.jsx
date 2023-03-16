import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import {
    Box, Button, Stack, FormControl, FormLabel, Input, Heading, Text, Switch,
    useColorMode,
    useColorModeValue, Link as ReachLink
} from "@chakra-ui/react"
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
// import { Link as ReachLink } from "@reach/router"
<Link as={ReachLink} to='/home'>
    Home
</Link>

function SignIn() {
    const [value, setValue] = useState({
        email: "",
        password: ""
    })
    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue('gray.100', 'gray.700');
    const navigate = useNavigate()
    // used errosMsg for handling error 
    const [errorMsg, setErrorMsg] = useState("")
    const handleSubmission = () => {
        // checking all fields are filled or not 
        if (!value.email || !value.password) {
            return <h1> {setErrorMsg(alert("fill all fields"))}</h1>
        }
        setErrorMsg("")
        // implementation of firebase authenticatication  forn sign in 
        signInWithEmailAndPassword(auth, value.email, value.password).then((res) => {
            const user = res.user
            console.log(user)
            navigate("/")
        }).catch((err) => {
            setErrorMsg(alert(err.message))
        })
    }
    return (

        <div>
            <form action="submit">

                <Box display='flex'
                    alignItems='center'
                    justifyContent='center'
                    maxWidth="500px"
                    width='20%'
                    mx={700}
                    border="1px"
                    boxShadow="lg"
                    borderWidth={1}
                    rounded='lg' bg='formBackground'
                    borderRadius="8"
                    height="550px"
                    my={200}
                    opacity="1.2"
                    p={8}

                >
                    {/* implementation of chakra ui for form control  */}
                    <Stack spacing={3} p={30}>
                        <FormControl isRequired>
                            <Heading ml={50} mb="5" fontSize="30">Login</Heading>

                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder='Email' onChange={e => setValue(prev => ({ ...prev, email: e.target.value }))} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder='Password' mb="10" borderRadius="2" onChange={e => setValue(prev => ({ ...prev, password: e.target.value }))} />
                        </FormControl>
                        <Stack direction='row' spacing={10} align='center'>
                            <Button colorScheme='teal' variant='solid' borderRadius='5' bg='tomato' mt="-5" w="full" onClick={handleSubmission}>
                                Login
                            </Button>
                        </Stack>
                        <FormControl display="flex" alignItems="center">
                            {/* used for switching to dark mode */}
                            <FormLabel htmlFor="dark_mode" mb="0">
                                Enable Dark Mode?
                            </FormLabel>
                            <Switch
                                id="dark_mode"
                                colorScheme="teal"
                                size="lg"
                                onChange={toggleColorMode}
                            />
                        </FormControl>
                        {/* <Text>Create an account  <Link to="/signUp">Sign Up</Link> </Text> */}
                        <Text>Create an account  <Link as={ReachLink} color='red' size="50" to='/signUp'>
                            SignUp
                        </Link></Text>
                    </Stack>
                </Box>
            </form>
        </div>
    )
}
export default SignIn

























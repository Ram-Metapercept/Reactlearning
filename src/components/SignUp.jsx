import React, { useState } from 'react'
import {
    Box, Button, Stack, FormControl, FormLabel, Input, Switch,
    useColorMode,
    useColorModeValue, Heading, Text
} from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../firebase"

function SignUp() {
    const [value, setValue] = useState({
        userName: "",
        email: "",
        password: ""
    })
    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue('gray.100', 'gray.700');
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState("")
    const handleSubmission = () => {
        // checking all fields are filled or not 
        if (!value.userName || !value.email || !value.password) {
            return <h1> {setErrorMsg(alert("fill all fields"))}</h1>
        }
        setErrorMsg("")
        // implementation of firebase authentication for signUp
        createUserWithEmailAndPassword(auth, value.email, value.password).then(async (res) => {
            const user = res.user
            await updateProfile(user, {
                displayName: value.userName
            })
            navigate("/signIn")
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
                    h="100vh"
                    rounded='lg' bg='formBackground'
                    borderRadius="md"
                >
                    <Box border="xl"
                        boxShadow='dark-lg' p='6' borderRadius="md" >
                        <Stack spacing={3} p={10}>
                            <FormControl isRequired>
                                <Heading ml="10" fontSize="30" mb="5">Sign Up</Heading>
                                <FormLabel>User Name</FormLabel>
                                <Input type="text" placeholder='UserName' onChange={e => setValue(prev => ({ ...prev, userName: e.target.value }))} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" placeholder='Email' onChange={e => setValue(prev => ({ ...prev, email: e.target.value }))} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" placeholder='Password' mb="10" onChange={e => setValue(prev => ({ ...prev, password: e.target.value }))} />
                            </FormControl>
                            <Stack direction='row' spacing={10} align='center' w="full" >
                                <Button colorScheme='teal' variant='solid' borderRadius='5' bg='tomato' w="full" mt="-5" onClick={handleSubmission}>
                                    Sign Up
                                </Button>
                            </Stack>
                            {/* used for switching to dark mode */}
                            <FormControl display="flex" alignItems="center">
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
                            <Text>Already Registered ?<Link to="/" >SignIn</Link> <br /></Text>
                        </Stack>
                    </Box>
                </Box>
            </form>
        </div>
    )
}
export default SignUp






































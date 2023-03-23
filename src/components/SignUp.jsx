import React, { useState } from 'react'
import {
    Box, Button, Stack, FormControl, FormLabel, Input, Switch, FormErrorMessage,

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

    const formBackground = useColorModeValue('gray.100');
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState("")
    const handleSubmission = () => {
        // checking all fields are filled or not
        if (!value.userName || !value.email || !value.password) {
            setErrorMsg("Please fill all fields")
            return
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
            setErrorMsg(err.message)
        })
    }
    return (
<>
      
        <Box display='flex'
            alignItems='center'
            justifyContent='center'
            h="100vh"
            bg={formBackground}
        >
            <Box border="xl"
                boxShadow='dark-lg' p='6' borderRadius="md" maxW={{ base: "90%", md: "80%", lg: "50%" }}>
                <Stack spacing={3} p={{ base: 4, md: 10 }}>
                    <FormControl isRequired isInvalid={!value.userName}>
                        <Heading fontSize={{ base: "xl", md: "3xl" }} mb="5">Sign Up</Heading>
                        <FormLabel>User Name</FormLabel>
                        <Input type="text" placeholder='UserName' onChange={e => setValue(prev => ({ ...prev, userName: e.target.value }))} />
                        {!value.userName && (
                            <FormErrorMessage>UserName is required.</FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl isRequired isInvalid={!value.email}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder='abc@gmail.com' onChange={e => setValue(prev => ({ ...prev, email: e.target.value }))} />
                        {!value.email && (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl isRequired isInvalid={!value.userName}>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder='Password' mb={{ base: 4, md: 10 }} onChange={e => setValue(prev => ({ ...prev, password: e.target.value }))} />
                        {!value.password && (
                            <FormErrorMessage>Password is required.</FormErrorMessage>
                        )}
                    </FormControl>
                    <Stack direction={{ base: "column", md: "row" }} justify="space-between" align="center" >
                        <Button colorScheme='teal' variant='solid' borderRadius='5' bg='tomato' w="full" onClick={handleSubmission}>
                            Sign Up
                        </Button>

                    </Stack>

                    <Text>Already Registered ?<Link to="/" >SignIn</Link> <br /></Text>
                </Stack>
            </Box>
        </Box>
        </>

    )
}
export default SignUp


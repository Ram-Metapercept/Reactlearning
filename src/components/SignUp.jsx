import React, { useState } from 'react'
import { Box, Button, Stack, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../firebase"

function SignUp() {
    const [value, setValue] = useState({
        userName: "",
        email: "",
        password: ""
    })
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
                    width='20%'
                    height="500px"
                    mx={700}
                    border="1px"
                    boxShadow="lg"
                    rounded='lg' bg='white'
                    borderRadius="10px"
                    my={200}>
                    <Stack spacing={3} p={10}>
                        <FormControl isRequired>
                            <h1>Sign Up</h1>
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
                        <Stack direction='row' spacing={10} align='center'>
                            <Button colorScheme='teal' variant='solid' borderRadius='5' bg='tomato' onClick={handleSubmission}>
                                Sign Up
                            </Button>
                        </Stack>
                        <p>Already Registered ?<Link to="/signIn">Login</Link> <br /></p>
                    </Stack>
                </Box>
            </form>
        </div>
    )
}
export default SignUp





















                

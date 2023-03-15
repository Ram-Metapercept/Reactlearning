import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Box, Button, Stack, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
function SignIn() {
    const [value, setValue] = useState({
        email: "",
        password: ""
    })
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
                    width='20%'
                    mx={700}
                    border="1px"
                    boxShadow="lg"
                    rounded='md' bg='white'
                    borderRadius="10px"
                    height="400px"
                    my={200}
                    >
                        {/* implementation of chakra ui for form control  */}
                        <Stack spacing={3} p={30}>
                            <FormControl isRequired>
                                <h1 mb="0">Login</h1>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" placeholder='Email' onChange={e => setValue(prev => ({ ...prev, email: e.target.value }))} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" placeholder='Password' mb="10" onChange={e => setValue(prev => ({ ...prev, password: e.target.value }))} />
                            </FormControl>
                            <Stack direction='row' spacing={10} align='center'>
                                <Button colorScheme='teal' variant='solid' borderRadius='5' bg='tomato' onClick={handleSubmission}>
                                    Login
                                </Button>
                            </Stack>
                            <p>Create an account <Link to="/signUp">Sign Up</Link> </p>
                        </Stack>
                    </Box>
                </form>
    
            </div>
        )
    }
    export default SignIn

    
    
    
    
    
    
    
    
    
                        








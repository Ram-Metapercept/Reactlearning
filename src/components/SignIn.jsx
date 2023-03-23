import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Flex,
    FormErrorMessage,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link as ReachLink,
    Stack,
    Switch,
    Text,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';

import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function SignIn() {
    const [value, setValue] = useState({
        email: '',
        password: '',
    });
    const [display, setDisplay] = useState(false)

// this useColorModeValue used for providing variable range of color
    const formBackground = useColorModeValue('gray.100', 'gray.700');
    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmission = () => {
        if (!value.email || !value.password) {
            setErrorMsg(('Please fill in all fields.'));
            return;
        }

        setErrorMsg('');
// when user will correctly loogin it will navigate to home page
        signInWithEmailAndPassword(auth, value.email, value.password)
            .then((res) => {
                const user = res.user;
                console.log(user);
                navigate('/home');
            })
            .catch((err) => {
                setErrorMsg(alert(err.message));
            });
    };
    return (
        <>
        <Flex justify="center" align="center" minH="100vh">
            <Box
                boxShadow="dark-lg"
                p="6"
                borderRadius="md"
                bg={formBackground}
                border="xl"
                maxW={{ base: "90%", md: "80%", lg: "50%" }}
            >
                <Stack spacing={3} p={30}>
                    <FormControl isRequired isInvalid={!value.email} >
                        <Heading mb="5" fontSize="30" textAlign="center">
                            Sign In
                        </Heading>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            placeholder="abc@gmail.com"
                            onChange={(e) =>
                                setValue((prev) => ({ ...prev, email: e.target.value }))
                            }
                        />
                        {!value.email && (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
                    </FormControl>
                    <FormControl isRequired isInvalid={!value.password} >
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            placeholder="Password"
                            mb="10"
                            borderRadius="2"
                            onChange={(e) =>
                                setValue((prev) => ({ ...prev, password: e.target.value }))
                            }
                        />
                        {!value.password && (
              <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
                    </FormControl>
                    <Button
                        colorScheme="teal"
                        variant="solid"
                        borderRadius="5"
                        bg="tomato"
                        mt="-5"
                        w="full"
                        onClick={handleSubmission}
                    >
                        Login
                    </Button>


                    <Text>Create an account  <Link as={ReachLink} color='red' size="50" to='/signUp'>
                        SignUp
                    </Link></Text>
                </Stack>
            </Box>


        </Flex>
        </>
    )
}
export default SignIn


       

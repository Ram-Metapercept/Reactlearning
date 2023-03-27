import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
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
    FormErrorMessage,
    useToast,
} from '@chakra-ui/react';

export default function AddTask() {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();
    const toast = useToast();
    const formRef = useRef(null);
    const onSubmit = (values) => {
        toast({

            title: 'Task Added.',
            description: 'Task added Succesfully.',
            status: 'success',
            duration: 5000,
            isClosable: true,
        });

        // Send the form data to the backend using the fetch() function
        fetch('http://localhost:4000/api/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the backend
                console.log(data);
                formRef.current.reset();
            })
            .catch((error) => {
                // Handle any errors that occur during the request
                console.error(error);
                alert('there is an error while adding the task. Please try again after sometime.');
            });
    };

    return (
        <>
            <Header />
            <Flex justify="center" align="center" height="80vh" bg="white" px={{ base: 4, md: 8 }}>
                <Box width={{ base: "sm", md: 'md' }} rounded="lg" bg="white" px={{ base: 4, md: 8 }} py={12} boxShadow="2xl">
                    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={3}>
                            <FormControl isInvalid={errors.title}>
                                <FormLabel htmlFor="title">Title</FormLabel>
                                <Input
                                    id="title"
                                    placeholder="Title"
                                    {...register('title', {
                                        required: 'This is required',
                                        minLength: {
                                            value: 4,
                                            message: 'Minimum length should be 4',
                                        }
                                    })}
                                />
                                <FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={errors.startDate}>
                                <FormLabel htmlFor="startDate">Start Date</FormLabel>
                                <Input
                                    id="startDate"
                                    type="date"
                                    {...register('startDate', { required: 'Start Date is required' })}
                                />
                                <FormErrorMessage>{errors.startDate && errors.startDate.message}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={errors.dueDate}>
                                <FormLabel htmlFor="dueDate">Due Date</FormLabel>
                                <Input
                                    id="dueDate"
                                    type="date"
                                    {...register('dueDate', { required: 'Due Date is required is required' })}
                                />
                                <FormErrorMessage>{errors.dueDate && errors.dueDate.message}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={errors.priority}>
                                <FormLabel htmlFor="priority">Priority</FormLabel>
                                <Select
                                    id="priority"
                                    placeholder="Select your priority"
                                    {...register('priority', { required: 'Priority is required' })}
                                >
                                    <option value='Highest'>Highest</option>
                                    <option value='High'>High</option>
                                    <option value='Low'>Low</option>
                                    <option value='Lowest'>Lowest</option>
                                </Select>
                                <FormErrorMessage>
                                    {errors.priority && errors.priority.message}
                                </FormErrorMessage>
                            </FormControl>
                            <Button colorScheme='teal' variant='solid' borderRadius='5' bg='tomato' w='full' isLoading={isSubmitting} type='submit'>
                                Add Task </Button>
                        </Stack>
                    </form>
                </Box>
            </Flex>
        </>
    )
}
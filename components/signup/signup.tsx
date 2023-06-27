import { Button, FormControl, FormHelperText, FormLabel, Input, InputGroup, Stack, WrapItem, useToast } from "@chakra-ui/react";
import { sendToNotion } from "pages/api/sendToNotion";
import React from "react";
import { useForm } from "react-hook-form";

export interface FormProp {
    name: string,
    lastname: string,
    companyName: string,
    email: string,
    phoneNumber: string,
}

export const FormSignup = () => {

    const toast = useToast()


    const [value, setValue] = React.useState({
        name: '',
        lastname: '',
        companyName: '',
        email: '',
        phoneNumber: '',
    })
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        control
    } = useForm();

    const sendInfo = async ({
        name,
        lastname,
        companyName,
        email,
        phoneNumber
    }) => {
        setValue({
            name: name,
            lastname: lastname,
            companyName: companyName,
            email: email,
            phoneNumber: phoneNumber

        })

        
        // console.log('SUBMIT', value)
        const data = await sendToNotion(value)
        console.log('DATA',data)
        data==false&& toast({
            title: 'Lo sentimos, ha ocurrido un error',
            description: "Recomendamos actualizar la pagina",
            status: 'error',
            duration: 9000,
            isClosable: true,
        });
        
        
        data==true&&toast({
            title: 'En breve nos contactaremos contigo!',
            description: "Recibiras un mail con acceso a nuestra demo.",
            status: 'success',
            duration: 9000,
            isClosable: true,
        });
        console.log('DATA',data)

    }

    return (
        <form
            onSubmit={
                handleSubmit((data: any) => {
                    sendInfo(data)
                })
            }
        >

            <FormControl
                isRequired

            >
                <Stack spacing={8}>
                    <Stack spacing={1}>
                        <FormLabel>Nombre</FormLabel>

                        <Input

                            focusBorderColor='green'
                            errorBorderColor='red.300'
                            placeholder='Nombre'
                            size='lg'
                            {
                            ...register('name', {
                                required: true
                            })}
                        />
                    </Stack>
                    <Stack spacing={1}>
                        <FormLabel>Apellido</FormLabel>

                        <Input

                            focusBorderColor='green'
                            errorBorderColor='red.300'
                            placeholder='Nombre'
                            size='lg'
                            {
                            ...register('lastname', {
                                required: true
                            })}
                        />
                    </Stack>

                    <Stack spacing={1}>
                        <FormLabel>Compania</FormLabel>

                        <Input
                            focusBorderColor='green'
                            errorBorderColor='red.300'
                            placeholder='Nombre de la compania'
                            size='lg'
                            {
                            ...register('companyName', {
                                required: true
                            })}
                        />
                    </Stack>

                    <Stack spacing={1}>

                        <FormLabel>Email</FormLabel>
                        <Input
                            type='email'
                            focusBorderColor='green'
                            errorBorderColor='red.300'
                            placeholder='Email'
                            size='lg'
                            {
                            ...register('email', {

                            })}
                        />
                        <FormHelperText>Nunca vamos a compartir tu email</FormHelperText>
                    </Stack>

                    <Stack spacing={1}>
                        <FormLabel>Numero de telefono</FormLabel>
                        <InputGroup>
                            <Input
                                type='num'
                                focusBorderColor='green'
                                errorBorderColor='red.300'
                                placeholder='000 000 000'
                                size='lg'
                                {
                                ...register('phoneNumber', {
                                    required: true
                                })}

                            />
                        </InputGroup>
                    </Stack>
                    <WrapItem >
                        <Button
                            colorScheme='green'
                            variant='outline'
                            type="submit"
                        >
                            Submit
                        </Button>
                    </WrapItem>
                </Stack>
            </FormControl>
        </form>

    )

}
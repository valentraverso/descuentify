import { NextPage } from 'next'
import NextLink from 'next/link'
import { Box, Center, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputLeftAddon, Stack, Text, WrapItem } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { Features } from 'components/features'
import { BackgroundGradient } from 'components/gradients/background-gradient'
import { Section } from 'components/section'
import siteConfig from 'data/config'
import { Button,  } from '@chakra-ui/react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { PageTransition } from 'components/motion/page-transition'
import React from 'react'

const providers = {
  google: {
    name: 'Google',
    icon: FaGoogle,
  },
  github: {
    name: 'Github',
    icon: FaGithub,
    variant: 'solid',
  },
}

const Login: NextPage = () => {

  const [value, setValue] = React.useState({
    name: '',
    email: '',
    phoneNumber: '',
  })
  const handleChange = (event) => setValue(event.target.value)

  return (
    <Section height="100vh" innerWidth="container.xl">
      <BackgroundGradient
        zIndex="-1"
        width={{ base: 'full', lg: '50%' }}
        left="auto"
        right="0"
        borderLeftWidth="1px"
        borderColor="gray.200"
        _dark={{
          borderColor: 'gray.700',
        }}
      />
      <PageTransition height="100%" display="flex" alignItems="center">
        <Stack
          width="100%"
          alignItems={{ base: 'center', lg: 'flex-start' }}
          spacing="20"
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <Box pe="20">
            <NextLink href="/">
              <Box
                as={siteConfig.logo}
                width="160px"
                ms="4"
                mb={{ base: 0, lg: 16 }}
              />
            </NextLink>
            <Features
              display={{ base: 'none', lg: 'flex' }}
              columns={1}
              iconSize={4}
              flex="1"
              py="0"
              ps="0"
              maxW={{ base: '100%', xl: '80%' }}
              features={siteConfig.signup.features.map((feature) => ({
                iconPosition: 'left',
                variant: 'left-icon',

                ...feature,
              }))}
            />
          </Box>
          <Center height="100%" flex="1">
            <Box width="container.sm" pt="8" px="8">
              <FormControl isRequired>
                <Stack spacing={8}>
                  <Stack spacing={1}>
                    <FormLabel>Nombre</FormLabel>

                    <Input
                      value={value.name}
                      focusBorderColor='green'
                      onChange={handleChange}
                      errorBorderColor='red.300'
                      placeholder='Nombre'
                      size='lg' />
                  </Stack>
                  <Stack spacing={1}>

                    <FormLabel>Email</FormLabel>
                    <Input
                      type='email'
                      value={value.email}
                      focusBorderColor='green'
                      onChange={handleChange}
                      errorBorderColor='red.300'
                      placeholder='Email'

                      size='lg'
                    />
                    <FormHelperText>Nunca vamos a compartir tu email</FormHelperText>
                  </Stack>

                  <Stack spacing={1}>
                    <FormLabel>Numero de telefono</FormLabel>
                    <InputGroup>
                      <InputLeftAddon children='+34' />
                      <Input
                        type='num'
                        value={value.email}
                        focusBorderColor='green'
                        onChange={handleChange}
                        errorBorderColor='red.300'
                        placeholder='000 000 000' />
                    </InputGroup>
                  </Stack>
                  <WrapItem >
                    <Button colorScheme='green' variant='outline'>
                      Submit
                    </Button>
                  </WrapItem>
                </Stack>
              </FormControl>
            </Box>
          </Center>
        </Stack>
      </PageTransition>
    </Section >
  )
}

export default Login

export const getStaticProps = () => {
  return {
    props: {
      header: {
        display: 'none',
      },
      footer: {
        borderTopWidth: '1px',
      },
    },
  }
}

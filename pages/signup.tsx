import { NextPage } from 'next'
import NextLink from 'next/link'
import { Box, Center, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputLeftAddon, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { Features } from 'components/features'
import { BackgroundGradient } from 'components/gradients/background-gradient'
import { Section } from 'components/section'
import siteConfig from 'data/config'
import { Button, } from '@chakra-ui/react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { PageTransition } from 'components/motion/page-transition'
import React from 'react'
import { FormSignup } from 'components/signup'

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

  
  return (
    <Section height="125vh" innerWidth="container.xl">
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
          spacing="15"
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <Box
            maxW='md'
            borderRadius={50}
            p="10">
            <Wrap
              m='30px'
            >
              <NextLink href="/">
                <Box
                  as={siteConfig.logo}
                  width="160px"
                  ms="4"
                  mb={{ base: 0, lg: 16 }}
                />
              </NextLink>

            </Wrap>

            <Wrap
              maxW='md'
              borderRadius={500}
            >
              {siteConfig.signup.monkeys}
            </Wrap>
          </Box>
          <Center height="100%" flex="1">
            <Box maxW='md'mb="50" px="8">
              <FormSignup />
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

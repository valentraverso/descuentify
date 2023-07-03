import {
  Box,
  BoxProps,
  SimpleGrid,
  Container,
  Text,
  Stack,
  Flex,
  HStack,
  Icon
} from '@chakra-ui/react'

import { LinkProps } from '@saas-ui/react'

import siteConfig from 'data/config'
import Link from 'next/link'
import { FiInstagram, FiLinkedin } from 'react-icons/fi'

export interface FooterProps extends BoxProps {
  columns?: number
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { columns = 2, ...rest } = props
  return (
    <Box bg="white" _dark={{ bg: 'gray.900' }} {...rest}>
      <Container maxW="container.2xl" px="8" py="8">
        <SimpleGrid columns={columns}>
          <Stack spacing="8">
            <Stack alignItems="flex-start">
              <Flex>
                <Box as={siteConfig.logo} flex="1" height="32px" />
              </Flex>
              <Text fontSize="md" color="muted">
                {siteConfig.seo.description}
              </Text>
            </Stack>
            <Copyright>{siteConfig.footer.copyright}</Copyright>
          </Stack>
          <HStack justify="flex-end" spacing="4" alignSelf="flex-end">
            <Link href="https://www.linkedin.com/company/descuentify/" target="_blank">
              <Icon
                as={FiLinkedin}
                transform="translate(-5px)"
                transitionProperty="common"
                transitionDuration="normal"
              />
            </Link>
            <Link href="https://www.instagram.com/descuentifyapp/?igshid=Y2IzZGU1MTFhOQ==" target="_blank">
              <Icon
                as={FiInstagram}
                transform="translate(-5px)"
                transitionProperty="common"
                transitionDuration="normal"
              />
            </Link>
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export interface CopyrightProps {
  title?: React.ReactNode
  children: React.ReactNode
}

export const Copyright: React.FC<CopyrightProps> = ({
  title,
  children,
}: CopyrightProps) => {
  let content
  if (title && !children) {
    content = `&copy; ${new Date().getFullYear()} - ${title}`
  }
  return (
    <Text color="muted" fontSize="sm">
      {content || children}
    </Text>
  )
}

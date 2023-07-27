import {
  Box,
  BoxProps,
  Button,
  Center,
  CenterProps,
  CloseButton,
  Flex,
  Grid,
  GridItem,
  HStack,
  IconButton,
  IconButtonProps,
  LinkProps,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  useUpdateEffect,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ButtonGroup,
} from '@chakra-ui/react'
import { AnimatePresence, motion, useElementScroll } from 'framer-motion'
import useRouteChanged from 'hooks/use-route-changed'
// import { getRoutes } from '@/layouts/mdx'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { RemoveScroll } from 'react-remove-scroll'

import siteConfig from 'data/config'
import { Logo } from 'components/layout/logo'
//import { Link } from '@saas-ui/react'
import { Link } from '@chakra-ui/react'
import { Nav } from '@saas-ui/react'
import { ButtonLink } from 'components/button-link'

interface NavLinkProps extends LinkProps {
  label: string
  href?: string
  isActive?: boolean
}

function NavLink({ href, children, isActive, ...rest }: NavLinkProps) {
  const { pathname } = useRouter()
  const bgActiveHoverColor = useColorModeValue('gray.100', 'whiteAlpha.100')

  const [, group] = href?.split('/') || []
  isActive = isActive ?? pathname.includes(group)

  console.log('label', children)
  return (

    <Link
      href={href}
      display="inline-flex"
      flex="1"
      minH="40px"
      px="8"
      py="3"
      transition="0.2s all"
      fontWeight={isActive ? 'semibold' : 'medium'}
      borderColor={isActive ? 'green.400' : undefined}
      borderBottomWidth="1px"
      color={isActive ? 'white' : undefined}
      _hover={{
        bg: isActive ? 'green.500' : bgActiveHoverColor,
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}

interface MobileNavContentProps {
  isOpen?: boolean
  onClose?: () => void
}

export function MobileNavContent(props: MobileNavContentProps) {
  const { isOpen, onClose = () => { } } = props
  const closeBtnRef = React.useRef<HTMLButtonElement>(null)
  const { pathname } = useRouter()
  const bgColor = useColorModeValue('whiteAlpha.900', 'blackAlpha.900')

  useRouteChanged(onClose)

  /**
   * Scenario: Menu is open on mobile, and user resizes to desktop/tablet viewport.
   * Result: We'll close the menu
   */
  const showOnBreakpoint = useBreakpointValue({ base: true, lg: false })

  React.useEffect(() => {
    if (showOnBreakpoint == false) {
      onClose()
    }
  }, [showOnBreakpoint, onClose])

  useUpdateEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        closeBtnRef.current?.focus()
      })
    }
  }, [isOpen])
  const { isOpen: isModal, onOpen, onClose: notModal } = useDisclosure()
  return (
    <AnimatePresence>
      {isOpen && (
        <RemoveScroll forwardProps>
          <motion.div
            transition={{ duration: 0.08 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Flex
              direction="column"
              w="100%"
              bg={bgColor}
              h="100vh"
              overflow="auto"
              pos="absolute"
              top="0"
              left="0"
              zIndex="modal"
              pb="8"
              backdropFilter="blur(5px)"
            >
              <Box>
                <Flex justify="space-between" px="8" pt="4" pb="4">
                  <Logo />
                  <HStack spacing="5">
                    <CloseButton ref={closeBtnRef} onClick={onClose} />
                  </HStack>
                </Flex>
                <Stack alignItems="stretch" spacing="0">
                  <NavLink {...(props as any)} onClick={onOpen}>
                    Login
                  </NavLink>
                  <Modal isCentered isOpen={isModal} onClose={notModal}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader textAlign="center">¿Quien eres?</ModalHeader>
                      <ModalCloseButton />
                      <ButtonGroup spacing={4} alignItems="center" >
                        <ButtonLink colorScheme='blue' variant='outline' size="lg" ml={100} href="https://app.descuentifyapp.com">
                          Usuario
                        </ButtonLink>
                        <ButtonLink colorScheme='green' variant='outline' size="lg" href="https://client.descuentifyapp.com">
                          Empresa
                        </ButtonLink>
                      </ButtonGroup>
                      <ModalFooter>
                        <>

                        </>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                  {siteConfig.header.links.map(
                    ({ href, id, label, ...props }, i) => {
                      return (
                        <NavLink
                          href={href || `/#${id}`}
                          key={i}
                          {...(props as any)}
                        >
                          {label}
                        </NavLink>
                      )
                    }
                  )}
                </Stack>
              </Box>
            </Flex>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  )
}

export const MobileNavButton = React.forwardRef(
  (props: IconButtonProps, ref: React.Ref<any>) => {
    return (
      <IconButton
        ref={ref}
        display={{ base: 'flex', md: 'none' }}
        fontSize="20px"
        color={useColorModeValue('gray.800', 'inherit')}
        variant="ghost"
        icon={<AiOutlineMenu />}
        {...props}
        aria-label="Open menu"
      />
    )
  }
)

MobileNavButton.displayName = 'MobileNavButton'

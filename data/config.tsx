import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck, FiGithub, FiLinkedin } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    logo: '/static/favicons/LogoMA.png',
    title: 'Descuentify',
    description: 'Tarjetas de fidelizacion online',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Precios',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Contactar',
        href: '/signup',
        variant: 'green',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        
      </>
    ),
    links: [
      {
        href: 'descuentifyapp@gmail.com',
        label: 'Contact',
      },
      {
        href: 'https://www.linkedin.com/company/descuentify/',
        label: <FiLinkedin size="14" />,
      },
      {
        href: 'https://github.com/descuentifyapp',
        label: <FiGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Empieza a fidelazar ahora!',
    monkeys: (
      <>
      <img src='/static/images/monkey.jpg' alt='logo' width={700} height={700}/> 
     </>
    )
  },
}


export default siteConfig

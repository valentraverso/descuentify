import { HTMLChakraProps, useColorMode } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const { colorMode } = useColorMode()
  return (
    colorMode === 'light' 
    ?  <img src='/static/images/Descuentify.png' alt='logo' width={180} height={180}/> 
    : <img src='/static/images/DescuentifyWhite.png' alt='logo' width={180} height={180}/>
  )
}

import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="icon" type="image/x-icon" href="/public/static/favicons/LogoMA.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

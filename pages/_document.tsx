import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="logo"
            sizes="76x76"
            href="LogoMA.png"
          />
          <link
            rel="logo"
            type="image/png"
            sizes="32x32"
            href="LogoMA.png"
          />
          <link
            rel="logo"
            type="image/png"
            sizes="16x16"
            href="LogoMA.png"
          />
          <link rel="manifest" href="/static/favicons/manifest.json" />
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

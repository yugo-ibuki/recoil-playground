import '../style/global.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../config/chakra'
import { Header } from '@components/Layout/Header'
import { LayoutWrapper } from '@components/Layout/LayoutWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mogi App</title>
      </Head>

      <ChakraProvider theme={theme}>
        <Header />

        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ChakraProvider>
    </>
  )
}
export default MyApp

import { ChakraProvider } from '@chakra-ui/core'
import { MDXProvider } from '@mdx-js/react'
import Header from '../components/header'
import HeaderText from '../components/header-text'
import { Layout } from '../components/layout'
import Section from '../components/section'
import { theme } from '../theme'

const components = {
  Header,
  HeaderText,
  Section,
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Layout>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp

// Modules //
import { ChakraProvider } from "@chakra-ui/react"
import { ErrorBoundary } from "react-error-boundary"
import { AppProps } from "next/app"

// Fonts //
import "@fontsource/lato"
import "@fontsource/raleway"

// Components //
import { ErrorFallback } from "@etherTrack/components"
import { Layout } from "@etherTrack/layouts"
import { theme } from "@etherTrack/ui"

// Providers //
import AdaptivityProvider from "@etherTrack/lib/providers/AdaptivityProvider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AdaptivityProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AdaptivityProvider>
      </ErrorBoundary>
    </ChakraProvider>
  )
}

export default MyApp

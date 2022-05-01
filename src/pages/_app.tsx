import { ChakraProvider } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback, Layout } from "@etherTrack/components";
import { theme } from "@etherTrack/ui";
import { AppProps } from "next/app";

// Fonts
import "@fontsource/lato";
import "@fontsource/raleway";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </ChakraProvider>
  );
}

export default MyApp;

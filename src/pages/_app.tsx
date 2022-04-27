import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "@etherTrack/ui";
import { AppProps } from "next/app";

// Fonts
import "@fontsource/lato";
import "@fontsource/raleway";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

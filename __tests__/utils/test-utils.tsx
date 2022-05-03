// Modules //
import { render, RenderOptions } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";

// Components //
import { theme } from "@etherTrack/ui";

// Providers //
import AdaptivityProvider from "@etherTrack/lib/providers/AdaptivityProvider";
import { LayoutPropType } from "@etherTrack/types";
import { ReactElement } from "react";
import { SWRConfig } from "swr";

const Providers: React.FC<LayoutPropType> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <AdaptivityProvider>
        <SWRConfig value={{ dedupingInterval: 0, provider: () => new Map() }}>
          {children}
        </SWRConfig>
      </AdaptivityProvider>
    </ChakraProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  render(ui, { wrapper: Providers, ...options });
};

export * from "@testing-library/react";
export { customRender as render };

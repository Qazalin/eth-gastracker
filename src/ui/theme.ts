import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { COLORS } from "./colors";
import { mode } from "@chakra-ui/theme-tools";
import { ThemeColors } from "./themeColors";
import { textStyles } from "./components/text";
import { buttonStyles } from "./components/button";

const colors = COLORS.colors;
const semanticTokens = ThemeColors.semanticTokens;

export function getPrimaryGradient(colorMode: "light" | "dark") {
  const primaryGradient =
    colorMode == "light"
      ? "linear(to-r, bg1 85%, #EBCDD6)"
      : "linear(to-r, #22222E 85%, #342C39)";
  return primaryGradient;
}

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};
export const theme = extendTheme({
  config,
  colors,
  semanticTokens,
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: "body",
        // animation for change color mode
        // transition: "background 2s",
        transition: "none",
        // ( light - dark )
        color: mode("gray.800", "whiteAlpha.900")(props),
        // bg: mode("gray.100", "gray.800")(props),
        bg: "bg0",
        lineHeight: "base",
      },
    }),
  },
  components: {
    Text: textStyles,
    Button: buttonStyles,
  },
});

import { ComponentStyleConfig } from "@chakra-ui/react";

export const FONTS = {
  headingFont: '"Raleway", sans-serif',
  bodyFont: '"Lato", sans-serif',
};

export const buttonStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    fontsize: "1rem",
    fontFamily: FONTS.bodyFont,
    minW: "50px",
    ":focus": {
      outline: "none",
      boxShadow: "none",
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      bg: "primary",
      borderRadius: "24px",
      textTransform: "capitalize",
      p: "15px",
    },
    secondary: {
      bg: "secondary",
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "",
    variant: "",
  },
};

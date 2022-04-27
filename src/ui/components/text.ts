import { ComponentStyleConfig } from "@chakra-ui/react"

export const FONTS = {
    headingFont: '"Raleway", sans-serif',
    bodyFont: '"Lato", sans-serif',
}

export const textStyles: ComponentStyleConfig = {
    // style object for base or default style
    baseStyle: {
        fontsize: "1rem",
        fontFamily: FONTS.bodyFont,
    },
    // styles for different visual variants ("outline", "solid")
    variants: {
        heading: {
            fontSize: ["3rem", "5rem", "7rem", "9rem"],
            fontFamily: "heading",
            textTransform: "capitalize",
        },
        h1: {
            fontSize: "2rem",
            fontWeight: "bold",
            fontFamily: FONTS.headingFont,
        },
        h2: {
            fontSize: "1.2rem",
            fontFamily: FONTS.headingFont,
        },
        p: {
            fontSize: "1rem",
            fontFamily: FONTS.bodyFont,
        },
    },
    // default values for `size` and `variant`
    defaultProps: {
        size: "",
        variant: "",
    },
}

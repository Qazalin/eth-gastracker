export const COLORS: { colors: Colors } = {
  colors: {
    gray: {
      "50": "#F8F9FA",
      100: "#E9ECEF",
      200: "#DEE2E6",
      300: "#CED4DA",
      400: "#ADB5BD",
      500: "#6C757D",
      600: "#495057",
      700: "#343A40",
      800: "#212529",
      900: "#1e1e1e",
    },
    red: {
      "50": "#FDE8E8",
      "100": "#F8BEBF",
      "200": "#F49596",
      "300": "#F06B6C",
      "400": "#EB4143",
      "500": "#E7181A",
      "600": "#B91315",
      "700": "#8B0E10",
      "800": "#5C0A0A",
      "900": "#2E0505",
    },
    orange: {
      "50": "#EAFBEF",
      "100": "#C4F2D1",
      "200": "#9EEAB4",
      "300": "#78E297",
      "400": "#53DA7A",
      "500": "#2DD25C",
      "600": "#24A84A",
      "700": "#1B7E37",
      "800": "#125425",
      "900": "#092A12",
    },
    blue: {
      "50": "#E5F3FF",
      "100": "#B8DCFF",
      "200": "#8AC6FF",
      "300": "#5CAFFF",
      "400": "#2E99FF",
      "500": "#0082FF",
      "600": "#0068CC",
      "700": "#111335",
      "800": "#003466",
      "900": "#001A33",
    },
    green: {
      "50": "#EAFAEF",
      "100": "#C5F2D1",
      "200": "#9FE9B4",
      "300": "#7AE196",
      "400": "#55D879",
      "500": "#2FD05B",
      "600": "#26A649",
      "700": "#1C7D37",
      "800": "#135324",
      "900": "#092A12",
    },
  },
};

interface Colors {
  gray: ColorValueType;
  red: ColorValueType;
  orange: ColorValueType;
  blue: ColorValueType;
  green: ColorValueType;
}

export interface ColorValueType {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

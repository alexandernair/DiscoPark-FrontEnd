import { createTheme } from "@mui/material/styles";

const fontTheme = createTheme({
  typography: {
    htmlFontSize: 12,
    fontFamily: `"samim", "vazir"`,
  },
});

const headerTheme = createTheme({
  typography: {
    htmlFontSize: 5,
    fontFamily: `"comic-sans", "vazir"`,
  },
});
const sliderColor = createTheme({
  palette: {
    primary: {
      main: "#244D7F",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});
const themeLight = createTheme({
  palette: {
    background: {
      default: "#1E362D",
    },
  },
});

export { fontTheme, headerTheme, themeLight, sliderColor };

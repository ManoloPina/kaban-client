import { Theme } from "src/types/theme";

const theme: Theme = {
  palette: {
    primary: {
      main: "#5a56ae",
      dark: "#2D2B57",
      light: "#D6D5EB",
    },
    secondary: {
      main: "#2a2c39",
      light: "#40424c",
      dark: "#23242f",
    },
    text: {
      main: "#727b89",
      light: "#ffff",
      dark: "#1D1F22",
      disabled: "#E3E5E7",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
    },
  },
  typography: {
    fontSize: "1.4rem",
    fontWeight: 400,
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.8rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.6rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.4rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.2rem",
      fontWeight: 600,
    },
    caption: {
      fontSize: "0.8rem",
      fontWeight: 400,
    },
  },
};

export default theme;

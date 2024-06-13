import { Theme } from "src/types/theme";

const dark: Theme = {
  palette: {
    primary: {
      main: "#635FC7",
      dark: "#2D2B57",
      light: "#A8A4FF",
    },
    secondary: {
      main: "#2B2C37",
      light: "#3E3F4E",
      dark: "#20212C",
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
      main: "#EA5555",
      light: "#FF9898",
      dark: "#c62828",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
    },
  },
  typography: {
    body: "1.2rem",
    fontWeight: 500,
    h1: {
      fontSize: "2.4rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.8rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.4rem",
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

const light: Theme = {
  ...dark, palette: {
    ...dark.palette,
    secondary: {
      dark: '#F4F7FD',
      light: '#E4EBFA',
      main: 'white'
    },
    text: {
      ...dark.palette.text,
      light: '#828FA3'
    }
  }
}

export { light, dark };

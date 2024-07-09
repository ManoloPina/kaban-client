import { Theme } from "src/types/theme";

export const light: Theme = {
  palette: {
    mode: 'light',
    primary: {
      main: '#a8a4ff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6556d9',
    },
    error: {
      main: '#ea5555',
      light: '#ff9898',
      dark: '#c24a44',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ffe014',
    },
    success: {
      main: '#3be155',
    },
    background: {
      default: '#f4f7fd',
      paper: '#ffffff',
    },
    text: {
      primary: '#000112',
      secondary: '#2b2c37',
      disabled: '#8a93a6',
    },
    divider: '#e4ebfa',
    grey: {
      100: '#f4f7fd',
      300: '#e4ebfa',
      400: '#8a93a6',
      500: '#828fa3',
      600: '#2b2c37',
      700: '#3e3f4e',
      800: '#20212c',
    },
    common: {
      white: '#ffffff',
      black: '#000112',
    },
  },
  typography: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: 14,
    fontWeight: 700,
    body1: {
      fontSize: 13,
      fontFamily: "Plus Jakarta Sans",
      fontWeight: 500,
      fontStyle: "normal",
      letterSpacing: 0,
      lineHeight: 23,
    },
    body2: {
      fontSize: 12,
      fontFamily: "Plus Jakarta Sans",
      fontWeight: 700,
      fontStyle: "normal",
      letterSpacing: 0,
      lineHeight: 14.4,
    },
    h1: {
      fontSize: 24,
      fontFamily: "Plus Jakarta Sans",
      fontWeight: 700,
      fontStyle: "normal",
      letterSpacing: 0,
      lineHeight: 28.8,
    },
    h2: {
      fontSize: 18,
      fontFamily: "Plus Jakarta Sans",
      fontWeight: 700,
      fontStyle: "normal",
      letterSpacing: 0,
      lineHeight: 21.6,
    },
    h3: {
      fontSize: 15,
      fontFamily: "Plus Jakarta Sans",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: 18,
      letterSpacing: 0,
    },
    h4: {
      fontSize: 12,
      fontFamily: "Plus Jakarta Sans",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: 14.4,
      letterSpacing: 2.4,
    },

  },
  spacing: [0, 4, 8, 16, 32, 64],
  shape: {
    borderRadius: 8,
  },
  shadows: Array(25).fill('none') as string[],
};

export const dark: Theme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#a8a4ff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6556d9',
    },
    error: {
      main: '#ea5555',
      light: '#ff9898',
      dark: '#c24a44',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ffe014',
    },
    success: {
      main: '#3be155',
    },
    background: {
      default: '#20212c',
      paper: '#2b2c37',
    },
    text: {
      primary: '#fbfbfc',
      secondary: '#828fa3',
      disabled: '#8e939d',
    },
    divider: '#3e3f4e',
    grey: {
      100: '#f4f7fd',
      300: '#e4ebfa',
      400: '#8a93a6',
      500: '#828fa3',
      600: '#2b2c37',
      700: '#3e3f4e',
      800: '#20212c',
    },
    common: {
      white: '#ffffff',
      black: '#000112',
    },
  },
  typography: {
    ...light.typography,
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14,
    fontWeight: 700,
  },
  spacing: [0, 4, 8, 16, 32, 64],
  shape: {
    borderRadius: 8,
  },
  shadows: Array(25).fill('none') as string[],
};
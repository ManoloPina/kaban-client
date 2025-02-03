import * as CSS from 'csstype';
import { breakpoints } from 'src/styles/theme';
import { css } from 'styled-components';
// Define types for individual palette colors
interface PaletteColor {
  main: string;
  light?: string;
  dark?: string;
  contrastText?: string;
}

interface Palette {
  mode: 'light' | 'dark';
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  success: PaletteColor;
  background: {
    default: string;
    paper: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  divider: string;
  grey: {
    100: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
  };
  common: {
    white: string;
    black: string;
  };
}

// Define the structure of the typography
export interface TypographyStyle {
  fontSize: CSS.Property.FontSize | number;
  fontFamily: CSS.Property.FontFamily;
  lineHeight: CSS.Property.LineHeight;
  fontWeight: CSS.Property.FontWeight;
  letterSpacing: CSS.Property.LetterSpacing | number;
  fontStyle: CSS.Property.FontStyle;
}

interface Typography {
  h1: TypographyStyle;
  h2: TypographyStyle;
  h3: TypographyStyle;
  h4: TypographyStyle;
  body1: TypographyStyle;
  body2: TypographyStyle;
  sm: TypographyStyle;
  md: TypographyStyle;
  lg: TypographyStyle;
  xl: TypographyStyle;
}

// Define the structure of the shape
interface Shape {
  borderRadius: number;
}

interface Theme {
  palette: Palette;
  typography: Typography;
  spacing: number[];
  shape: Shape;
  shadows: string[];
  breakpoints: Breakpoints;
}

interface Breakpoints {
  values: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  up: (
    key: keyof Breakpoints['values']
  ) => (style: TemplateStringsArray | string) => ReturnType<typeof css>;
  down: (
    key: keyof Breakpoints['values']
  ) => (style: TemplateStringsArray | string) => ReturnType<typeof css>;
}

export type { Theme, Palette, PaletteColor, Typography, Shape, Breakpoints };

import * as CSS from 'csstype';
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
  fontSize: CSS.Property.FontSize|number;
  fontFamily: CSS.Property.FontFamily;
  lineHeight: CSS.Property.LineHeight;
  fontWeight: CSS.Property.FontWeight;
  letterSpacing: CSS.Property.LetterSpacing|number;
  fontStyle: CSS.Property.FontStyle;
}

interface Typography {
  fontFamily: CSS.Property.FontFamily;
  fontSize: CSS.Property.FontSize|number;
  fontWeight: CSS.Property.FontWeight|number;
  h1: TypographyStyle;
  h2: TypographyStyle;
  h3: TypographyStyle;
  h4: TypographyStyle;
  body1: TypographyStyle;
  body2: TypographyStyle;
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
}


// Export the themes and types
export type { Theme, Palette, PaletteColor, Typography, Shape };

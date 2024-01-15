interface IPaletteProps {
  main: string;
  light: string;
  dark: string;
}

export interface IHeaderProps {
  fontWeight: number;
  fontSize: string;
}

type TextProps = IHeaderProps;

interface ITextPalletProps extends IPaletteProps {
  disabled: string;
}

export interface Theme {
  palette: {
    primary: IPaletteProps;
    secondary: IPaletteProps;
    text: ITextPalletProps;
    success: IPaletteProps;
    error: IPaletteProps;
    warning: IPaletteProps;
  };
  typography: {
    fontSize: string | number;
    fontWeight: number | string;
    h1: IHeaderProps;
    h2: IHeaderProps;
    h3: IHeaderProps;
    h4: IHeaderProps;
    h5: IHeaderProps;
    caption: TextProps;
  };
}

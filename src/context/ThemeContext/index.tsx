import React, { createContext, useState } from "react";
//Types
import * as _theme from 'src/styles/theme';

type ThemeType = keyof typeof _theme


interface IThemeContext {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'dark',
  setTheme: (_theme: ThemeType) => { }
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>('dark');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

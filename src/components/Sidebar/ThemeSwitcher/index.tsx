import React, { useContext } from 'react';
import { ThemeContext } from 'src/context/ThemeContext';
//Styles
import * as S from './styles';
//Components
import { Switcher } from 'src/components/Switcher';
import DarkThemeIcon from "src/assets/icons/dark-theme.svg?react";
import LightThemeIcon from "src/assets/icons/light-theme.svg?react";

interface Props {

}

export const ThemeSwitcher: React.FC<Props> = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <S.SwitcherWrapper>
      <LightThemeIcon />
      <Switcher onChange={(checked) => {
        console.log({ checked });
        setTheme(checked ? 'dark' : 'light');
      }} />
      <DarkThemeIcon />
    </S.SwitcherWrapper>
  );
}
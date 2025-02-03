import styled, { css } from "styled-components";
import * as theme from "src/styles/theme";
import { TypographyStyle } from "src/types/theme";
import { useUtils } from "src/hooks";
import isProvValid from '@emotion/is-prop-valid';

interface ITitlePops extends React.CSSProperties {
  as?: "h1" | "h2" | "h3" | "h4";
}

const getTypeProps = (type: keyof typeof theme.dark.typography): TypographyStyle => {
  const titleProps = theme.dark.typography[type];
  return titleProps as TypographyStyle;
};

export const Title = styled.h1<ITitlePops>`
  font-size: ${(props) => getTypeProps(props?.as || "h1").fontSize}px;
  font-weight: ${(props) => getTypeProps(props?.as || "h1").fontWeight};
  color: ${(props) => props.theme.palette.text.secondary};
  margin: unset;
  ${({ ...props }) => {
    const { isValidCSSProperty, camelToKebab } = useUtils();
    const dynamicStyles = Object.entries(props)
      .filter(([key, value]) => isValidCSSProperty(key, value))
      .map(([key, value]) => `${camelToKebab(key)}: ${value};`)
      .join(" ");
    return dynamicStyles;
  }}
`;

export const Subtitle = styled.h2`
  font-size: ${(props) => props.theme.typography.h2.fontSize};
  font-weight: ${(props) => props.theme.typography.h2.fontWeight};
  color: ${(props) => props.theme.palette.primary.main};
  margin: unset;
`;

type PaletteTextKeys = keyof typeof theme.dark.palette.text;

export interface TextStyledProps extends React.CSSProperties {
  variant: 'body1' | 'body2';
  color: PaletteTextKeys;
};

export const Text = styled.p.withConfig({ shouldForwardProp: isProvValid }) <TextStyledProps>`
  font-size: ${(props) => props.theme.typography.body1.fontSize}px;
  color: ${(props) => props.theme.palette.text.secondary};
  font-weight: ${(props) => props.theme.typography[props.variant].fontWeight};
  margin: unset;
  ${({ ...props }) => {
    const { isValidCSSProperty, camelToKebab } = useUtils();
    const dynamicStyles = Object.entries(props)
      .filter(([key, value]) => {
        return isValidCSSProperty(key, value)
      })
      .map(([key, value]) => `${camelToKebab(key)}: ${value};`)
      .join(" ");
    return css`${dynamicStyles}`;
  }}
`;

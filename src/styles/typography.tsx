import styled from "styled-components";
import * as theme from "src/styles/theme";
import { TypographyStyle } from "src/types/theme";
import { useUtils } from "src/hooks";

interface ITitlePops extends React.CSSProperties {
  as?: "h1" | "h2" | "h3" | "h4";
}

const getTypeProps = (type: keyof typeof theme.dark.typography): TypographyStyle => {
  const titleProps = theme.dark.typography[type];
  return titleProps as TypographyStyle;
};

export const Title = styled.h1<ITitlePops>`
  font-size: ${(props) => getTypeProps(props?.as || "h1").fontSize};
  font-weight: ${(props) => getTypeProps(props?.as || "h1").fontWeight};
  color: ${(props) => props.theme.palette.primary.main};
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

export type TextStyledProps = {
  color: PaletteTextKeys;
};

export const Text = styled.p<TextStyledProps>`
  font-size: ${(props) => props.theme.typography.body1.fontSize}px;
  color: ${(props) => props.theme.palette.text[props.color]};
  font-weight: ${(props) => props.theme.typography.fontWeight};
  margin: unset;
`;

export const Caption = styled.p<TextStyledProps>`
  font-size: ${(props) => props.theme.typography.fontSize}px;
  color: ${(props) => props.theme.palette.text[props.color]};
  font-weight: ${(props) => props.theme.typography.fontWeight};
  margin: unset;
`;

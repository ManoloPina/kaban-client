import styled from "styled-components";
import theme from "src/styles/theme";
import { IHeaderProps } from "src/types/theme";
import { useUtils } from "src/hooks";

interface ITitlePops extends React.CSSProperties {
  as?: "h1" | "h2" | "h3" | "h4" | "h5";
}

const getTypeProps = (type: keyof typeof theme.typography): IHeaderProps => {
  const titleProps = theme.typography[type];
  return titleProps as IHeaderProps;
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

type PaletteTextKeys = keyof typeof theme.palette.text;

export type TextStyledProps = {
  color: PaletteTextKeys;
};

export const Text = styled.p<TextStyledProps>`
  font-size: ${(props) => props.theme.typography.fontSize};
  color: ${(props) => props.theme.palette.text[props.color]};
  font-weight: ${(props) => props.theme.typography.fontWeight};
  margin: unset;
`;

export const Caption = styled.p<TextStyledProps>`
  font-size: ${(props) => props.theme.typography.caption.fontSize};
  color: ${(props) => props.theme.palette.text[props.color]};
  font-weight: ${(props) => props.theme.typography.caption.fontWeight};
  margin: unset;
`;

import styled, { css } from "styled-components";
import { ButtonVariantEnum } from './types';

interface StyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof ButtonVariantEnum;
}


const getVariantStyle = (variant: keyof typeof ButtonVariantEnum) => {
  switch (variant) {
    case 'primary':
      return css`
        color: ${props => props.theme.palette.primary.contrastText};
        background-color: ${props => props.theme.palette.primary.main};
        &:hover {
        background-color: ${props => props.theme.palette.primary.light};
        }
      `;
    case 'destructive':
      return css`
        color: white;
        background-color: ${props => props.theme.palette.error.main};
        &:hover {
        background-color: ${props => props.theme.palette.error.light};
        }
      `;
    case 'secondary':
      return css`
        color: ${props => props.theme.palette.secondary.contrastText};
        background-color: ${props => props.theme.palette.secondary.main};
        &:hover {
        background-color: ${props => props.theme.palette.secondary.dark};
        }
      `;

  }
}

export const Button = styled.button<StyledButtonProps>`
  border-radius: 2rem;
  padding: 1rem 2rem;
  border: none;
  font-weight: bold;
  text-align: center;
  font-family: ${props => props.theme.typography.body1.fontFamily};
  font-size: ${props => props.theme.typography.body1.fontSize}px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  
  ${props => getVariantStyle(props.variant)};

  svg {
    padding: 0 2.5px;
  }
`;
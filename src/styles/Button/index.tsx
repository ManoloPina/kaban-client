
import { ReactNode } from 'react';
import * as S from './styles';
//Types
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: ReactNode
  variant: 'primary' | 'secondary' | 'destructive';
}

export const Button: React.FC<Props> = ({ startIcon, ...props }) => {
  return (
    <S.Button {...props}>
      {startIcon && startIcon}
      {props.children}
    </S.Button>
  );
}
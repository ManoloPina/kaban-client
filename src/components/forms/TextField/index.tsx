import React, { useEffect } from "react";
//Styles
import * as S from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
}

export const TextField: React.FC<IProps> = React.memo(
  ({ label, fullWidth = false, error, helperText, ...props }) => {
    useEffect(() => {
      console.log({ fullWidth });
    }, [fullWidth]);
    return (
      <S.FieldContainer fullWidth={fullWidth ? true : undefined}>
        <S.Label>{label}</S.Label>
        <S.Field {...props} fullWidth={fullWidth ? true : undefined} />
        {error && helperText && <S.HelperText>{helperText}</S.HelperText>}
      </S.FieldContainer>
    );
  }
);

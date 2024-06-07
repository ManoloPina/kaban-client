import React, { useMemo } from "react";
//Styles
import * as S from "./styles";
import * as Styles from "src/styles";
import theme from "src/styles/theme";
import CloseRounded from "src/assets/icons/close_rounded.svg?react";
import CheckCircleRounded from "src/assets/icons/check_circle_rounded.svg?react";
import WarningRounded from "src/assets/icons/warning_rounded.svg?react";
import ErrorRounded from "src/assets/icons/error_rounded.svg?react";

//Types
import { IAlert } from "src/context/AlertContext/types";

interface Props extends IAlert {
  index: number;
  onRemove: (index: number) => (e: any) => void;
}

export const Alert: React.FC<Props> = ({ index, title, message, type, onRemove }) => {

  const Icon = useMemo(() => {
    switch (type) {
      case "success":
        return CheckCircleRounded;
      case "warning":
        return WarningRounded;
      case "error":
        return ErrorRounded;
      default:
        return CheckCircleRounded;
    }
  }, [type]);

  const iconColor = useMemo(() => {
    switch (type) {
      case "success":
        return theme.palette.success.light;
      case "warning":
        return theme.palette.warning.light;
      case "error":
        return theme.palette.error.light;
      default:
        return theme.palette.success.light;
    }
  }, [type]);


  return (
    <S.NotificationContainer>
      <Icon width={24} height={24} fill={iconColor} />
      <Styles.Title as="h5">{title}</Styles.Title>
      <CloseRounded
        width={24}
        height={24}
        fontWeight={600}
        cursor="pointer"
        onClick={onRemove(index)} />
      <Styles.Caption className="message" color="main">
        {message}
      </Styles.Caption>
    </S.NotificationContainer>
  );
};

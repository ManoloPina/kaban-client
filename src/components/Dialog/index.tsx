import React, { ReactNode } from 'react';
//Styles
import * as S from './styles';
import * as Styles from 'src/styles';

interface Props {
  title: string;
  open: boolean;
  children?: ReactNode;
  onClose?: () => void;
}

const Dialog: React.FC<Props> = ({ title, open, children, onClose }) => {
  if (!open) return null;

  return (
    <S.DialogBackdrop onClick={onClose}>
      <S.DialogContainer>
        <Styles.Title as="h2">
          {title}
        </Styles.Title>
        <S.DialogContent>
          {children}
        </S.DialogContent>
      </S.DialogContainer>
    </S.DialogBackdrop>
  );
}

export default React.memo(Dialog);
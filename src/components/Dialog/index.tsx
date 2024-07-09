import React, { ReactNode } from 'react';
//Styles
import * as S from './styles';
import * as Styles from 'src/styles';
//Types
import { Size } from './types';

interface Props {
  title: string;
  open: boolean;
  size?: Size;
  children?: ReactNode;
  onClose?: () => void;
}

const Dialog: React.FC<Props> = ({ title, open, size = 'md', children, onClose }) => {
  if (!open) return null;

  return (
    <S.ModalBackdrop onClick={onClose}>
      <S.ModalContainer size={size}>
        <Styles.Title as="h3" color="white">{title}</Styles.Title>
        <S.ModalContent>{children}</S.ModalContent>
      </S.ModalContainer>
    </S.ModalBackdrop>
  );
}

export default React.memo(Dialog);
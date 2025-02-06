import React, { ReactNode } from 'react';
//Styles
import * as S from './styles';
import * as Styles from 'src/styles';
import { AnimatePresence } from 'motion/react';

interface Props {
  title: string;
  open: boolean;
  children?: ReactNode;
  onClose?: () => void;
}

const Dialog: React.FC<Props> = ({ title, open, children, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <S.DialogBackdrop
          layout
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <S.DialogContainer
            layout
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Styles.Title as="h2">{title}</Styles.Title>
            <S.DialogContent>{children}</S.DialogContent>
          </S.DialogContainer>
        </S.DialogBackdrop>
      )}
    </AnimatePresence>
  );
};

export default React.memo(Dialog);

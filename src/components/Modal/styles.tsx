import styled from "styled-components";
import theme from "src/styles/theme";
import { Size } from './types';

export const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const getModalSize = (size?: Size): string => {
  switch (size) {
    case 'lg':
      return "60%";
    case 'md':
      return "40%";
    case 'sm':
      return "25%";
    default:
      return "40%";
  }
}

export const ModalContainer = styled.div<{ size?: Size }>`
  grid-template-columns: 1fr;
  justify-content: flex-start;
  background-color: ${theme.palette.secondary.main};
  padding: 2rem;
  border-radius: 10px;
  width: ${props => getModalSize(props.size)};
`;

export const ModalContent = styled.div``;

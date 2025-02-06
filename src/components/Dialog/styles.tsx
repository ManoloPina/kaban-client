import styled, { css } from 'styled-components';
import { motion } from 'motion/react';

export const DialogBackdrop = styled(motion.div)`
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
  z-index: 2;
`;

export const DialogContainer = styled(motion.div)`
  grid-template-columns: 1fr;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.palette.background.paper};
  border-radius: 6px;

  ${(props) => props.theme.breakpoints.down('md')`
    width: 342px;
    padding: 2.4rem;
  `}

  ${(props) => props.theme.breakpoints.up('md')`
    width: 480px;
    padding: 3.2rem;
  `}
`;

export const DialogContent = styled.div`
  margin-top: 2.4rem;
  width: 100%;
`;

import theme from "src/styles/theme";
import styled from "styled-components";

export const Wrapper = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${theme.palette.secondary.light};
  border-radius: 6px;
  padding: 2rem;
  max-width: 248px;
  align-items: center;
  flex: 1;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${theme.palette.secondary.main};
  }
`;
import styled from "styled-components";
import theme from "../theme";

export const Button = styled.button`
  border-radius: 6rem;
  background-color: ${theme.palette.primary.main};
  padding: 1rem 2rem;
  border: none;
  font-weight: normal;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    padding: 0 2.5px;
  }
`;
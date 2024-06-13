import styled from "styled-components";

export const Button = styled.button`
  border-radius: 6rem;
  background-color: ${props => props.theme.palette.primary.main};
  padding: 1rem 2rem;
  border: none;
  font-weight: normal;
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  svg {
    padding: 0 2.5px;
  }
`;
import styled from "styled-components";

export const Wrapper = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.palette.secondary.light};
  border-radius: 6px;
  padding: 2rem;
  width: 100%;
  align-items: center;
  flex: 1;
  height: 100%;
  row-gap: 4.8rem;
`;
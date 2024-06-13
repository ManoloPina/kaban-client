import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  background-color: ${props => props.theme.palette.secondary.main};
  border-bottom: ${props => props.theme.palette.secondary.light} solid 1px;
  padding: 2.8rem 2rem;
  grid-template-columns: auto max-content;
  align-items: center;
`;
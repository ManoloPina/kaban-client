import styled from "styled-components";
import theme from "src/styles/theme";

export const HeaderContainer = styled.div`
  display: grid;
  max-height: 8rem;
  background-color: ${theme.palette.secondary.main};
  border-bottom: ${theme.palette.secondary.light} solid 1px;
  padding: 1.2rem 2rem;
  grid-template-columns: auto max-content;
  align-items: center;
`;
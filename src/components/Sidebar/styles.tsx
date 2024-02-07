import styled from "styled-components";
import theme from 'src/styles/theme';

export const SidebarContainer = styled.div`
  width: 265px;
  height: 100%;
  display: grid;
  padding: 1.2rem;
  grid-template-columns: 1fr;
  background-color: #2c2c38;
  grid-template-rows: max-content 1fr max-content;
  border-right: 1px solid ${theme.palette.secondary.light};
`;


export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: -1.2rem;
  & > li:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  padding: 0.6rem 0;
  border-bottom-right-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
  padding-left: 1.2rem;
  cursor: pointer;
  & svg {
    padding-right: 5px;
  }
  &:hover {
   background-color: ${theme.palette.primary.main};
  }
`;

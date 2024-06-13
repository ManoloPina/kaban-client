import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 265px;
  height: calc(100% - 2.5rem);
  display: grid;
  padding: 1.2rem;
  grid-template-columns: 1fr;
  background-color: ${props => props.theme.palette.secondary.main};
  grid-template-rows: max-content 1fr max-content;
  border-right: 1px solid ${props => props.theme.palette.secondary.light};
`;


export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: -1.2rem;
  font-size: ${props => props.theme.typography.body};
  & > li:not(:last-child) {
    margin-bottom: 1rem;
  }
  color: ${props => props.theme.palette.text.main};
  & li:hover, & li:hover, .active {
    color: white;
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
  &:hover, &.active {
   background-color: ${props => props.theme.palette.primary.main};
  }
`;

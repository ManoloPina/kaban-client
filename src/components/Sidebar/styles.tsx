import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 265px;
  height: calc(100% - 2.5rem);
  display: grid;
  padding: 1.2rem;
  grid-template-columns: 1fr;
  background-color: ${props => props.theme.palette.background.paper};
  grid-template-rows: calc(96px - 1.2rem) max-content 1fr max-content;
  border-right: 1px solid ${props => props.theme.palette.divider};
  grid-row-gap: 1.6rem;
  & .title-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
  }
  & .all-boards-label {
    font-size: ${props => props.theme.typography.body2.fontSize}px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: -1.2rem;
  font-weight: bold;
  max-width: 226px;
  & > li:not(:last-child) {
    margin-bottom: 1rem;
  }
  color: ${props => props.theme.palette.text.primary};
  & li:hover, & li:hover, .active {
    color: white;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-weight: bold;
  padding: 1.6rem 0;
  border-bottom-right-radius: 100px;
  border-top-right-radius: 100px;
  padding-left: 1.2rem;
  color: ${props => props.theme.palette.text.secondary};
  font-size: ${props => props.theme.typography.h3.fontSize}px;
  cursor: pointer;
  & svg {
    padding-right: 5px;
  }
  &:hover:not(:last-child), 
  &.active  {
   background-color: ${props => props.theme.palette.secondary.main};
  }
  &:last-child:hover {
    color: ${props => props.theme.palette.primary.main};
  }
  &:hover svg path, 
  &.active svg path {
    fill: ${props => props.theme.palette.primary.main};
  }
`;

export const FooterActionList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
  gap: 1.5rem;
  & li {
    cursor: pointer;
    & svg {
      width: 18px;
      height: auto;
      fill: ${props => props.theme.palette.grey[500]};
    }
    &:hover a {
      color: ${props => props.theme.palette.primary.main};
    }
    &:hover svg {
      color: ${props => props.theme.palette.primary.main};
    }
    & a {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 1.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme.palette.grey[500]};
  }
  }
  
`;

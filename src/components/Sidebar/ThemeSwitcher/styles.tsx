import styled from 'styled-components';

export const SwitcherWrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.palette.background.default};
  border-radius: 6px;
  padding: 15px 0;
  height: calc(48px -15px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  & :nth-child(1) {
    padding-right: 2.4rem;
  }

  & :nth-child(3) {
    padding-left: 2.4rem;
  }
  
`
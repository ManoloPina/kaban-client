import styled from 'styled-components';

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 80px);
  background-color: ${(props) => props.theme.palette.background.default};
`;

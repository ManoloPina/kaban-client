import styled from "styled-components";

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - 80px);
  background-color: ${props => props.theme.palette.background.default}
`;
import styled from "styled-components";

export const AlertWrapper = styled.div`
  padding: 2rem 0;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;

  & > div {
    animation: bounceInDown;
    animation-duration: 1s;
    margin: 0 auto;
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
`;

export const NotificationContainer = styled.div`
  display: grid;
  padding: 1rem;
  border-radius: 20px;
  background-color: white;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  justify-content: flex-start;
  justify-items: flex-start;
  grid-column-gap: 0.5rem;
  max-width: 540px;
  grid-row-gap: 0.2rem;

  & .message {
    grid-column: 2/3;
  }
`;

import styled from "styled-components";

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

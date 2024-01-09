import styled from "styled-components";

type FullWidth = {
  fullWidth?: boolean;
};

export const FieldContainer = styled.div<FullWidth>`
  display: grid;
  grid-template-columns: 1fr;
  width: ${(props) => (props?.fullWidth ? "100%" : "unset")};
`;

export const Label = styled.label`
  display: flex;
  font-size: 0.8rem;
  font-weight: bold;
  color: #5c5c68;
  align-items: flex-start;
  padding-bottom: 5px;
`;

export const Field = styled.input<FullWidth>`
  border-radius: 6px;
  border: 2px #4f5160 solid;
  width: ${(props) => (props?.fullWidth ? "auto" : "fit-content")};
  background-color: white;
  font-size: 1.2rem;
  color: #5c5c68;
  padding: 12px 10px;
  font-weight: 500;
  outline: none;
`;

export const HelperText = styled.span`
  display: flex;
  align-items: flex-start;
  padding: 2px 0;
  color: red;
  font-weight: 500;
  font-size: 0.84rem;
`;

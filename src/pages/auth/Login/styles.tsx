import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  width: 100%;
`;

export const LoginNavBtn = styled(NavLink)`
  text-align: center;
`;

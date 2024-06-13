import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "src/hooks";
//Styles
import styled from "styled-components";
import { ROUTES } from "src/constants";
//Components
import { Sidebar } from 'src/components/Sidebar';
import Header from "src/components/Header";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content 1fr;
  height: 100%;
  align-items: flex-start;
  align-content: flex-start;
  background-color: ${props => props.theme.palette.secondary.dark};
  
  & div:first-child {
    grid-row: span 3;
  }

  & > div:nth-child(3) {
    padding: 2rem;
  }

  & > div:nth-child(2), & > div:nth-child(3) {
    grid-column: 2/3;
  }

`;

export const ProtectedRoute: React.FC = () => {

  const { token } = useAuth();

  if (!token)
    return <Navigate to={ROUTES.AUTH.LOGIN} />;

  return (
    <MainContainer>
      <Sidebar />
      <Header />
      <Outlet />
    </MainContainer>
  );

};

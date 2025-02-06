import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'src/hooks';
import { motion, AnimatePresence, Variants, useAnimate } from 'motion/react';
//Styles
import styled from 'styled-components';
import { ROUTES } from 'src/constants';
//Components
import { Sidebar } from 'src/components/Sidebar';
import Header from 'src/components/Header';
import { SidebarContext } from 'src/context/SidebarContext';

export const MainContainer = styled.div<{
  showSidebar: boolean;
  isAnimating: boolean;
}>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.showSidebar || props.isAnimating ? 'max-content 1fr' : '1fr'};
  grid-template-rows: max-content 1fr;
  height: 100%;
  align-items: flex-start;
  align-content: flex-start;
  background-color: ${(props) => props.theme.palette.background.default};
  position: relative;

  & .sidebar {
    grid-row: span 3;
    z-index: 2;
  }

  & .header {
    padding: 2rem;
  }

  & .content {
    grid-column: ${(props) =>
      props.showSidebar || props.isAnimating ? '2/3' : '1/2'};
    min-height: 100vh;
    z-index: 1;
  }
`;

export const ProtectedRoute: React.FC = () => {
  const { token } = useAuth();
  const { show, isAnimating } = useContext(SidebarContext);

  if (!token) return <Navigate to={ROUTES.AUTH.LOGIN} />;

  return (
    <MainContainer showSidebar={show} isAnimating={isAnimating}>
      <Sidebar />
      <motion.div
        layout
        key="content"
        className="content"
        transition={{ duration: 0.35, ease: 'easeInOut' }}
      >
        <Header />
        <Outlet />
      </motion.div>
    </MainContainer>
  );
};

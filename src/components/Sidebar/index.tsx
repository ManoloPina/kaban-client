import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp, useAuth } from 'src/hooks';
import { useTheme } from 'styled-components';
import { BoardContext } from 'src/context/BoardContext';
import { SidebarContext } from 'src/context/SidebarContext';
import { AuthContext } from 'src/context/AuthContext';
import { AnimatePresence, motion } from 'motion/react';
//Styles
import * as S from './styles';
import * as Styles from 'src/styles';
import IconBoard from 'src/assets/icons/icon-board.svg?react';
import { ThemeSwitcher } from './ThemeSwitcher';
import HideEyeIcon from 'src/assets/icons/icon-hide-sidebar.svg?react';
import ShowSidebarIcon from 'src/assets/icons/icon-show-sidebar.svg?react';
import LogoutIcon from 'src/assets/icons/logout_icon.svg?react';
//Components
import Dialog from 'src/components/Dialog';
//Types
import { IBoards } from 'src/types/Boards';
import { ENDPOINT } from 'src/constants';

interface Props {}

export const Sidebar: React.FC<Props> = React.memo(() => {
  //hooks
  const { id } = useParams();

  const { boards, setBoards } = useContext(BoardContext);
  const { show, setShow, setIsAnimating } = useContext(SidebarContext);
  const { setToken } = useContext(AuthContext);
  const theme = useTheme();
  const { request } = useHttp();
  const navigate = useNavigate();
  //state
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  //handlers
  const fetchBoards = useCallback(async () => {
    const res = await request<IBoards[], any>({
      method: 'get',
      path: ENDPOINT.BOARDS.LIST,
    });
    if (res) setBoards(res);
  }, [boards]);

  const handleNavigation = (board: IBoards) => () =>
    navigate(`/board/${board._id}`);

  const handleLogoutBtn = () => setShowLogoutDialog((show) => !show);

  const handleLogoutConfirmation = () => setToken(null);

  const toggleSidebarVisibility = () => setShow(!show);

  useEffect(() => {
    fetchBoards();
  }, []);

  useEffect(() => {
    if (boards.length > 0) navigate(`/board/${boards[0]._id}`);
  }, [boards]);

  return (
    <>
      <AnimatePresence>
        {show ? (
          <S.SidebarContainer
            key="sidebar-motion"
            className="sidebar"
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            initial={{ opacity: 0, x: '-100%' }}
            onAnimationStart={() => setIsAnimating(true)}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <div className="title-wrapper">
              <Styles.Title as="h1" color={theme.palette.text.primary}>
                Taskboard
              </Styles.Title>
            </div>
            <Styles.Text
              variant="body1"
              className="all-boards-label"
              color="secondary"
            >
              All Boards ({boards.length})
            </Styles.Text>
            <S.List>
              {boards.map((board) => (
                <S.Item
                  key={board._id}
                  onClick={handleNavigation(board)}
                  className={board._id === id ? 'active' : undefined}
                >
                  <IconBoard width={16} height={16} />
                  {board.name}
                </S.Item>
              ))}
              <S.Item className="add-new-board" onClick={() => {}}>
                <IconBoard width={16} height={16} />+ Create New Board
              </S.Item>
            </S.List>
            <ThemeSwitcher />
            <S.FooterActionList>
              <li>
                <a onClick={toggleSidebarVisibility}>
                  <HideEyeIcon />
                  Hide Sidebar
                </a>
              </li>
              <li onClick={handleLogoutBtn}>
                <a>
                  <LogoutIcon />
                  Logout
                </a>
              </li>
            </S.FooterActionList>
          </S.SidebarContainer>
        ) : (
          <motion.div
            key="sidebar-btn-visibility"
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 2 }}
          >
            <S.ShowSidebarBtn
              variant="primary"
              onClick={toggleSidebarVisibility}
            >
              <ShowSidebarIcon width={16} />
            </S.ShowSidebarBtn>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={showLogoutDialog} title="Logout">
        <S.DialogContentContainer>
          <Styles.Text gridColumn="1/3" variant="body1" color="primary">
            Deseja mesmo fazer o logout?
          </Styles.Text>
          <Styles.Button variant="secondary" onClick={handleLogoutConfirmation}>
            Logout
          </Styles.Button>
          <Styles.Button variant="primary" onClick={handleLogoutBtn}>
            Cancel
          </Styles.Button>
        </S.DialogContentContainer>
      </Dialog>
    </>
  );
});

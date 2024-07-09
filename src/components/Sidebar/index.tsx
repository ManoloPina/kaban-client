import React, { useCallback, useContext, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from "src/hooks";
import { useTheme } from 'styled-components';
import { BoardContext } from "src/context/BoardContext";
import { SidebarContext } from "src/context/SidebarContext";
//Styles
import * as S from "./styles";
import * as Styles from "src/styles";
import IconBoard from 'src/assets/icons/icon-board.svg?react';
import { ThemeSwitcher } from "./ThemeSwitcher";
import HideEyeIcon from "src/assets/icons/icon-hide-sidebar.svg?react";
import LogoutIcon from "src/assets/icons/logout_icon.svg?react";
//Types
import { IBoards } from "src/types/Boards";
import { ENDPOINT } from "src/constants";

interface Props {

}

export const Sidebar: React.FC<Props> = React.memo(() => {
  //hooks
  const { id } = useParams();
  const { boards, setBoards } = useContext(BoardContext);
  const { show } = useContext(SidebarContext);
  const theme = useTheme();
  const { request } = useHttp();
  const navigate = useNavigate();
  //handlers
  const fetchBoards = useCallback(async () => {
    const res = await request<IBoards[], any>({
      method: "get",
      path: ENDPOINT.BOARDS.LIST,
    });
    if (res) setBoards(res);
  }, [boards]);


  const handleNavigation = (board: IBoards) => () => navigate(`/board/${board._id}`);

  useEffect(() => {
    fetchBoards();
  }, [])

  return (
    <S.SidebarContainer>
      <div className="title-wrapper">
        <Styles.Title as="h1" color={theme.palette.text.primary}>
          Taskboard
        </Styles.Title>
      </div>
      <Styles.Text
        className="all-boards-label"
        color="secondary">All Boards ({boards.length})</Styles.Text>
      <S.List>
        {boards.map(board => (
          <S.Item
            key={board._id}
            onClick={handleNavigation(board)}
            className={board._id === id ? 'active' : undefined}
          >
            <IconBoard width={16} height={16} />
            {board.name}
          </S.Item>
        ))}
        <S.Item
          className="add-new-board"
          onClick={() => { }}
        >
          <IconBoard width={16} height={16} />
          + Create New Board
        </S.Item>
      </S.List>
      <ThemeSwitcher />
      <S.FooterActionList>
        <li>
          <a><HideEyeIcon />Hide Sidebar</a>
        </li>
        <li>
          <a><LogoutIcon />Logout</a>
        </li>
      </S.FooterActionList>
    </S.SidebarContainer>
  );
});

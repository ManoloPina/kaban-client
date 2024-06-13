import React, { useCallback, useContext, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from "src/hooks";
import { useTheme } from 'styled-components';
import { BoardContext } from "src/context/BoardContext";
//Styles
import * as S from "./styles";
import * as Styles from "src/styles";
//Components
import { MdOutlineDashboard } from "react-icons/md";
import { ThemeSwitcher } from "./ThemeSwitcher";
//Types
import { IBoards } from "src/types/Boards";
import { ENDPOINT } from "src/constants";

interface Props {

}

export const Sidebar: React.FC<Props> = React.memo(() => {
  //hooks
  const { id } = useParams();
  const { boards, setBoards } = useContext(BoardContext);
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
        <Styles.Title as="h1" color={theme.palette.text.light}>
          Taskboard
        </Styles.Title>
      </div>
      <S.List>
        {boards.map(board => (
          <S.Item
            key={board._id}
            onClick={handleNavigation(board)}
            className={board._id === id ? 'active' : undefined}
          >
            <MdOutlineDashboard size={16} />
            {board.name}
          </S.Item>
        ))}
      </S.List>
      <ThemeSwitcher />
    </S.SidebarContainer>
  );
});

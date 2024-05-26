import React, { useCallback, useContext, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from "src/hooks";
//Styles
import * as S from "./styles";
import * as Styles from "src/styles";
//Components
import { MdOutlineDashboard } from "react-icons/md";
//Types
import { IBoards } from "src/types/Boards";
import { BoardContext } from "src/context/BoardContext";
import { ENDPOINT } from "src/constants";

interface Props {

}

export const Sidebar: React.FC<Props> = React.memo(() => {
  //hooks
  const { id } = useParams();
  const { boards, setBoards } = useContext(BoardContext);
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
      <Styles.Title as="h4" color="white">
        Taskboard
      </Styles.Title>
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
    </S.SidebarContainer>
  );
});

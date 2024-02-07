import React, { useEffect, useState } from "react";
import { useHttp } from "src/hooks";
import { useNavigate } from 'react-router-dom';
//Styles
import * as S from "./styles";
import * as Styles from "src/styles";
//Components
import { MdOutlineDashboard } from "react-icons/md";
//Types
import { ENDPOINT } from "src/constants";
import { IBoards } from "src/types/Boards";

interface Props {}

export const Sidebar: React.FC<Props> = React.memo(() => {
  //hooks
  const { request } = useHttp();
  const navigate = useNavigate();
  //state
  const [boardNames, setBoardNames] = useState<string[]>([]);
  //handlers

  useEffect(() => {
    (async () => {
      const res = await request<IBoards[], any>({
        method: "get",
        path: ENDPOINT.BOARDS.LIST,
      });
      if (res) setBoardNames(res.map((board) => board.name));
    })();
  }, []);

  return (
    <S.SidebarContainer>
      <Styles.Title as="h4" color="white">
        Taskboard
      </Styles.Title>
      <S.List>
        {boardNames.map((name, i) => (
          <S.Item key={i}>
            <MdOutlineDashboard size={16}/>
            {name}
          </S.Item>
        ))}
      </S.List>
    </S.SidebarContainer>
  );
});

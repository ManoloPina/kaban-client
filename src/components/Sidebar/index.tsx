import React from "react";
//Styles
import * as S from "./styles";
import * as Styles from "src/styles";

interface Props {}

export const Sidebar: React.FC<Props> = React.memo(() => {
  return (
    <S.SidebarContainer>
      <Styles.Title as="h4" color="white">
        Taskboard
      </Styles.Title>
    </S.SidebarContainer>
  );
});

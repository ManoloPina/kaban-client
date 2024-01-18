import React from "react";
//Styles
import * as S from "./styles";
//Components
import { Sidebar } from "src/components/Sidebar";

interface Props {}

export const Home: React.FC<Props> = () => {
  return (
    <S.HomeContainer>
      <Sidebar />
    </S.HomeContainer>
  );
};

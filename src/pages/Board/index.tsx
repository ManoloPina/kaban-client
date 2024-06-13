import React, { useContext, useEffect, useMemo } from 'react';
import { BoardContext } from 'src/context/BoardContext';
import { useParams } from 'react-router';
import { useHttp } from 'src/hooks';
//Styles
import * as S from './styles';
//Components
import NewColumn from './NewColumn';


export const Board: React.FC = () => {

  const { id } = useParams();
  const { request } = useHttp();
  const { boards, setBoards } = useContext(BoardContext);

  const columns = useMemo(() =>
    boards.find(board => board._id === id)?.columns || [], [boards, id]);



  useEffect(() => {
    // fetchBoards();
  }, []);


  return (
    <>
      <S.BoardWrapper>
        {columns.map(columnName => (
          <div key={columnName}>Column</div>
        ))}
        <NewColumn />
      </S.BoardWrapper>
    </>
  );
}
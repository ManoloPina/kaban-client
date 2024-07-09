import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { BoardContext } from 'src/context/BoardContext';
import { useTheme } from 'styled-components';
//Styles
import * as S from './styles';
import * as Styles from 'src/styles';
import AddRoundedIcon from 'src/assets/icons/add_rounded.svg?react';
import Dialog from 'src/components/Dialog';

interface Props {
}

const Header: React.FC<Props> = () => {
  const { id } = useParams();
  const theme = useTheme();
  const { boards } = useContext(BoardContext);

  const [openModal, setOpenModal] = useState(false);

  const handleNewTaskBtn = useCallback(() => {
    setOpenModal(true);
  }, [openModal]);

  const handleModalClose = useCallback(() => setOpenModal(false), [openModal])

  const board = useMemo(() => boards
    .find(board => board._id === id) || null, [boards, id]);

  return (
    <>
      <S.HeaderContainer>
        <Styles.Title as="h1" color={theme.palette.text.primary}>{board?.name}</Styles.Title>
        <Styles.Button onClick={handleNewTaskBtn} startIcon={<AddRoundedIcon width={18} height={18} fill='white' />}>Add New Task</Styles.Button>
      </S.HeaderContainer>
      <Dialog title='Add New Task' open={openModal} onClose={handleModalClose}></Dialog>
    </>
  );
}

export default React.memo(Header);
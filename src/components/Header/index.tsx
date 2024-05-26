import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { BoardContext } from 'src/context/BoardContext';
//Styles
import * as S from './styles';
import * as Styles from 'src/styles';
import theme from 'src/styles/theme';
import AddRoundedIcon from 'src/assets/icons/add_rounded.svg?react';
import Modal from '../Modal';

interface Props {
}

const Header: React.FC<Props> = () => {
  const { id } = useParams();
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
        <Styles.Title as="h1" color={theme.palette.text.light}>{board?.name}</Styles.Title>
        <Styles.Button onClick={handleNewTaskBtn} startIcon={<AddRoundedIcon width={18} height={18} fill='white' />}>Add New Task</Styles.Button>
      </S.HeaderContainer>
      <Modal title='Add New Task' open={openModal} onClose={handleModalClose}></Modal>
    </>
  );
}

export default Header;
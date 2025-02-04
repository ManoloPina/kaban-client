import React from 'react';
//Styles
import * as S from './styles';
import * as Styles from 'src/styles';

interface Props {

}

const NewColumn: React.FC<Props> = () => {
  return (
    <S.Wrapper>
      <Styles.Title as="h2">This board is empty. Create a new column to get started.</Styles.Title>
      <Styles.Button variant='primary'>+ Add New Column</Styles.Button>
    </S.Wrapper>
  );
}

export default NewColumn;
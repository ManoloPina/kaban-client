import React, { ChangeEvent, useState } from 'react';
//Styles
import * as S from './styles'

interface Props {
  className?: string;
  onChange: (checked: boolean) => void;
}

export const Switcher: React.FC<Props> = React.memo(({ onChange, className }) => {
  const [checked, setChecked] = useState(false);
  //handlers
  const handleToggleSwitcher = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(checked);
    setChecked(e.target.checked);
  }
  return (
    <S.Label className={`switcher ${className}`} htmlFor='checkbox' checked={checked}>
      <input id='checkbox' type='checkbox'
        checked={checked}
        onChange={handleToggleSwitcher} />
    </S.Label>
  );
});
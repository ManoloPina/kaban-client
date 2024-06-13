import React, { useContext } from 'react';
import { AlertContext } from 'src/context/AlertContext';
//Components
import { Item } from './Item';
//Styles
import * as S from 'src/components/Alert/styles';

interface Props {

}

export const Alert: React.FC<Props> = () => {
  const { alerts, setAlerts } = useContext(AlertContext);

  //handlers
  const handleRemoveAlert = (index: number) => (_e: any) => {
    const _alerts = [...alerts];
    _alerts.splice(index, 1);
    setAlerts(_alerts);
  }

  if (alerts.length === 0) return null;

  return (
    <>
      {alerts.length > 0 && (
        <S.AlertWrapper>
          {alerts.map((alert, i) => (
            <Item key={i} index={i} {...alert} onRemove={handleRemoveAlert} />
          ))}
        </S.AlertWrapper>
      )}
    </>
  );
}


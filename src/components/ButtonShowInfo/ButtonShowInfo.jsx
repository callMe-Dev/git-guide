import React, { useState } from 'react';

/*
  Este componente lo podemos reutilizar al momento de querer mostrar
  informacion de manera dinamica cambiando el estado
  
  @textInBtn: string
  @component: react.Component
  @textWithState: string
*/
export default function ButtonShowInfo({
  textInBtn = '',
  component = null,
  textWithState = '',
}) {
  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => setShowInfo(!showInfo);

  return (
    <>
      <button
        className='buttonToShowInfo__btn'
        onClick={handleShowInfo}
        id={showInfo ? 'btnActive' : ' '}
      >
        <i
          className={'far fa-caret-square-right' + (showInfo ? ' rotate' : ' ')}
        ></i>
        {/* Valida si hay texto en el estado, y asi cambiara, sino se mantendra el inicial */}
        {showInfo
          ? textWithState.length > 0
            ? textWithState
            : textInBtn
          : textInBtn}
      </button>
      {/* El componente se renderizara que le pasemos por props */}
      {showInfo ? component : ''}
    </>
  );
}

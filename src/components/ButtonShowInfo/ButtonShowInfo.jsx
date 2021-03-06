import React, { useState } from 'react';

/*
  Este componente lo podemos reutilizar al momento de querer mostrar
  informacion de manera dinamica cambiando el estado
*/
export default function ButtonShowInfo({ textInBtn = '', component = null }) {
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
        {textInBtn}
      </button>
      {/* El componente se renderizara que le pasemos por props */}
      {showInfo ? component : ''}
    </>
  );
}

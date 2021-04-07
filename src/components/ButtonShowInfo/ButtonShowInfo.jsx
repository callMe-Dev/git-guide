import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
  Este componente lo podemos reutilizar al momento de querer mostrar
  informacion de manera dinamica cambiando el estado
  @param textInBtn: string
  @param component: react.Component
  @param textWithState: string
  @returns <button>{...}</button>
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

ButtonShowInfo.propTypes = {
  textInBtn: PropTypes.string,
  component: PropTypes.element,
  textWithState: PropTypes.string
}
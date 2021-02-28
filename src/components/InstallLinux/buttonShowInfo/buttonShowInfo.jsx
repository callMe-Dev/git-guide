import React, { useState } from 'react';

export default function buttonShowInfo({ distName, component }) {
  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => setShowInfo(!showInfo);

  return (
    <>
      <button
        className='InstallLinux__btn'
        onClick={handleShowInfo}
        id={showInfo ? 'btnActive' : ' '}
      >
        <i
          className={'far fa-caret-square-right' + (showInfo ? ' rotate' : ' ')}
        ></i>
        {distName}
      </button>
      {/* El componente se renderizara que le pasemos por props */}
      {showInfo ? component : ''}
    </>
  );
}

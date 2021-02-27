import React, { useState } from 'react';

export default function buttonShowInfo({ distName, component }) {
  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => setShowInfo(!showInfo);

  return (
    <>
      <button className='InstallLinux__btn' onClick={handleShowInfo}>
        {distName}
      </button>
      {showInfo ? component : ''}
    </>
  );
}

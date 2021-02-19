import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CommandContent from './CommandContent/CommandContent';

export default function Commands() {
  const [showDescription, setShowDescription] = useState(false);
  let history = useHistory();

  const handlePushView = (viewText) => {
    if (viewText === undefined) return;
    history.push(`/${viewText}`);
  };

  const handleShowDescription = () => {
    setShowDescription(!showDescription);
  }

  return (
    <div className="commandContainer">
      <button
        className='commandContainer__command__name'
        onClick={() => handlePushView('git-init'), handleShowDescription}
      >
        Git init
      </button>
      {
        handleShowDescription ? (
          <CommandContent description="Test"/>
        ) : (
          ''
        )
      }
    </div>
  )
}

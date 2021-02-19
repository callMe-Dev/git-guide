import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Commands() {
  let history = useHistory();

  const handlePushView = (viewText) => {
    if (viewText === undefined) return;
    history.push(`/${viewText}`);
  };


  return (
    <div>
      <button
        className='commands__name'
        onClick={() => handlePushView('git-init')}
      >
        Git init
      </button>
      
    </div>
  )
}

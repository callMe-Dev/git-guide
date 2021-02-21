import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

export default function CommandsContainer() {
  let history = useHistory();
  /*
   * Esto da la URL en la que se encuentra que seria '/commands'
   *
   * Y solo agrega el texto de la derecha
   */
  const match = useRouteMatch();

  const handlePushView = (viewText) => {
    if (viewText === undefined) return;

    // Esto enviara al usuario al texto que se coloque dependiendo del comando
    // En este caso es '/commands/${viewText}'
    history.push(`${match.url}/${viewText}`);
  };

  return (
    <div className='CommandContainer'>
      <p
        className='CommandContainer__command__name'
        onClick={() => handlePushView('git-init')}
      >
        <i className='fas fa-hashtag'></i>
        <span>git</span> init
      </p>
    </div>
  );
}

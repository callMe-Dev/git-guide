import React from 'react';
import { useHistory } from 'react-router-dom';

/*
 *
 * Este es solo una funcion la cual enviara a la 'url' que se le pase
 *
 *  @extCmdName: string
 */
export default function CommandName({ extCmdName }) {
  // @NOTE: extCmdName es el nombre del final de cada comando para ahorrarnos el 'git' del inicio

  let history = useHistory();

  const handlePushView = (viewText) => {
    if (viewText === undefined || viewText === null) return;

    // Esto enviara al usuario al texto que se coloque dependiendo del comando
    // En este caso es '/commands/${viewText}'
    history.push(`/${viewText}`);
  };

  return (
    <>
      <div className='CommandContainer__command'>
        <p
          className='CommandContainer__command__name'
          // Esto lleva a la ruta dependiendo del nombre unido a un guion
          onClick={() => handlePushView(`git-${extCmdName}`)}
        >
          <i className='fas fa-hashtag'></i>
          <span>git</span> {extCmdName}
        </p>
      </div>
    </>
  );
}

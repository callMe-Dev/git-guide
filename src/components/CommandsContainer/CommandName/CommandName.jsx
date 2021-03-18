import React from 'react';

/**
 * Este es solo una funcion la cual enviara a la 'url' que se le pase
 * @param extCmdName: string
 */
export default function CommandName({ extCmdName }) {
  // @NOTE: extCmdName es el nombre del final de cada comando para ahorrarnos el 'git' del inicio

  return (
    <div className='CommandContainer__command'>
      <a
        className='CommandContainer__command__name'
        // Esto manda a un comando por su id
        href={`/commands/#git-${extCmdName}`}
      >
        <i className='fas fa-hashtag'></i>
        <span>git</span> {extCmdName}
      </a>
    </div>
  );
}

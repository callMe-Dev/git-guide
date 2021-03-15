import React from 'react';
import { Link } from 'react-router-dom';

/*
 * Este es solo una funcion la cual enviara a la 'url' que se le pase
 *  @extCmdName: string
 */
export default function CommandName({ extCmdName }) {
  // @NOTE: extCmdName es el nombre del final de cada comando para ahorrarnos el 'git' del inicio

  return (
    <div className='CommandContainer__command'>
      <Link
        className='CommandContainer__command__name'
        to={`/commands/#git-${extCmdName}`}
      >
        <i className='fas fa-hashtag'></i>
        <span>git</span> {extCmdName}
      </Link>
    </div>
  );
}

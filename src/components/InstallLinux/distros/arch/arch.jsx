import React from 'react';

export default function arch() {
  return (
    <article className='arch__content'>
      <p>
        Para instalar <span>Git</span> en <span>Arch Linux</span> usaremos{' '}
        <span>pacman</span> dentro de la shell, ejecutando el siguiente comando
      </p>
      <code>
        $ sudo <span>pacman -Sy git</span>
      </code>
    </article>
  );
}

import React from 'react';

export default function debian() {
  return (
    <article className='dist__content'>
      <p>
        Para instalar <span>Git</span> en distros derivadas de{' '}
        <span>Debian</span> necesitamos abrir una terminal
      </p>
      <p>
        Puedes ejecutar el siguiente comando para abrir la terminal{' '}
        <span>ctrl + alt + t</span> o seleccionar simplemente el icono de la
        terminal
      </p>
      <p>Ejecuta esta serie de comandos:</p>

      <code>
        $ sudo <span>apt-get update</span>
      </code>
      <code>
        $ sudo <span>apt-get install git</span>
      </code>
      <p>
        Y puedes probar para comprobar la version de <span>Git</span>
      </p>
      <code>
        $ git <span>--version</span>
      </code>
    </article>
  );
}

import React from 'react';
import AnchorTag from '../AnchorTag/AnchorTag';

export default function GitIgnore() {
  return (
    // Tiene la clase de repository solamente para no repetir estilos
    <article className='Repository__content'>
      <p>
        El <span>.gitignore</span>
        sirve para decirle a Git qué archivos o directorios completos debe
        ignorar y no subir al repositorio de código.
      </p>
      <p>
        Hay código que no necesitas enviar a <span>git</span>, ya sea porque sea
        privado o no lo necesiten o no deban conocer las personas.
      </p>
      <p>
        El ejemplo más claro que se puede dar surge cuando se trabaja con
        sistemas de <span>gestión de dependencias</span>, como <span>npm</span>,
        <span>Bower</span>, <span>Composer</span>, etc.
      </p>
      <p>
        Para implementarlo es simple, agrega en la ruta <span>raiz</span> este{' '}
        <span>archivo</span>
      </p>
      <code>
        /<span>.gitignore</span>
      </code>
      <p>
        Dentro de este archivo debes añadir las carpetas o archivos que quieres
        que sean <span>ignorados</span>
      </p>
      <code>
        *.DS_Store <br /> <span>bower_components/</span> <br />
        node_modules <br /> <span>parcel</span> <br />
        .next <br />
        <span>*.env</span>
      </code>
      <p>
        Y asi con muchos otros, pero es dificil saber cuantas dependencias
        necesitan ser ignoradas, por eso te recomendamos esta pagina donde
        puedes crear un <span>gitIgnore</span> que se adapte a tus necesidades
      </p>
      <AnchorTag
        url='https://www.toptal.com/developers/gitignore'
        anchorText='gitIgnore.io'
        anchorKey='gitignore.io para creacion de archivos gitignore'
      />
      <p>Con todo listo podemos continuar :D</p>
      <br />
    </article>
  );
}

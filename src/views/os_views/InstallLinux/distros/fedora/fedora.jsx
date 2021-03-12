import React from 'react';

export default function fedora() {
  return (
    <article className='dist__content'>
      <p>
        Desde tu <span>shell</span>, instala <span>Git</span> usando{' '}
        <span>{'dnf'}</span>
      </p>

      <code>
        $ sudo <span>dnf install git</span>
      </code>
      <p>
        o <span>{'yum'}</span> en versiones más antiguas de Fedora:
      </p>
      <code>
        $ sudo <span>yum install git</span>
      </code>
      <p>
        Escribe <span>git --version</span> para verificar la versión y que esta
        se haya instalado correctamente:
      </p>

      <code>
        $ git <span>--version</span>
      </code>
    </article>
  );
}

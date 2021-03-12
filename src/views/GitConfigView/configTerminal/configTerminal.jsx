import React from 'react';
import ImportantNote from '../../../components/ImportantNote/ImportantNote';

export default function configTerminal() {
  return (
    <>
      <h2 className='GitConfigView__subTitle'>Configurar con Terminal:</h2>
      <article className='GitConfigView__content'>
        <p>
          Lo primero que deberás hacer cuando instales Git es establecer tu
          nombre de usuario y dirección de correo electrónico.
        </p>
        <p>
          Esto es importante porque
          <span> los commits de Git usan esta información</span>, y es
          introducida de manera inmutable en los commits que envías:
        </p>
        <p>Configura tu nombre de usuario:</p>
        <code>
          $ git <span> config --global user.name {'"John Doe"'}</span>
        </code>
        <p>Configura tu correo electronico:</p>
        <code>
          $ git <span> config --global user.email johndoe@example.com</span>
        </code>
        {/* Debemos convertir en un solo componente para que sea mucho mas facil de utilizar
            en otros files o contenido
        */}
        <ImportantNote
          content={
            <>
              {' '}
              <p>
                En caso quieras utilzar <span>Github</span> o{' '}
                <span>Gitlab</span> te recomendamos utilizar el mismo nombre de
                usuario o correo electronico para evitar errores de
                compatibilidad.
              </p>
            </>
          }
        />
      </article>
    </>
  );
}

import React from 'react';
import AnchorTag from '../../AnchorTag/AnchorTag';
// Assets
import repoCreate from './../../../assets/github/github-repo-new.png';
import repoName from './../../../assets/github/github-repo-name.png';
import repoPublicPrivate from './../../../assets/github/create-repository-public-private.png';
import repoButton from '../../../assets/github/create-repository-button.png';
import ButtonShowInfo from '../../ButtonShowInfo/ButtonShowInfo';

export default function Github() {
  return (
    <section className='Repository'>
      <h1 className='Repository__title'>
        Como crear un repositorio en <span>Github</span>
      </h1>
      <article className='Repository__content'>
        <p>
          Si es la primera vez que vas a entrar a <span>Github</span> y no
          tienes cuenta creada, te recomendamos leer un poco la{' '}
          <span>Documentacion oficial</span>
        </p>
        <AnchorTag
          url='https://docs.github.com/es/github/getting-started-with-github'
          anchorText='docs.github.com'
          anchorKey='github documentation github getting started'
        />
        <p>
          Con una cuenta de <span>Github</span> ya creada entonces sigamos con
          este tutorial :D
        </p>
        <p>
          Primero entra de nuevo <a href='https://github.com/'>Github</a>,
          inicia sesion con tu cuenta
        </p>
        <p>
          Justo despues dale al boton de <span>New</span>
        </p>
        <img src={repoCreate} alt='github create a new repository' />
        <p>
          Ahora solo coloca el nombre de tu <span>proyecto</span> o{' '}
          <span>repositorio</span>
        </p>
        <p>Recuerda que debe ser corto y conciso</p>
        <img src={repoName} alt='github repo create with name' />
        <p>
          Ahi mismo puedes agregar una pequeña <span>descripcion</span>
        </p>
        <p>
          Ahora solo selecciona si quieres que sea un repositorio{' '}
          <span>publico</span> o <span>privado</span>
        </p>
        <img
          src={repoPublicPrivate}
          alt='github repository public or private'
        />
        <p>
          Con todo esto solo queda crear el <span>repositorio</span> del
          proyecto
        </p>
        <img src={repoButton} alt='create a github repository button' />
      </article>
      <h2 className='Repository__subTitle'>
        Sincronizar tu proyecto con tu repositorio
      </h2>
      <article className='Repository__content'>
        <p>
          Si estas empezando con un proyecto lo mas sencillo es que lo unas con
          la <span>terminal</span>
        </p>
        <p>
          Principalmente en la <span>raiz</span> de la carpeta de tu proyecto
        </p>
        <code>
          $ git <span>init</span>
        </code>
        <p>
          Con eso tendras un archivo <span>.git</span> que sera ignorado al
          momento de subirlo a <span>Github</span>
        </p>
        <p>
          Antes de mostrarte los comandos, te recomendamos crear tu archivo{' '}
          <span>.gitignore</span>
        </p>
        <ButtonShowInfo textInBtn='Crear gitIgnore' />
      </article>
    </section>
  );
}

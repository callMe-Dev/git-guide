import React from 'react'
import repoPublicPrivate from './../../../assets/github/create-repository-public-private.png'
import ButtonShowInfo from '../../../components/ButtonShowInfo/ButtonShowInfo'
import ImportantNote from '../../../components/ImportantNote/ImportantNote'
import repoButton from '../../../assets/github/create-repository-button.png'
import repoCommands from '../../../assets/github/github-repo-commands.png'
import repoCreate from './../../../assets/github/github-repo-new.png'
import repoName from './../../../assets/github/github-repo-name.png'
import MetaHelmet from '../../../components/MetaHelmet/MetaHelmet'
import AnchorTag from '../../../components/AnchorTag/AnchorTag'
import LazyImg from '../../../components/LazyImg/LazyImg'
import GitIgnore from '../GitIgnore'

export default function Github() {
  return (
    <section className='Repository'>
      <MetaHelmet
        titleText='Configurar Github'
        description='Crear y configurar un repositorio en Github con Git'
      />
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
        <LazyImg source={repoCreate} imgAlt='boton de nuevo en github' />
        <p>
          Ahora solo coloca el nombre de tu <span>proyecto</span> o{' '}
          <span>repositorio</span>
        </p>
        <p>Recuerda que debe ser corto y conciso</p>
        <LazyImg
          source={repoName}
          imgAlt='input donde debemos poner el nombre de nuestro proyecto'
        />
        <p>
          Ahi mismo puedes agregar una pequeña <span>descripcion</span>
        </p>
        <p>
          Ahora solo selecciona si quieres que sea un repositorio{' '}
          <span>publico</span> o <span>privado</span>
        </p>
        <LazyImg
          source={repoPublicPrivate}
          imgAlt='estado de visualizacion de github en privado o publico'
        />
        <p>
          Con todo esto solo queda crear el <span>repositorio</span> del
          proyecto
        </p>
        <LazyImg
          source={repoButton}
          imgAlt='boton de creacion de un repositorio en github'
        />
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
        <ButtonShowInfo
          textInBtn='Crear .gitignore?'
          component={<GitIgnore />}
        />
        <p>
          Para poder sincronizar tu proyecto ya creado a <span>Github</span>{' '}
          sigue estos comandos que da la misma pagina oficial
        </p>
        <LazyImg
          source={repoCommands}
          imgAlt='comandos del repositorio de github'
        />
        <ImportantNote
          content={
            <>
              <p>
                Recuerda que debes colocar en <span>git remote</span> el url de
                tu proyecto que salga al crear tu repositorio.
              </p>
              <p>
                De lo contrario tendras un error o simplemente no funcionara
              </p>
            </>
          }
        />
        <p>
          Ahora con todo esto listo es hora de seguir con los{' '}
          <span>comandos</span> y asi tener un mejor{' '}
          <span>flujo de trabajo</span> :D
        </p>
      </article>
    </section>
  )
}

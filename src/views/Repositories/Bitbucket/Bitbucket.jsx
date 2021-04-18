import React from 'react'
import LazyImg from '../../../components/LazyImg/LazyImg'
import MetaHelmet from '../../../components/MetaHelmet/MetaHelmet'

import createRepoBitbucket from '../../../assets/bitbucket/create-repo.png'
import createProjectBitbucket from '../../../assets/bitbucket/create-project.png'
import ButtonShowInfo from '../../../components/ButtonShowInfo/ButtonShowInfo'
import GitIgnore from '../GitIgnore'

export default function Bitbucket() {
  return (
    <section className='Repository'>
      <MetaHelmet
        titleText='Crear repositorio en Bitbucket'
        description='Como crear y configurar un repositorio en BitBucket'
      />

      <h1 className='Repository__title'>
        Como crear un repositorio en <span>Bitbucket</span>
      </h1>
      <article className='Repository__content'>
        <p>
          Luego de crear tu cuenta en <span>Bitbucket</span>, solo debes dar el
          signo más o crear <span>Repositorio</span>
        </p>
        <p>
          Tambien ahi mismo puedes importar mas repositorios, que ya hayas hecho
          o como si quisieras clonar uno
        </p>
        <LazyImg
          source={createRepoBitbucket}
          imgAlt='Crear un repositorio en Bitbucket'
          imgClass='Bitbucket-img'
        />

        <p>Luego, complete los datos que necesita para su proyecto</p>
        <p>Además de un nombre, descripción y un avatar de su preferencia</p>
        <LazyImg
          source={createProjectBitbucket}
          imgAlt='Fomulario del repositorio en Bitbucket'
          imgClass='Bitbucket-img'
        />

        <p>
          Después de eso, puede clonar el repositorio en su{' '}
          <span>máquina local</span> y poder agregar nuevas funciones o comenzar
          el proyecto de sus sueños.
        </p>
        <code>
          $ git <span>clone</span> <br /> https://usuario@bitbucket.org/user/
          repositorio/carpeta_destino
        </code>
        <ButtonShowInfo
          textInBtn='Crear .gitignore?'
          component={<GitIgnore />}
        />
      </article>
    </section>
  )
}

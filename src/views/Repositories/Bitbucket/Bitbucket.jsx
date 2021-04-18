import React from 'react'
import LazyImg from '../../../components/LazyImg/LazyImg'
import MetaHelmet from '../../../components/MetaHelmet/MetaHelmet'

import createRepoBitbucket from '../../../assets/bitbucket/create-repo.png'
import createProjectBitbucket from '../../../assets/bitbucket/create-project.png'

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
          Despues de eso podras clonar el repositorio en tu{' '}
          <span>maquina local</span> y poder agregar nuevas features o iniciar
          el proyecto de tus sueños
        </p>
        <code>
          $ git <span>clone</span> <br /> https://usuario@bitbucket.org/user/
          repositorio/carpeta_destino
        </code>
      </article>
    </section>
  )
}

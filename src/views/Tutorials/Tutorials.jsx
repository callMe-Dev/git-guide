import React from 'react'
import MetaHelmet from '../../components/MetaHelmet/MetaHelmet'
import YtIframe from '../../components/YtIframe/YtIframe'

export default function Tutorials() {
  return (
    <section className='Tutorials'>
      <MetaHelmet
        titleText='Tutoriales de Git'
        description='Tutoriales de git y manejor de ramas en yotube'
      />

      <h1 className='Tutorials__title'>
        Tutoriales de <span>Git</span>
      </h1>
      <article className='Tutorials__content'>
        <p>
          A continuación te mostraremos algunos tutoriales que puedes encontrar
          gratis en Youtube
        </p>
        <p>
          Fueron seleccionados por opinión personal del equipo de desarrollo,
          pero puede buscar muchos más por su cuenta y aprender aún más.
        </p>

        <p>
          Git y Github | Curso Práctico de Git y Github Desde Cero{' '}
          <span>- Fazt</span>
        </p>
        <YtIframe
          classText='Tutorials__iframes'
          iframeSrc='https://www.youtube.com/embed/HiXLkL42tMU'
        />

        <p>
          Tutorial de GIT para principantes! - Usando la linea de comandos en
          Git <span>- Pelardo Nerd</span>
        </p>
        <YtIframe
          classText='Tutorials__iframes'
          iframeSrc='https://www.youtube.com/embed/kEPF-MWGq1w'
        />

        <p>
          Git and GitHub for Beginners - Crash Course{' '}
          <span>- freeCodeCamp</span>
        </p>
        <YtIframe
          iframeSrc='https://www.youtube.com/embed/RGOj5yH7evk'
          classText='Tutorials__iframes'
        />

        <p>
          GIT / GITHUB [ Tutorial en Español - Parte 1 ] ♥ Inicio Rápido para
          Principiantes ♥ <span>- Bluuweb</span>
        </p>
        <YtIframe
          classText='Tutorials__iframes'
          iframeSrc='https://www.youtube.com/embed/hWglK8nWh60'
        />

        <p>
          Descargar y Configurar Git para Trabajar con Github | SSH Keys{' '}
          <span>- FalconMasters</span>
        </p>
        <YtIframe
          classText='Tutorials__iframes'
          iframeSrc='https://www.youtube.com/embed/wHh3IgJvXcE'
        />

        <p>
          Los videos no tienen un orden específico, solo los recomendamos para
          tu aprendizaje :D
        </p>
      </article>
    </section>
  )
}

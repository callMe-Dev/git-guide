import React from 'react'
import MetaHelmet from '../../../MetaHelmet/MetaHelmet'
import data from '../commands.json'

export default function ListCommands() {
  /**
   * Iteramos la data fuera del return del Html del componente
   * ya que si no lo renderizara correctamente
   * @file data {
   *  @param name: string
   *  @param description: string
   *  @param gitCmd?: string
   * }
   */
  const getData = data.map((gitCommand) => {
    return (
      <div
        key={gitCommand.name}
        id={gitCommand.name}
        className='ListCommands__container'>
        <h2 className='ListCommands__subTitle'>{gitCommand.name}</h2>
        <article
          className='ListCommands__content'
          // Esto agrega el contenido parseado en forma de Html
          dangerouslySetInnerHTML={{
            __html: gitCommand.description
          }}></article>
      </div>
    )
  })

  return (
    <section className='ListCommands'>
      <MetaHelmet
        titleText='Comandos'
        description='Comandos completos de git'
      />
      <h1 className='ListCommands__title'>
        Comandos de <span>Git</span>
      </h1>
      {getData}
    </section>
  )
}

import React from 'react'
import MetaHelmet from '../../../MetaHelmet/MetaHelmet'
import data from '../commands.json'

export default function ListCommands() {
  /**
   * We iterate the data out of the return of the component's Html
   * since if it did not render it correctly
   * @file data {
   *  @param {string} name
   *  @param {string} description
   *  @param {string} gitCmd
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
          // This adds the parsed content in the form of Html
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

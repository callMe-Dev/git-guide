import React from 'react';
import MetaHelmet from '../../../MetaHelmet/MetaHelmet';
import data from '../commands.json';

export default function ListCommands() {
  console.log(data);

  /*
   * Iteramos la data fuera del return del Html del componente
   * ya que si no lo renderizara correctamente
   */
  const getData = data.map((gitCommand) => {
    return (
      <div
        key={gitCommand.name}
        id={gitCommand.name}
        className='ListCommands__container'
      >
        <h2 className='ListCommands__subTitle'>{gitCommand.name}</h2>
        <article className='ListCommands__content'>
          {gitCommand.description}
        </article>
      </div>
    );
  });

  return (
    <section className='ListCommands'>
      <MetaHelmet
        titleText='Comandos'
        description='Comandos completos de git'
      />
      <h1 className='ListCommands__title'>Comandos</h1>
      {getData}
    </section>
  );
}

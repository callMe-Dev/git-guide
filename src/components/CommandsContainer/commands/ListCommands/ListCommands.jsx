import React from 'react';
import data from '../commands.json';

export default function ListCommands() {
  console.log(data);

  /*
   * Iteramos la data fuera del return del Html del componente
   * ya que si no lo renderizara correctamente
   */
  const getData = data.map((gitCommand) => {
    return (
      <div key={gitCommand.name} id={gitCommand.name}>
        <h2 className='ListCommands__subTitle'>{gitCommand.name}</h2>
        <article className='ListCommands__content'>
          <p>{gitCommand.description}</p>
        </article>
      </div>
    );
  });

  return <section className='ListCommands'>{getData}</section>;
}

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
      <article className='ListCommands__content' key={gitCommand.name}>
        <p>{gitCommand.name}</p>
      </article>
    );
  });

  return <section className='ListCommands'>{getData}</section>;
}

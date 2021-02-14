import React from 'react';

export default function CommandsContainer() {
  return (
    <div className='CommandsContainer'>
      <article className='CommandsContianer__content'>
        <h1 className='CommandsContainer__content__title'>
          Como instalar Git:
        </h1>
        <div className='CommandsContainer__content__flex'>
          <button className='CommandsContainer__content-btnOs'>Windows</button>
          <button className='CommandsContainer__content-btnOs'>Linux</button>
          <button className='CommandsContainer__content-btnOs'>Mac Os</button>
        </div>
      </article>
      <article className='CommandsContianer__content'>
        <h1 className='CommandsContainer__content__title'>
          Como crear un repositorio:
        </h1>
        <div className='CommandsContainer__content__flex'>
          <button className='CommandsContainer__content-btnRepo'>Github</button>
          <button className='CommandsContainer__content-btnRepo'>Gitlab</button>
        </div>
      </article>
      <article className='CommandsContianer__content'>
        <button className='CommandsContainer__content-btnKnowMore'>
          Conocer Comandos
        </button>
      </article>
    </div>
  );
}

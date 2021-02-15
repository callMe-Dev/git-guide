import React from 'react';
import { useHistory } from 'react-router-dom';

export default function CommandsContainer({ setShowMenu }) {
  let history = useHistory();

  const handlePushView = (viewText) => {
    if (viewText === undefined) return;
    history.push(`/${viewText}`);
    setShowMenu(false);
  };

  return (
    <div className='CommandsContainer'>
      <article className='CommandsContianer__content'>
        <h1 className='CommandsContainer__content__title'>
          Como instalar Git:
        </h1>
        <div className='CommandsContainer__content__flex'>
          <button
            className='CommandsContainer__content-btnOs'
            onClick={() => handlePushView('windows')}
          >
            Windows
          </button>
          <button
            className='CommandsContainer__content-btnOs'
            onClick={() => handlePushView('linux')}
          >
            Linux
          </button>
          <button
            className='CommandsContainer__content-btnOs'
            onClick={() => handlePushView('macos')}
          >
            Mac Os
          </button>
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

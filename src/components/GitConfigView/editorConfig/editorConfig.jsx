import React, { useState } from 'react';

export default function editorConfig() {
  const [showImportantNote, setShowImportantNote] = useState(false);
  const [showEditorConfig, setShowEditorConfig] = useState(false);

  const handleShowEditorConfig = () => {
    setShowEditorConfig(!showEditorConfig);
  };

  const handleShowImportantNote = () => {
    setShowImportantNote(!showImportantNote);
  };

  return (
    <>
      <h2 className='GitConfigView__subTitle'>Configurar tu Editor?</h2>

      <button className='GitConfigView__btn' onClick={handleShowEditorConfig}>
        {showEditorConfig ? 'Mostrar menos' : 'Sii! :D'}
      </button>
      {showEditorConfig ? (
        <article className='GitConfigView__content'>
          <p>
            Ahora que tu identidad está configurada, puedes elegir el editor de
            texto por defecto que se utilizará cuando Git necesite que
            introduzcas un mensaje.
          </p>
          <p>
            Si no indicas nada, Git usará el editor por defecto de tu sistema,
            que generalmente es Vim.
          </p>
          <p>
            Si quieres usar otro editor de texto como Emacs, puedes hacer lo
            siguiente:
          </p>
          <code>
            $ git <span>config --global core.editor</span> emacs
          </code>

          <p>
            Tambien puedes configurar para usar <span>Visual Studio Code</span>{' '}
            colocando el siguiente comando:
          </p>
          <code>
            $ git <span>config --global {'"code --wait"'}</span>
          </code>

          <div className='importantNote'>
            <div
              className='importantNote__flex'
              onClick={handleShowImportantNote}
            >
              <i
                className={
                  'fas fa-caret-right ' +
                  `${showImportantNote ? ' rotate' : ''}`
                }
              ></i>
              <h3 className='importantNote__title'>Important...</h3>
            </div>
            {showImportantNote ? (
              <>
                <p>
                  Se usa <span>global</span> para hacer la confirguración en
                  todo el bash
                </p>
                <p>
                  <span>code</span> es la abreviatura de Visual Studio Code
                </p>
                <p>
                  El <span>wait</span> significa que el bash debe esperar a que
                  se configure y se cierre esa ventana
                </p>
              </>
            ) : (
              ''
            )}
          </div>
        </article>
      ) : (
        ''
      )}
    </>
  );
}

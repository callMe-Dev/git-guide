import React from 'react'
import ImportantNote from 'components/ImportantNote/ImportantNote'

export default function editorConfigContent() {
  return (
    <article className='GitConfigView__content'>
      <p>
        Ahora que tu identidad está configurada, puedes elegir el editor de
        texto por defecto que se utilizará cuando Git necesite que introduzcas
        un mensaje.
      </p>
      <p>
        Si no indicas nada, Git usará el editor por defecto de tu sistema, que
        generalmente es Vim.
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
      <ImportantNote
        content={
          <>
            <p>
              Se usa <span>global</span> para hacer la configuración en todo el
              bash.
            </p>
            <p>
              <span>code</span> es la abreviatura de Visual Studio Code.
            </p>
            <p>
              El <span>wait</span> significa que el bash debe esperar a que se
              configure y se cierre esa ventana.
            </p>
          </>
        }
      />
    </article>
  )
}

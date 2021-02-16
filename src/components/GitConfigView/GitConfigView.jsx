import React, { useState } from 'react';
import ConfigManual from './configManual/configManual';
import ConfigTerminal from './configTerminal/configTerminal';
import KnowConfig from './knowConfig/knowConfig';

export default function GitConfigView() {
  const [showImportantNote, setShowImportantNote] = useState(false);

  return (
    <section className='GitConfigView'>
      <h1 className='GitConfigView__title'>
        Como configurar <span>Git</span>
      </h1>
      <article className='GitConfigView__content'>
        <p>
          Es genial que git sea multiplataforma, eso significa que estos pasos
          sirven para cualquier Sistema Operativo donde tengas <span>Git</span>
          instalado
        </p>
      </article>
      <ConfigTerminal
        showImportantNote={showImportantNote}
        setShowImportantNote={setShowImportantNote}
      />
      <ConfigManual />
      <KnowConfig />
      <h2 className='GitConfigView__subTitle'>Configurar tu Editor?</h2>
      <button>Si! :D</button>
    </section>
  );
}

import React from 'react';
import ConfigManual from './configManual/configManual';
import ConfigTerminal from './configTerminal/configTerminal';
import KnowConfig from './knowConfig/knowConfig';
import EditorConfig from './editorConfig/editorConfig';

export default function GitConfigView() {
  return (
    <section className='GitConfigView'>
      <h1 className='GitConfigView__title'>
        Como configurar <span>Git</span>
      </h1>

      <ConfigTerminal />
      <ConfigManual />
      <KnowConfig />
      <EditorConfig />
    </section>
  );
}

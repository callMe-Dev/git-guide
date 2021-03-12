import React from 'react';
import ConfigTerminal from './configTerminal/configTerminal';
import ConfigManual from './configManual/configManual';
import EditorConfig from './editorConfig/editorConfig';
import KnowConfig from './knowConfig/knowConfig';

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

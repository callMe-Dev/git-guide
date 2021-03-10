import React from 'react';
import EditorConfigContent from './editorConfigContent';
import ButtonShowInfo from '../../ButtonShowInfo/ButtonShowInfo';

export default function editorConfig() {
  return (
    <>
      <h2 className='GitConfigView__subTitle'>Configurar tu Editor?</h2>

      <ButtonShowInfo
        textInBtn='Sii! :D'
        textWithState='Mostrar Menos'
        component={<EditorConfigContent />}
      />
    </>
  );
}

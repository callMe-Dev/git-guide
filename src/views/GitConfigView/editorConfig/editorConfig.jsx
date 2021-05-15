import React from 'react'
import ButtonShowInfo from 'components/ButtonShowInfo/ButtonShowInfo'
import EditorConfigContent from './editorConfigContent'

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
  )
}

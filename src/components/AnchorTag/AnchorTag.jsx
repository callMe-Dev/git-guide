import React from 'react';

/*
 * AnchorTag es solo un componente de etiqueta <a> pero con mas funcionalidades
 * @anchorText = string
 * @url = string
 * @anchorKey? = string
 */
export default function AnchorTag({ anchorText, url, anchorKey = '' }) {
  return (
    <a href={url} target='_blank' rel='noreferrer' accessKey={anchorKey}>
      <i className='fas fa-paperclip'></i>
      {anchorText}
    </a>
  );
}

import React from 'react';

export default function AnchorTag({ anchorText, url, anchorKey = '' }) {
  return (
    <a href={url} target='_blank' rel='noreferrer' accessKey={anchorKey}>
      <i className='fas fa-paperclip'></i>
      {anchorText}
    </a>
  );
}

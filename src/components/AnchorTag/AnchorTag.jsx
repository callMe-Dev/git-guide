import React from 'react';

/**
 * @param anchorText: string
 * @param url: string
 * @param anchorKey?: string
 * @returns <a>{...}</a>
 */
export default function AnchorTag({ anchorText, url, anchorKey = '' }) {
  return (
    <a href={url} target='_blank' rel='noreferrer' accessKey={anchorKey}>
      <i className='fas fa-paperclip'></i>
      {anchorText}
    </a>
  );
}

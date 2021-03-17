import React from 'react';

/*
 * @source: string
 * @imgAlt?: string
 * @imgClass?: string
 * @func?: Function
 */
export default function LazyImg({
  source = '',
  imgAlt = '',
  imgClass = '',
  func = null,
}) {
  // Este es un componente para renderizar images con lazy loading
  return (
    <img
      src={source}
      alt={imgAlt}
      className={imgClass}
      onClick={func}
      loading='lazy'
    />
  );
}

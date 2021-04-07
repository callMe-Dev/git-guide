import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param source: string
 * @param imgAlt?: string
 * @param imgClass?: string
 * @param func?: Function
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

LazyImg.propTypes = {
  source: PropTypes.string,
  imgAlt: PropTypes.string,
  imgClass: PropTypes.string,
  func: PropTypes.func
}
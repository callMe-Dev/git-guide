import React from 'react';
import AnchorTag from '../../../AnchorTag/AnchorTag';

export default function gentoo() {
  return (
    <article className='gentoo__content'>
      <p>
        Dentro de la propia store de <span>Gentoo Linux</span> puedes revisar el
        package de <span>Git</span>
      </p>
      <AnchorTag
        anchorText='Gentoo Store'
        anchorKey='gentoo linux'
        url='https://packages.gentoo.org/packages/dev-vcs/git'
      />

      <p>
        Y para instalarlo mediante <span>shell</span> debes hacer este comando
      </p>
      <code>
        $ sudo <span>emerge --ask --verbose dev-vcs/git</span>
      </code>
    </article>
  );
}

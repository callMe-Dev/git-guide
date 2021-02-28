import React from 'react';
import AnchorTag from '../../../AnchorTag/AnchorTag';

export default function others() {
  return (
    <article className='dist__content'>
      <p>
        Existen demasiadas distros <span>Linux</span> en el mundo pero puedes
        buscar en caso tengas alguna distro no muy conocida
      </p>

      <p>openSUSE</p>
      <code>
        $ zypper <span>install git</span>
      </code>

      <p>Mageia</p>
      <code>$ urpmi git</code>
      <p>Nix/NixOS</p>
      <code>
        $ nix-env <span>-i git</span>
      </code>

      <p>FreeBSD</p>
      <code>
        $ pkg <span>install git</span>
      </code>

      <p>Solaris 9/10/11 (OpenCSW)</p>
      <code>
        $ pkgutil <span>-i git</span>
      </code>

      <p>Solaris 11 Express</p>
      <code>
        $ pkg <span>install developer/versioning/git</span>
      </code>

      <p>OpenBSD</p>
      <code>
        $ pkg_add <span>git</span>
      </code>

      <p>Alpine</p>
      <code>
        $ apk <span>add git</span>
      </code>

      <p>No encuentras tu distribucion?</p>
      <AnchorTag
        url='https://git-scm.com/'
        anchorText='Puedes revisar el sitio original'
        anchorKey='git documentation'
      />
    </article>
  );
}

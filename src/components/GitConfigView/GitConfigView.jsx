import React, { useState } from 'react';
import ConfigManual from './configManual/configManual';
import ConfigTerminal from './configTerminal/configTerminal';

export default function GitConfigView() {
  const [showImportantNote, setShowImportantNote] = useState(false);

  return (
    <section className='GitConfigView'>
      <h1 className='GitConfigView__title'>
        Como configurar <span>Git</span>
      </h1>
      <article className='GitConfigView__content'>
        <p>
          Es genial que git sea multiplataforma, eso significa que estos pasos
          sirven para cualquier Sistema Operativo donde tengas <span>Git</span>
          instalado
        </p>
      </article>
      <ConfigTerminal
        showImportantNote={showImportantNote}
        setShowImportantNote={setShowImportantNote}
      />
      <ConfigManual />
      <h2 className='GitConfigView__subTitle'>Comprobar configuracion:</h2>
      <article className='GitConfigView__content'>
        <p>
          Si quieres comprobar tu configuración, puedes usar el siguiente
          comando para mostrar todas las propiedades que Git ha configurado:
        </p>
        <code>
          $ git <span>config --list</span>
        </code>
        <code>
          $ git <span>config --list</span>
          <br />
          <br />
          <span>user.name</span> = John Doe <br /> <span>user.email</span> =
          johndoe@example.com <br />
          <span>color.status</span> = auto
          <br />
          <span>color.branch</span> = auto <br /> <span>color.interactive</span>{' '}
          = auto <br /> <span>color.diff</span> = auto
        </code>
        <p>
          Puede que veas claves repetidas, porque Git lee la misma clave de
          distintos archivos <span>(/etc/gitconfig y ~/.gitconfig</span>, por
          ejemplo)
        </p>
        <p>
          En estos casos, Git usa el último valor para cada clave única que ve
        </p>
        <p>
          También puedes comprobar el valor que Git utilizará para una clave
          específica ejecutando git config <span>key</span>:
        </p>
        <code>
          $ git <span>config user.name</span> John Doe
        </code>
      </article>
    </section>
  );
}

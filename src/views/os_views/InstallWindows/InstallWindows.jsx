import React from 'react';
import installGitWizard from '../../../assets/winAssests/install-git-windows.png';
import MetaHelmet from '../../../components/MetaHelmet/MetaHelmet';
import LazyImg from '../../../components/LazyImg/LazyImg';

export default function InstallWindows() {
  return (
    <section className='InstallWindows'>
      <MetaHelmet
        titleText='Instalar en Windows'
        description='Instalar Git en Windows'
      />
      <h1 className='InstallWindows__title'>
        Como instalar <span>Git</span> en Windows
      </h1>
      <article className='InstallWindows__content'>
        <p>
          Para instalar git en Windows, primero tenemos que ir al sitio web de
          git y esperar a que se termine la descarga.
        </p>
        <p>
          Una vez que se haya terminado la descarga, tendremos un archivo (.exe)
          el cual abrimos y tendremos un asistente de configuración.
        </p>

        <a
          href='https://git-scm.com/'
          target='_blank'
          rel='noreferrer'
          accessKey='git install windows'
        >
          <i className='fas fa-paperclip'></i>Pagina de Git para descargar el
          .exe
        </a>

        <p>Solamente lo descargamos y lo instalamos como cualquier programa</p>

        <LazyImg
          source={installGitWizard}
          imgAlt='git windows wizard manager'
        />

        <p>
          En esa pestaña solamente le daras en next hasta que se instale
          automaticamente
        </p>

        <p>
          Ya que terminamos todo el proceso de instalación, tendremos el Git
          Bash, esto nos va a servir para ejecutar los comandos de git en
          Windows (Una especie de nuevo CMD).{' '}
        </p>

        <p>
          Para verificar que todo está bien, abrimos el Git Bash y ejecutamos el
          siguiente comando:
        </p>

        <code>
          $ git <span>--version</span>
        </code>

        <p>
          Si te muestra algunos numeros entonces tendras ya Git instalado, si te
          muestra que no es reconocido entonces repite el procedimiento
        </p>
      </article>
    </section>
  );
}

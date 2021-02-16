import React from 'react';

export default function GitConfigView() {
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
      <h2 className='GitConfigView__subTitle'>Configurar manualmente:</h2>
      <article className='GitConfigView__content'>
        <p>
          Archivo <span> ~/.gitconfig</span> o <span>~/.config/git/config</span>
          : Este archivo es específico de tu usuario. Puedes hacer que Git lea y
          escriba específicamente en este archivo pasando la opción{' '}
          <span>--global.</span>
        </p>
        <p>
          En Windows, Git busca el archivo <span>.gitconfig</span> en el
          directorio $HOME (para mucha gente será
          <span>(C:\Users\$USER)</span>
        </p>
        <p>
          También busca el archivo <span>/etc/gitconfig</span>, aunque esta ruta
          es relativa a la raíz MSys, que es donde decidiste instalar Git en tu
          sistema Windows cuando ejecutaste el instalador.
        </p>
      </article>
    </section>
  );
}

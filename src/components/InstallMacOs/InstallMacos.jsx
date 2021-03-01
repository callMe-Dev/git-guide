import React from 'react';

export default function MacOs() {
  return(
    <section className="InstallMacos">
      <h1 className="InstallMacos__title">
        Como instalar <span>Git</span> en Mac Os
      </h1>
      <article className="InstallMacos__content">
        <p>
          La forma más sencilla de instalar git en tu Mac es a través de la línea de comandos.
        </p>
        <p>
          Para eso, debes dirigirte a la página web de <a href="https://brew.sh/index_es">Homebrew</a> donde verás un comando similar a este:
        </p>
        <code>
          $curl https://raw.githubusercontent.com/Homebrew...
        </code>
        <p>Tienes que copiarlo y pegarlo en la terminal de Mac (para abrirla, puedes abrir la carpeta Aplicaciones, luego Utilidades y hacer doble clic en Terminal).</p>
        <p>
          Una vez finalizado esto, puedes reiniciar la consola y ejecutar el siguiente comando:
        </p>
        <code>
          $ brew install git
        </code>
        <p>
          Listo! Ya puedes usar Git en tus proyectos :D
        </p>
      </article>
    </section>
  );
}
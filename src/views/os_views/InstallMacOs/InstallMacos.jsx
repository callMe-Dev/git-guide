import MetaHelmet from 'components/MetaHelmet/MetaHelmet'
import AnchorTag from 'components/AnchorTag/AnchorTag'

export default function MacOs() {
  return (
    <section className='InstallMacos'>
      <MetaHelmet
        titleText='Instalar en MacOs'
        description='Instalar Git en MacOs'
      />
      <h1 className='InstallMacos__title'>
        Como instalar <span>Git</span> en MacOs
      </h1>
      <article className='InstallMacos__content'>
        <p>
          La forma más sencilla de instalar git en tu <span>Mac</span> es a
          través de la línea de comandos.
        </p>
        <p>
          Para eso, debes dirigirte a la página web de{' '}
          <a href='https://brew.sh/index_es'>Homebrew</a> donde verás un comando
          similar a este:
        </p>
        <code>
          $ curl <span>https://raw.githubusercontent.com/</span>
        </code>
        <p>
          Tienes que copiarlo y pegarlo en la terminal de <span>Mac</span> (para
          abrirla, puedes abrir la carpeta Aplicaciones, luego Utilidades y
          hacer doble clic en Terminal).
        </p>
        <p>
          Una vez finalizado esto, puedes reiniciar la consola y ejecutar el
          siguiente comando:
        </p>
        <code>
          $ brew <span>install git</span>
        </code>
        <p>
          Si no quieres tener que hacer mas comandos o tienes algun problema con
          tu shell
        </p>
        <p>
          El equipo de <span>Git</span> mantiene un paquete binario para{' '}
          <span>MacOs</span> y está disponible para su descarga en el sitio web
          de Git
        </p>
        <AnchorTag
          url=' https://git-scm.com/download/mac'
          anchorText='git-scm.com/download/mac'
        />
        <p>
          Listo! Ya puedes usar Git en tus proyectos <span>:D</span>
        </p>
      </article>
    </section>
  )
}

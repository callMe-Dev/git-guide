import AnchorTag from '../AnchorTag/AnchorTag'

export default function ComunidadContent() {
  return (
    <div className='ComunidadContent'>
      <p>
        <span>callMeDev</span>
      </p>
      <p>
        Puedes unirte a nuestra comunidad de <span>discord</span>
      </p>
      <p>Creamos mas proyectos, colaboramos y aprendemos juntos</p>
      <p>
        Puedes preguntar acerca de este y mas proyectos en los cuales puedes
        colaborar y poner en practica tus conocimientos
      </p>
      <AnchorTag
        anchorText='Unete con Discord'
        url='https://discord.gg/RTdXPfbz3K'
        anchorKey='Servidor de Discord de CallMeDev'
      />
    </div>
  )
}

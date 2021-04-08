import React from 'react'
import ButtonShowInfo from '../../../components/ButtonShowInfo/ButtonShowInfo'
import MetaHelmet from '../../../components/MetaHelmet/MetaHelmet'
// Distros
import Debian from './distros/debian/debian'
import Fedora from './distros/fedora/fedora'
import Gentoo from './distros/gentoo/gentoo'
import CentOs from './distros/centOs/centOs'
import Others from './distros/others/others'
import Arch from './distros/arch/arch'

export default function InstallLinux() {
  return (
    <section className='InstallLinux'>
      <MetaHelmet
        titleText='Instalar en Linux'
        description='Instalar Git en Linux'
      />
      <h1 className='InstallWindows__title'>
        Como instalar <span>Git</span> en Linux
      </h1>
      <article className='InstallLinux__content'>
        <p>
          Una pequeña nota es que <span>Git</span> fue desarrollado
          originalmente para la versión del sistema operativo Linux
        </p>

        <p>
          Por lo tanto, tiene sentido que sea fácil de configurar para
          ejecutarse en Linux
        </p>
        <p>
          Puede instalar <span>Git</span> en Linux a través de la herramienta de
          administración de paquetes que viene con cada distribucion
        </p>
        <p>
          Selecciona o has <span>click</span>
          en tu distribucion para desplegar la informacion ;D
        </p>
      </article>
      <h2 className='InstallLinux__subTitle'>Distribuciones:</h2>
      {/* 
        Este boton mostrara la informacion del componente 
        
        @textInBtn: string
        @component: React.Component
       */}
      <ButtonShowInfo textInBtn='Debian/Ubuntu' component={<Debian />} />
      <ButtonShowInfo textInBtn='Fedora' component={<Fedora />} />
      <ButtonShowInfo textInBtn='Gentoo' component={<Gentoo />} />
      <ButtonShowInfo textInBtn='CentOs' component={<CentOs />} />
      <ButtonShowInfo textInBtn='Arch Linux' component={<Arch />} />
      <ButtonShowInfo textInBtn='Others' component={<Others />} />
    </section>
  )
}

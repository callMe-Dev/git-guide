import React from 'react';
import ButtonShowInfo from './buttonShowInfo/buttonShowInfo';
import Debian from './debian/debian';
import Fedora from './fedora/fedora';

export default function InstallLinux() {
  return (
    <section className='InstallLinux'>
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
        
        @distName: string = nombre en el boton
        @component: React.Component = un componente que se renderizara al dar click
       */}
      <ButtonShowInfo distName='debian' component={<Debian />} /> <br />
      <ButtonShowInfo distName='fedora' component={<Fedora />} />
    </section>
  );
}

import React from 'react';
import AnchorTag from '../../components/AnchorTag/AnchorTag';
import MetaHelmet from '../../components/MetaHelmet/MetaHelmet';

export default function ContentHome() {
  return (
    <section className='ContentHome'>
      <MetaHelmet
        titleText='Basic Guide'
        description='Guía de comandos básicos de Git para desarrolladores'
      />
      <h1 className='ContentHome__title'>
        Bienvenido a la guía básica de los comandos de <span>Git</span>
      </h1>
      <article className='ContentHome__content'>
        <p>
          Esta guía fue construida para aquellas personas que les cuesta un poco
          aprender a utilizar Git
        </p>
        <p>
          Hache te mostraremos los comandos básicos y esenciales para que puedas
          tener un buen control sobre las versiones de tus aplicaciones o
          proyectos Frontend, Backend, etc.
        </p>
        <p>
          Y cuando puedas tener estos conceptos puedas seguir desarrollando con
          mayor velocidad, eficiencia y puedas construir Software de calidad.
        </p>
        <p>
          Antes de comenzar a aprender vamos a sentar las bases y preparar lo
          necesario para empezar a utilizar Git
        </p>
      </article>
      <h2 className='ContentHome__subTitle'>¿Que es Git?</h2>
      <article className='ContentHome__content'>
        <p>
          Es un sistema de control de versiones que nos va a servir para
          trabajar en equipo de una manera mucho más simple y optima cuando
          estamos desarrollando software.
        </p>
        <p>
          Con Git podemos controlar todos los cambios que se hacen en nuestra
          aplicación y en nuestro código, pudiendo volver al código previo a
          cualquier modificación, abrir diferentes ramas de desarrollo, etc.
        </p>
        <p>
          Vamos a poder trabajar en equipo de una manera muy sencilla y
          optimizada, de forma que si tenemos dos o más personas trabajando en
          ciertas funcionalidades del proyecto, nosotros podemos estar
          trabajando en nuestra parte del código por separado.
        </p>

        <AnchorTag
          anchorText='Conocer mas acerca de Git!'
          url='https://git-scm.com/about'
          anchorKey='git'
        />
      </article>
      <h2 className='ContentHome__subTitle'>Importancia de Git</h2>
      <article className='ContentHome__content'>
        <p>
          El control de versiones es una de las tareas fundamentales para la
          administración de un proyecto de desarrollo de software en general.
          Surge de la necesidad de mantener y llevar control del código que
          vamos programando, conservando sus distintos estados.
        </p>
        <p>
          Aunque trabajemos solos, sabemos que surge la necesidad de gestionar
          los cambio entre distintas versiones de un mismo código o hacer ramas
          para tener diferentes versiones y probar nuevas características.
        </p>
      </article>
    </section>
  );
}

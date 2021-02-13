import React from 'react';

export default function ContentHome() {
  return (
    <div className='ContentHome'>
      <h1 className='ContentHome__title'>
        Bienvenido a la guía básica de los comandos de <span>Git</span>
      </h1>
      <div className='ContentHome__content'>
        <p>
          Esta guía fue construida para aquellas personas que les cuesta un poco
          aprender a utilizar Git
        </p>
        <p>
          Aqui te mostraremos los comandos basicos y escenciales para que puedas
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
      </div>
      <h2 className='ContentHome__subTitle'>Que es Git?</h2>
    </div>
  );
}

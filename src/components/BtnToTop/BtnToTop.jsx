import arrowTop from '../../assets/arrowTop.svg';

// El inView viene del layout que especifica si esta en la vista el elemento
// en caso de que no, el boton no aparecera
export default function BtnToTop({ inView }) {
  const scrollToTop = () => {
    // Esto manda hacia la cima del objeto window (browser)
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={'BtnToTop ' + `${!inView ? 'view' : 'noView'}`}
      onClick={scrollToTop}
    >
      <img src={arrowTop} alt='arrow to top' className='BtnToTop__arrow' />
    </div>
  );
}

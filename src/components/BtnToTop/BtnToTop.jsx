import arrowTop from '../../assets/arrowTop.svg';

export default function BtnToTop({ inView }) {
  const scrollToTop = () => {
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

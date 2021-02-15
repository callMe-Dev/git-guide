import arrowTop from '../../assets/arrowTop.svg';

export default function BtnToTop() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='BtnToTop' onClick={scrollToTop}>
      <img src={arrowTop} alt='arrow to top' className='BtnToTop__arrow' />
    </div>
  );
}

import PropTypes from 'prop-types'
import arrowTop from 'assets/arrowTop.svg'
import LazyImg from '../LazyImg/LazyImg'

// The inView comes from the layout that specifies if the element is in the view
// if not, the button will not appear
export default function BtnToTop({ inView }) {
  const scrollToTop = () => {
    // This sends to the top of the window object
    window.scrollTo(0, 0)
  }

  return (
    <div
      className={'BtnToTop ' + `${!inView ? 'view' : 'noView'}`}
      onClick={scrollToTop}
    >
      <LazyImg
        source={arrowTop}
        imgAlt='arrow to top'
        imgClass='BtnToTop__arrow'
      />
    </div>
  )
}

BtnToTop.propTypes = {
  inView: PropTypes.bool.isRequired
}

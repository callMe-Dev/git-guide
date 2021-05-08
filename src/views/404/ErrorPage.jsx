import React from 'react'
import { useLocation, useHistory } from 'react-router'

import MetaHelmet from '../../components/MetaHelmet/MetaHelmet'
import errorAnimalIllustration from '../../assets/page-404/error-animal.svg'

export default function ErrorPage() {
  const location = useLocation()
  const history = useHistory()

  console.log(location.pathname, window.location.pathname)

  const handleClickToHome = () => {
    history.push('/')
    window.scrollTo(0, 0)
  }

  return (
    <section className='ErrorPage'>
      <MetaHelmet titleText='Error 404' />
      <img
        className='ErrorPage__img'
        src={errorAnimalIllustration}
        alt='Error Cat Illustration'
      />
      <div className='ErrorPage__content'>
        <h2 className='ErrorPage__content-text'>
          Parece que la pagina {location.pathname}, no fue encontrada 🤔
        </h2>
        <button
          className='ErrorPage__content-btn'
          type='button'
          onClick={handleClickToHome}>
          VOLVAMOS AL INICIO
        </button>
      </div>
    </section>
  )
}

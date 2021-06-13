import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 *
 * @param {Function} setImgTheme
 * @returns JSX.Element
 * */
export default function DarkMode({ setImgTheme }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const lightIcon = 'fa-lightbulb'
  const darkIcon = 'fa-moon'
  const [icon, setIcon] = useState(lightIcon)
  const body = document.body

  const checkTheme = () => {
    if (theme === 'dark') {
      body.classList.add('Dark')
      setIcon(darkIcon)
    } else {
      body.classList.add('Light')
      setIcon(lightIcon)
    }
  }

  useEffect(() => {
    checkTheme()
  }, [])

  const handleChangeTheme = (event) => {
    const checked = event.target.checked

    if (checked) {
      body.classList.replace('Light', 'Dark')
      setTheme('Dark')
      setImgTheme('dark')
      setIcon(darkIcon)
      localStorage.setItem('theme', 'dark')
    } else {
      body.classList.replace('Dark', 'Light')
      setTheme('light')
      setImgTheme('light')
      setIcon(lightIcon)
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className='DarkMode'>
      <span className='text-2xl self-center'>
        <i className={`fas DarkMode__Icon ${icon}`}></i>
      </span>
      <label className='DarkMode__Switch'>
        <input
          type='checkbox'
          onChange={handleChangeTheme}
          name=''
          id=''
          checked={theme === 'light' ? false : true}
        />
        <span className='Slider Round'></span>
      </label>
    </div>
  )
}

DarkMode.propTypes = {
  setImgTheme: PropTypes.func.isRequired
}

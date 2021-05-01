import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 *
 * @param setImgTheme: Function
 *
 * @returns JSX.Element
 * */
export default function DarkMode({ setImgTheme }) {
  const toggleRef = useRef()
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const lightIcon = 'fa-lightbulb'
  const darkIcon = 'fa-moon'
  const [icon, setIcon] = useState(lightIcon)
  const body = document.body

  useEffect(() => {
    checkTheme()
  }, [])

  const checkTheme = () => {
    if (!theme) {
      localStorage.setItem('theme', 'light')
    }
    if (theme === 'dark') {
      body.classList.add('Dark')
      setIcon(darkIcon)
    } else {
      body.classList.add('Light')
      setIcon(lightIcon)
    }
  }

  const changeTheme = () => {
    if (toggleRef.current.checked) {
      setTheme('Dark')
      setImgTheme('dark')
      setIcon(darkIcon)
      localStorage.setItem('theme', 'dark')
      body.classList.replace('Light', 'Dark')
    } else {
      setTheme('light')
      setImgTheme('light')
      setIcon(lightIcon)
      localStorage.setItem('theme', 'light')
      body.classList.replace('Dark', 'Light')
    }
  }

  return (
    <div className='DarkMode'>
      <div>
        <span className='text-2xl self-center'>
          <i className={`fas DarkMode__Icon ${icon}`}></i>
        </span>
        <label className='DarkMode__Switch'>
          <input
            ref={toggleRef}
            type='checkbox'
            onChange={changeTheme}
            checked={theme === 'light' ? false : true}
            name=''
            id=''
          />
          <span className='Slider Round'></span>
        </label>
      </div>
    </div>
  )
}

DarkMode.propTypes = {
  setImgTheme: PropTypes.func.isRequired
}

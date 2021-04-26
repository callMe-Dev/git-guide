import React, { useState, useRef, useEffect } from 'react'
import PropTypes from "prop-types"

export default function DarkMode({ setImgTheme }) {
  const toggleRef = useRef()
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [icon, setIcon] = useState('fa-sun')
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
      setIcon('fa-moon')
    } else {
      body.classList.add('Light')
      setIcon('fa-sun')
    }
  }

  const changeTheme = () => {
    if (toggleRef.current.checked) {
      setTheme('Dark')
      setImgTheme('dark')
      setIcon('fa-moon')
      localStorage.setItem('theme', 'dark')
      body.classList.replace('Light', 'Dark')
    } else {
      setTheme('light')
      setImgTheme('light')
      setIcon('fa-sun')
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
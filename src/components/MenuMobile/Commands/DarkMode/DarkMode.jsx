import React, { useState, useRef, useEffect } from 'react'

export default function DarkMode({ setImgTheme }) {
  const toggleRef = useRef()
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const body = document.body

  useEffect(() => {
    if(!theme){
      localStorage.setItem('theme', 'light')
    }
    theme === 'dark' ? body.classList.add('Dark') : 'light'

  }, [])

  const changeTheme = () => {
    if(toggleRef.current.checked){
      setTheme('Dark') 
      setImgTheme('dark')
      localStorage.setItem('theme', 'dark')
      body.classList.remove('light')
      body.classList.add('Dark')
    }else{
      setTheme('light')
      setImgTheme('light')
      localStorage.setItem('theme', 'light')
      body.classList.remove('Dark')
      body.classList.add('light')
    }
  }

  return (
    <div className='DarkMode'>
      <h1 className='DarkMode__Title'>Dark Mode</h1>
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
  )
}

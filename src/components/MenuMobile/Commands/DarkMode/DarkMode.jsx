import React, { useState, useRef } from 'react'

export default function DarkMode() {
  const toggleRef = useRef()
  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  const changeTheme = () => {
    if(toggleRef.current.checked){
      setTheme('Dark') 
      localStorage.setItem('theme', 'dark')
    }else{
      setTheme('light')
      localStorage.setItem('theme', 'light')
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

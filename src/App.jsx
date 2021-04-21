import { useState, useEffect } from "react"
// Views
import Layout from './views/Layout/Layout'

function App() {

  const theme = localStorage.getItem('theme')
  
  const [dark, setDark] = useState('')
   
  useEffect(() => {
    if(!theme) localStorage.setItem('theme', 'light')
    if(theme === 'dark'){
      setDark('Dark')
    }else{
      setDark('')
    }
  },[theme])

  return (
    <div className={`App ${dark}`}>
      <div className='App__grid'>
        <Layout />
      </div>
    </div>
  )
}

export default App

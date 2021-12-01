import { StrictMode } from 'react'
import { render } from 'react-dom'
import App from './App'
import './index.scss'

const root = document.getElementById('root')

render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
)

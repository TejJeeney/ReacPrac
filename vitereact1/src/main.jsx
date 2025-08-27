import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Demo from './Demo.jsx'

const re = (
  <a href = "https://www.example.com" target="_blank">
    Visit Example.com
  </a>
)

const ReactElement = React.createElement(
  'a',
  {href: "https://www.google.com", target: '_blank'},
  `Visit Google.com through react element`
)

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Demo />
    {re}
    {ReactElement}
  </>
)

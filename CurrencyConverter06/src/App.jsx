import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl justify-center bg-amber-200'> This is Currency Converter App </h1>
    </>
  )
}

export default App

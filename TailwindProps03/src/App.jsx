import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
import AnotherCard from './components/AnotherCard.jsx'
import Base from './components/base.jsx' 


function App() {
return (
  <>
    <h1 className='font-bold bg-yellow-400 rounded'>This is a Tailwind CSS example</h1>
    <Card />
    <br className='my-4' />
    <AnotherCard />
    <br />
    <AnotherCard />
    <br /> 
    <Base username="Jeeney" address="New York" />
    <br />
    <Base username= "Moron"/>
  </>
  )
}

export default App

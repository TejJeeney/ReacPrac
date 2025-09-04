import { use, useState } from 'react'
import { useCallback } from 'react'
import './App.css'
import Page from './Page.jsx'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  
  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+?><:{}[]"

    for (let i =1; i<= Array.length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass = str.charAt(char) 

    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])


  return (
    <>
    <div className= 'w-full max-w-md mx-auto shadow-md rounded-lg my-8 text-orange-500 bg-gray-700'> Bsic shizzz</div>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'><Page /></div>
    </>
  )
}

export default App
 
import { useState, useRef } from 'react'
import { useCallback, useEffect } from 'react'
import './App.css'
import Page from './Page.jsx'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+?><:{}[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    console.log(`values printed for pass ${pass}`)

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copypassword = useCallback(() => {
    passwordRef.current?.select()
    alert("Password Copied")
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordgenerator()
  }, [length, numberAllowed, charAllowed, passwordgenerator])

  return (
    <>
      <h1 className='text-3xl pt-15 font-bold underline text-center text-blue-500'>
        Password Generator
      </h1>

      <div className='w-full max-w-6/10 mt-10 mx-auto py-2 align-middle my-8 rounded text-center  shadow-emerald-800 text-blue-500 bg-slate-800'>
        Password Generator
        <div className='flex shadow rounded-lg overflow-hidden px-2 mb-4'>
          <input
            type="text"
            value={password}
            placeholder='Your Password'
            className='w-full py-1 px-3 outline-none bg-white rounded my-6'
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={copypassword}
            className='outline-none bg-pink-500 text-white w-auto h-auto rounded-3xl py-1 px-3 my-6 hover:bg-red-800'>
            Copy
          </button>
          <div className='flex text-xs gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
                min={0}
                max={50}
                value={length}
                className='cursor-pointer'
                onChange={(e) => setLength(e.target.value)}
              />

              <label> Length: {length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="number-input"
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
              />

              <label>Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id='character-input'
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label>Characters</label>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App

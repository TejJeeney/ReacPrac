import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import React from 'react'
import './App.css'


function App() {
  

  let [counter, setCounter]= useState(0)
  // let counter = 0
  // let val = document.getElementById("countervalue")
  // let btn = document.getElementById("addbtn")
  // let rmvbtn = document.getElementById("removebtn")
  // let para = document.getElementById("para")

  function inc() {
    if (counter<20){ 
      setCounter(counter += 1)
      console.log(`The value after adding counter ${counter}`)
    }
    else {console.log("Exceeding 20")}
    // val.innerHTML= `Counter Value: ${counter}`
    // btn.innerHTML = `Add value ${counter}`
    // rmvbtn.innerHTML = `remove value ${counter}`
    // para.innerHTML = `Here's another counter: ${counter}`
    // return counter
  }

  function dec() {
    if(counter<=0){
      console.log("Counter should not be negative")
    }
    else { 
      setCounter(counter -= 1)
      console.log(`The value after removing counter ${counter}`)
    }
    // val.innerHTML = `Counter Value: ${counter}`
    // btn.innerHTML = `Add value ${counter}`
    // rmvbtn.innerHTML = `remove value ${counter}`
    // para.innerHTML = `Here's another counter: ${counter}`

    // return counter
  }
  return (
    <>
      <h1>Basic react</h1>
      <h2 id ="countervalue">Counter value: {counter}</h2>

      <button id='addbtn' onClick={inc}>Add value {counter}</button>
      <br/>
      <button id='removebtn' onClick={dec}>remove value {counter}</button>
      <p id='para'>Here's another counter: {counter}</p>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className= "bg-blue-300 text-green-600 rounded-4xl ">Basic heading to check the Tailwind CSS styles</h1>
      <div className='pb-7 mt-2 border border-black-solid'> this is a container
        <p className='text-red-500 border border-dashed border-yellow-600 pt-2 pb-4'>This is a paragraph to test the styles.</p>
      </div>
    </>
  )
}

export default App

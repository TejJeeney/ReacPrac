import React from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import UserLogin from './components/UserLogin'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <div> This is awesome</div>
      <UserLogin  />
      <Profile />
    </UserContextProvider>
  )
}

export default App
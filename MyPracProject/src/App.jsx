import './App.css'
import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authservice from './appwrite/auth'
import { login, logout} from './store/authSlice'
import { Outlet } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/footer'




function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authservice.getCurrentUser()
    .then(
      (userData) => { 
        if(userData){
          dispatch(login({userData}))
          console.log(`User detected: ${userData.$id}`)
        }
        else {
          dispatch(logout())
          console.log("No user detected")
        }
        
      }
    )
    .finally(() => setLoading(false))

  }, [])


  return !loading ? (
    <div className='w-full h-screen bg-brown-400 flex flex-col justify-center items-center gap-4'>
      <h1 className="text-4xl font-bold text-pink-600">Welcome to the App</h1>
      <div className='w-full block bg-red-200 p-3 m-4'>
        <Header />
        <main className='min-h h-20 m-3 bg-cyan-200 p-3 align-middle center'>
         TODO: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;

}

export default App

import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo, Button, Input } from './import.js'
import { useForm } from 'react-hook-form'
import {login as authLogin} from '../store/authSlice'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'




function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm() //Ye jo line hai it is a default import from react-hook. ---handleSubmit--- is the function to handle the form submission.
    const [error, setError] = useState("")

    const login = async(data) => {  //handlesubmit will pass the form data to this function. Ye function is different from the Input component.
        setError("")

        try {
            const session = await authService.login(data)
            if(session) {
                const userData = await authService.getCurrentUser() // fetching the current user data after login
                if(userData) {
                    dispatch(authLogin(userData)) // dispatching the login action with userData as payload
                    navigate('/') // ye automatically navigate to the home page 
                }
            }

        } catch (error) {
            setError(error.message)   
        }
    }


  return (
    <div className="w-full flex items-center justify-center"> 
        <div className='w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 shadow-lg mt-20'> 
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full text-3xl font-bold italic max-w-[100%]'>
                    <Logo width="100%" />
                </span>
            </div>
            <h2 className= "text-center text-2xl font-bold leading-tight m-2">
                Sign-In into your account
            </h2>
            <p className="mt-2 text-center text-base text-black/60">
            Don&apos;t have an acccount?&nbsp;
                <Link to = "/signup" className= "font-medium text-primary hover:underline transition duration-200">
                Sign Up
                </Link>
            </p>
            {error && <p className="text-red-600 mt-8 mb-3 text-center">{error}</p>}
            <form onSubmit= {handleSubmit(login)} // handleSubmit will call login function yahn pe. 
            //ye handleSubmit lega input as an feild aur ---"handleSubmit"--- is baked-in function of react-hook-form
            className='mt-8 mb-2'>
                <div className='sapce-y-5'> 
                    <Input 
                    label= "Email"
                    type= "email"
                    placeholder= "Enter your email address" 
                    {...register("email", { //register is a syntax is form ka. Agar spread nhi kiya to the form will update value on all the inputs
                        // Object's mai value dena is not compulsary at all. 
                        required: true,
                        validate: {
                            matchPattern: (value) => // pattern is used to validate the email format
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) || "Invalid email address" //regex for email validation agar sahi to true varna..
                        }
                    })}
                    />
                    <Input 
                    label = "Password"
                    placeholder= "Enter your password"
                    type= "password"
                    {...register("password", {
                        required: true,
                        validate: {
                            minLength: (value) => value.length >= 6 || "Mininum 6 characters are required"
                        }
                    })}
                    />

                    <Button>Sign-in</Button>



                </div>

            </form>
        </div>
    </div>
    
  )
}

export default Login
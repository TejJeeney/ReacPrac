import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo, Button, Input } from './import.js'
import { useForm } from 'react-hook-form'
import { login as authSignup, login } from '../store/authSlice.js'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth.js'


function Signup() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm()

    const signup = async () => {

        setError("")

        try {
            const userData = await authService.createAccount(data)

            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData)  dispatch(login(userData));
                navigate('/home')
                
            }
        } catch (error) {
            setError(error.message)

        }



    }

    return (
        <div>Signup</div>
    )
}

export default Signup
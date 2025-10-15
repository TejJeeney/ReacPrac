import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo, Button, Input } from './import.js'
import { useForm } from 'react-hook-form'
import { login as authSignup} from '../store/authSlice.js'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth.js'


function Signup() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm()

    // `data` comes from react-hook-form's handleSubmit and contains form values
    const signup = async (data) => {

        setError("")

        try {
            const createResult = await authService.createAccount(data)

            if (createResult) {
                const fetchedUser = await authService.getCurrentUser()
                if (fetchedUser) dispatch(authSignup(fetchedUser));
                navigate("/")

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
                <h2 className="text-center text-2xl font-bold leading-tight m-2">
                    Sign-up to create your account
                </h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link to="/login" className="font-medium text-primary hover:underline transition duration-200">
                        Sign In
                    </Link>
                </p>

                {error && <p className="text-red-600 mt-8 mb-3 text-center">{error}</p>}

                <form onSubmit={handleSubmit(signup)}
                    className='mt-8 mb-2'>
                    <div className='sapce-y-5'>
                        <Input
                            label="Name:"
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })
                            }
                        />

                        <Input
                            label="Email"
                            type="email"
                            placeholder="Enter your email address"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) =>
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) || "Invalid email address"
                                }
                            })}
                        />

                        <Input
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                            {...register("password", {
                                required: true,
                                validate: {
                                    minLength: (value) => value.length >= 6 || "Mininum 6 characters are required"
                                }
                            })}
                        />

                        <Button type="submit" className="hover:bg-blue-300 cursor-pointer w-full mt-6">
                            Create Account
                        </Button>



                    </div>

                </form>
            </div>
        </div>
    )
}

export default Signup
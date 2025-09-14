import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../Context/UserContext'

function UserLogin() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const UserSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }


    return (
        <>
            <div>
                <h2> Login here</h2>
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style= {{fontFamily: "Lucida Handwriting"}}
                    placeholder='Enter username' />
                <input
                    type='password'
                    value={password}
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password" />
                <button onClick={UserSubmit}>Login</button>

                <input
                    type="checkbox"
                    id="rememberMe"
                    onClick={() => {
                        const x = document.getElementById("password")
                        if (x.type === "password") {
                            x.type = "text"
                            x.style.fontFamily = "Lucida Handwriting"
                        }
                        else {
                            x.type = "password"
                        }
                    }
                    }

                />Show Password

            </div>
        </>
    )
}

export default UserLogin
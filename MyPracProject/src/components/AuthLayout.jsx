import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { useForm } from 'react-hook-form'


function Protect({
    children,
    authentication = true
}) {

    const navigate = useNavigate()
    const authStatus = useSelector((state) => state.auth.status)
    const [loading, setLoading] = useState(true)

    console.log("Protect :: authStatus", authStatus)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        }
        else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }

        setLoading(false)
    }, [authStatus, authentication, navigate])

    return (
        loading ?
            <div>
                Loading...
            </div> :
            <>
                {children}
            </>
    )
}

export default Protect
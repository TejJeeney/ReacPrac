import React from 'react'
import { useParams } from 'react-router'
import App from '../../App'


function User() {
    const { let_id } = useParams()
    return (
        <>
            <div>User: {let_id} </div>
            <App />
        </>
    )
}

export default User
import React from 'react'

export default function Base({username, address="partsUnknown"}) {
    return(
        <>
        <h1 className='text-2xl font-bold'>Hi there, {username}</h1>
        <h2 className='text-xl'>We know you are from {address}</h2>
        </>
    )
}


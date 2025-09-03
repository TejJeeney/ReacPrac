import React from 'react'

export default function Base({username, address="partsUnknown"}) {
    return(
        <>
        <h1 className='text-2xl font-bold'>Hi there, {username}</h1>
        <h2 className='text-xl'>We know you are from {address}</h2>
        <h3 className='bg-blue-300 text-center tracking-tight text-3xl text-black line-through italic rounded-3xl'>This is a base component</h3>
        <div className='bg-slate-300 p-4 rounded-xl tracking-wider flex flex-wrap justify-center'> Hello this is a simple div to show some Tailwind CSS classes in action.</div>
        </>
    ) 
}


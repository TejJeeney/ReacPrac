import React from 'react'

function Prac() {
    return (
        <>
            <h1> We are creating a random prac page</h1>
            <br />
            <h2>At this very moment it <span>is</span> {new Date().toLocaleTimeString()}</h2>
            <div>Prac</div>
            <button>Click Me ASAP</button>
            <input type="text" placeholder="Type something..." />
            <button type="submit">Submit</button>
        </>
    )
}
import React from "react";

export default function Page({name, anotherone="DJ khaled"}) {
    return(
        <>
        <div className="bg-cyan-950 rounded-3xl flex flex-wrap tracking-tight text-amber-100"> This is a second tag and mos def the {anotherone} </div>
        <h1> Welcome here {name}</h1>
        </>
    )
}
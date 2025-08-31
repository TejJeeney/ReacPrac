import React from 'react'

export default function Pure({ Jeeney = "Yoooo" }) {
    return (
        <div className="p-6 flex flex-col items-center space-y-4">
            <h1 id="place" className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-6 py-4 rounded-xl shadow-lg text-3xl md:text-4xl font-extrabold text-center tracking-tight">
                This is a text to savour and I shall rejoice
            </h1>
            <h2 className="bg-white/5 text-amber-300 px-4 py-2 rounded-md shadow-sm text-lg md:text-2xl font-semibold text-center">
                Basic one {Jeeney}
            </h2>
        </div>
    )
}
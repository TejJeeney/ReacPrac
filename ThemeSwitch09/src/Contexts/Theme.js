import React from 'react'
import { useContext } from 'react'

export const ThemeContext = React.createContext({
    themeMode: "light",
    lightTheme: () => { },
    darkTheme: () => { },
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}




// import React from 'react'
// import { useContext, useState } from 'react'
// import { createContext } from 'react'

// export const ThemeContext1 = createContext(
//     { themeMode: "light", lightTheme: () => { }, darkTheme: () => { } }
// )

// export const ThemeProvider1 = ({ children, values }) => {
//     const [themeMode, setThemeMode] = useState("light")

//     const lightTheme = () => {
//         setThemeMode("light")
//     }

//     const darkTheme = () => {
//         setThemeMode("dark")
//     }

//     return (
//         <ThemeContext1.Provider value={{ themeMode, lightTheme, darkTheme }}>
//             {children}
//         </ThemeContext1.Provider>
//     )
// }
// export default function useTheme1() {
//     return useContext(ThemeContext1)
// }
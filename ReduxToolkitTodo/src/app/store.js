import {configureStore} from '@reduxjs/toolkit'
import { useEffect } from 'react'
import todoReducer from '../features/todo/todoslice'



export const store = configureStore({
    reducer: todoReducer
})

 

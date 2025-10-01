import { createSlice } from "@reduxjs/toolkit";

const initialState = { // crearting an initial state necessary for a redux slice
    status: false, 
    userData: null
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true, // setting the status to true when user logs in
            state.userData = action.payload.userData // setting the userData to the payload received from the login action
        },

        logout: (state) => {
            state.status = false,
            state.userData = null
        }
    }
})


export const {login, logout} = authSlice.actions

export default authSlice.reducer

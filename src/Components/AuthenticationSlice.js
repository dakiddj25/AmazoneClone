import { createSlice } from '@reduxjs/toolkit'

export const authenticationSlice = createSlice({
    name: "currentUser",
    initialState: null,
    reducers: {
        setCurrentUser: (state, action) => {
           return action.payload 
            }
    },
})


export const { setCurrentUser } = authenticationSlice.actions
export default authenticationSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { signInUser, signUpUser } from "./authApi";


const initialState = {
    currentUser: null,
    currentUserToken:null,
    loading: false,
    error: null,
    success: null

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    
    reducers: {
        clearErrorOrSuccessMsg: (state) => {
            state.error = null
            state.success = null
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(signUpUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(signUpUser.fulfilled, (state, action) => {

                state.loading = false
                state.error = null
                state.currentUser = action.payload.userId
                state.success = action.payload.message            

            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false
                state.success = null
                state.error = action.payload                

            })



            .addCase(signInUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(signInUser.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.currentUserToken = action.payload.token
                state.success = true

            })
            .addCase(signInUser.rejected, (state, action) => {
                state.loading = false
                state.success = null
                state.error = action.payload

            })



    }



})


export const {clearErrorOrSuccessMsg} = authSlice.actions
export default authSlice.reducer
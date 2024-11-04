import { createSlice } from "@reduxjs/toolkit";
import { createUserProfile, signInUser, signUpUser } from "./authApi";


const initialState = {
    currentUser: null,
    currentUserToken:null,
    showUpdateProfileDialogMenu: false,
    showUpdateProfileDialog: false,
    userProfile:{
        name: null,
        bio: null,
        avatar: null,
    },
    loading: false,
    error: null,
    success: null

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    
    reducers: {
        clearErrorOrSuccessMsg: (state) => {
            state.loading = false
            state.error = null
            state.success = null
        },
        logoutUser: (state) => {
            state.currentUser = null
            state.currentUserToken = null 
        },
        toggleUpdateProfileDialogMenu: (state, action) => {
            state.showUpdateProfileDialogMenu = action.payload
        },
        toggleUpdateProfileDialog: (state, action) => {
            state.showUpdateProfileDialog = action.payload;
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



            .addCase(createUserProfile.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(createUserProfile.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.userProfile = action.payload.profile
                state.success = action.payload.message

            })
            .addCase(createUserProfile.rejected, (state, action) => {
                state.loading = false
                state.success = null
                state.error = action.payload

            })



    }



})


export const {clearErrorOrSuccessMsg, logoutUser, toggleUpdateProfileDialogMenu, toggleUpdateProfileDialog} = authSlice.actions
export default authSlice.reducer
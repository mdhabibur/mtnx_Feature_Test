import { createSlice } from "@reduxjs/toolkit"
import { generateScript } from "./scriptApi"


const initialState = {
    scripts: [],
    loading: false,
    error: null,
    success: null,
}

const scriptSlice = createSlice({
    name: 'script',
    initialState,

    reducers: {
        clearErrorOrSuccessMsg: (state) => {
            state.error = null
            state.success = null
        },
    },


    extraReducers: (builder) => {
        builder
            .addCase(generateScript.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(generateScript.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.scripts.push(action.payload)
                state.success = true;
            })
            .addCase(generateScript.rejected, (state, action) => {
                state.loading = false;
                state.success = null;
                state.error = action.payload;
            });

    }


})

export const {clearErrorOrSuccessMsg} = scriptSlice.actions
export default scriptSlice.reducer
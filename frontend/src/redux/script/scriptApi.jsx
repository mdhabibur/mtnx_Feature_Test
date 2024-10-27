import { createAsyncThunk } from "@reduxjs/toolkit"

export const generateScript = createAsyncThunk(
    "script/generateScript",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await fetch(credentials.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : `Bearer ${credentials.currentUserToken}`
                },
                body: JSON.stringify(credentials.formData),

            })

            const data = await response.json()
            return data
            
        } catch (error) {
            console.log("error: ", error);
            return rejectWithValue("An error occurred during script generation FE");
        }
    }
)
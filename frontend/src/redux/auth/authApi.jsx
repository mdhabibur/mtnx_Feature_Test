import {createAsyncThunk} from "@reduxjs/toolkit"

export const signUpUser = createAsyncThunk(
    "auth/signUpUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await fetch(credentials.url, 
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(credentials.formData)
                }
            )

            const data = await response.json()
            return data

            
        } catch (error) {
            console.log("error FE: ", error)
            return rejectWithValue("an error occurred during sign-up in FE")
            
        }
    }
)
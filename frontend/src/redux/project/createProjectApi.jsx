import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../config/apiConfig";


export const generateProjectTemplates = createAsyncThunk(
    'project/generateProjectTemplates',
    async (credentials, {rejectWithValue }) => {

        try {
            //construct the url with query parameters
            const query = new URLSearchParams({
                media_type: credentials.formData.mediaType,
                post_type: credentials.formData.postType,
                aspect_ratio: credentials.formData.aspectRatio,
                items_n: credentials.formData.templatesPerPage,
            }).toString()

            const apiUrl = `${credentials.url}?${query}`

            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${credentials.token}`
                },
            })

            const data = await response.json()
            return data
            
        } catch (error) {
            return rejectWithValue(error
            );

        }
    }
)


export const createProject = createAsyncThunk(
    'project/createProject',
    async (credentials, {rejectWithValue }) => {

        try {

            const {text, mediaType, postType } = credentials.formData
            
            const formDataToSent = { text, mediaType, post_type: postType }

            console.log("form data to sent: ", formDataToSent)

            const response = await fetch(credentials.url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${credentials.token}`
                },
                body: JSON.stringify(formDataToSent)
            })

            const data = await response.json()
            return data
            
        } catch (error) {
            return rejectWithValue(error);

        }
    }
)
import { createSlice } from "@reduxjs/toolkit";
import { createProject, generateProjectTemplates } from "./createProjectApi";


const initialState = {
    projectData: null,
    generateTemplateLoading: false,
    generateTemplateError: null,
    generateTemplateSuccess: null,

    showCreateProjectModal: false, 

    newProjectData: null,
    createProjectLoading: false,
    createProjectError: null,
    createProjectSuccess: null,


  }


const createProjectSlice = createSlice({
    name: 'createProject',
    initialState,
    reducers: {
        clearErrorOrSuccessMsg: (state) => {
            state.generateTemplateError = null
            state.generateTemplateSuccess = null

            state.createProjectError = null
            state.createProjectSuccess = null 
        },

        toggleShowCreateProjectModal: (state, action) => {
          state.showCreateProjectModal = action.payload
        },

        resetPreviousTemplates: (state) => {
          state.projectData = null
          state.newProjectData = null
        }
    },

    extraReducers: (builder) => {
        builder
          .addCase(generateProjectTemplates.pending, (state) => {
            state.generateTemplateLoading = true;
            state.generateTemplateError = null;
          })
          .addCase(generateProjectTemplates.fulfilled, (state, action) => {
            state.generateTemplateLoading = false;
            state.generateTemplateError = null;
            state.projectData = action.payload;
            state.generateTemplateSuccess = action.payload
          })
          .addCase(generateProjectTemplates.rejected, (state, action) => {
            state.generateTemplateLoading = false;
            state.generateTemplateSuccess = true;
            state.generateTemplateError = action.payload;

          })


          builder
          .addCase(createProject.pending, (state) => {
            state.createProjectLoading = true;
            state.createProjectError = null;
          })
          .addCase(createProject.fulfilled, (state, action) => {
            state.createProjectLoading = false;
            state.createProjectError = null;
            state.newProjectData = action.payload;
            state.createProjectSuccess = action.payload.message || true
          })
          .addCase(createProject.rejected, (state, action) => {
            state.createProjectLoading = false;
            state.createProjectSuccess = true;
            state.createProjectError = action.payload;

          })




      },



})


export const {clearErrorOrSuccessMsg, toggleShowCreateProjectModal, resetPreviousTemplates } = createProjectSlice.actions
export default createProjectSlice.reducer
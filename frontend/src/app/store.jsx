import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../redux/auth/authSlice'
import scriptReducer from '../redux/script/scriptSlice'
import createProjectReducer from '../redux/project/createProjectSlice'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
  };

//persisted reducer
const persistedReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({
    reducer: {
         //Persisted reducer
        auth: persistedReducer,

        //non persisted reducer
        script: scriptReducer, 
        createProject: createProjectReducer,

    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
        })
})
//create a persistor
export const persistor = persistStore(store);

export default store
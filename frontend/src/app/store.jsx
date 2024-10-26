import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../redux/auth/authSlice'
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
        auth: persistedReducer, //Persisted reducer

    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
        })
})
//create a persistor
export const persistor = persistStore(store);

export default store
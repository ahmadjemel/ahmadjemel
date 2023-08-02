
import { configureStore } from "@reduxjs/toolkit"
import articlesReducer from "../features/articlesSlice"
import cartSliceReducer from "../features/cartSlice"
import authReducer from "../features/authSlice"
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

const persistConfig = {
   key: 'root',
   version: 1,
   storage,
   
   }
   const persistedReducer = persistReducer(persistConfig, authReducer)
const store = configureStore({
reducer: {
   storearticles:articlesReducer,

   storecart:cartSliceReducer,
   // auth:authReducer 
   auth:persistedReducer
},
middleware: [thunk]
})

export default store
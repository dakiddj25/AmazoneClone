import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger  from "redux-logger";
import basket from "../Components/basketSlice";
import currentUser from "../Components/AuthenticationSlice";


const store = configureStore({
    reducer: { basket, currentUser },
    middleware : [...getDefaultMiddleware(), logger]

})

export default store
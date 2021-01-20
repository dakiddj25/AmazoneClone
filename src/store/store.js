import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger  from "redux-logger";
import basket from "../Components/basketSlice";


const store = configureStore({
    reducer: { basket },
    middleware : [...getDefaultMiddleware(), logger]

})

export default store
import {configureStore} from "@reduxjs/toolkit";

import authReducer from "./auth.slice";
import lectureReducer from "./lecture.slice";


const store = configureStore( {
    reducer: {
        authReducer,
        lectureReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export  default  store
import {configureStore} from '@reduxjs/toolkit'
import { CompaAPI } from './Compa.WebAPI'

export const store = configureStore({
    reducer:{
        [CompaAPI.reducerPath]: CompaAPI.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(CompaAPI.middleware)
});
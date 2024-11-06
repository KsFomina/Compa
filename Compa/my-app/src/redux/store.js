import { configureStore } from "@reduxjs/toolkit";
import { CompaAPI } from "./Compa.WebAPI";
import userDataReducer from './userData';


export const store = configureStore({
  
  reducer: {
    [CompaAPI.reducerPath]: CompaAPI.reducer,
    userData: userDataReducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(CompaAPI.middleware),
});

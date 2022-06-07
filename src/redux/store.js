import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./slices/rootReducer";
/////
import counterReducer from "./slices/globalSlice";

const middleware = [...getDefaultMiddleware()]

const store = configureStore({
    reducer: rootReducer,
    // reducer: {
    //     counter: counterReducer,
    //     reducer: rootReducer
    // },
    middleware
});

export default store;
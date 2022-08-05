import {configureStore} from "@reduxjs/toolkit";
import titleReducer from "./titleSlice";
import inputReducer from "./inputSlice";
import usersReducer from "./usersSlice";

export const store = configureStore(
    {
        reducer: {
            titleReducer,
            inputReducer,
            usersReducer
        }
    }
)
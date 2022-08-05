import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name: "inputSlice",
    initialState: {
        input:""
    },
    reducers: {
        changeInput(state, action) {
            state.input = action.payload
        }
    }
})

export default inputSlice.reducer;

export const {changeInput} = inputSlice.actions
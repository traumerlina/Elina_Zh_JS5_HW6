import { createSlice } from "@reduxjs/toolkit";

const titleSlice = createSlice({
    name: "titleSlice",
    initialState: {
        title: "I am old title"
    },
    reducers: {
        changeTitle (state, action) {
            state.title = "i am new title"
        },
        changeWithParams(state,action) {
            state.title = action.payload
        }
    }
})

export default titleSlice.reducer;

export const {changeTitle, changeWithParams} = titleSlice.actions;
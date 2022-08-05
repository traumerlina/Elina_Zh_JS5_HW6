import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice ({
    name: "usersSlice",
    initialState: {
        users: [],
        input: '',
        value: ''
    },
    reducers: {
        addUser(state,action) {
            state.users = [...state.users, action.payload]
        },

        changeInput(state, action) {
            state.input = action.payload
        },

        clearInput(state) {
            state.input = ''
        },

        deleteUsers(state) {
            state.users = []
        }
    }
})

export default usersSlice.reducer;

export const {addUser, changeInput, clearInput, deleteUsers} = usersSlice.actions;
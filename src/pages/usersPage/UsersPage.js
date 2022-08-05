import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Users from "../../components/users/Users";
import { addUser, changeInput, clearInput, deleteUsers } from "../../store/usersSlice";

function UsersPage() {
    const dispatch = useDispatch();

    const input = useSelector(state => state.usersReducer.input)

    const users = useSelector(state => state.usersReducer.users)

    const changeInputFunc = (e) => {
        dispatch(changeInput(e.target.value))
    }

    const addUserFunc = () => {
        dispatch(addUser(input))
        dispatch(clearInput(input))
    }

    const deleteUsersFunc = () => {
        dispatch(deleteUsers(users))
    }

    return (
        <div>
            
            <input type="text" onChange={changeInputFunc} value={input}/>

            <button onClick={addUserFunc}>add user</button>

            <button onClick={deleteUsersFunc}>Delete all</button>

            <Users/>
        </div>
    )
}

export default UsersPage;
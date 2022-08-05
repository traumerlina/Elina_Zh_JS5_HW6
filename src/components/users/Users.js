import React from "react";
import { useSelector } from "react-redux";

function Users() {
    const users = useSelector(state => state.usersReducer.users);
    return(
        <ul>
            {users.map(user=> <li>{user}</li> )}
        </ul>
    )
}

export default Users;
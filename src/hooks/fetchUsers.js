import React, {useState, useEffect} from 'react';
import {User} from '../classes/User'


async function fetchData() {
    const response = (await fetch("http://localhost:8080/api/users")).json();
    return response;
}

export function GetUsersForSelect() {
const [users, setUsers] = useState([]);

    useEffect(
        () => { 
            fetchData()
                .then(json => setUsers(json.items)) 
        },
        []
    );

const allUsers =
        <ul>
            {users.map(user =>
            <li key="id">
                <User data={user} /> 
            </li>)}
        </ul>
return allUsers;
}
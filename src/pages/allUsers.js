import React, {useState, useEffect} from 'react';
import '../styles/allUsers.scss';
import {Link} from 'react-router-dom';

async function fetchData() {
    const response = (await fetch("http://localhost:8080/api/users")).json();
    return response;
}

export function AllUsers() {
    const [users, setUsers] = useState([]);

    useEffect(
        () => { 
            fetchData()
                .then(json => setUsers(json.items)) 
        },
        []
    );

    return (
        <ul>
            {users.map(user =>
            <li>
                <div>{user.username}</div> 
                <div><img src={user.profileImage} alt="profile" /></div> 
                <div>{user.firstName + ' ' + user.lastName}</div> 
            </li>)}
        </ul>
    );
}

export function NewUserLink() {
    return <Link to='/createUser'>New User</Link>
}
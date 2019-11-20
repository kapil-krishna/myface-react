import React, {useState, useEffect} from 'react';
import {User} from '../classes/User';
import '../styles/allPosts.scss';

async function fetchData() {
    const response = await fetch("http://localhost:8080/api/users");
    const json = await response.json();
    return json;
}

export function AllPosts() {
    const [users, setUsers] = useState([]);

    useEffect(
        () => { 
            fetchData()
                .then(json => setPosts(json.items)) 
        },
        []
    );

    return (
        <ul>
            {users.map(user =>
                <User data={user}/>
           )}
        </ul>
    );
}
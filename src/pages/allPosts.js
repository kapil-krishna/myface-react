import React, {useState, useEffect} from 'react';
import {Post} from '../classes/Post.js';
import '../styles/allPosts.scss';

//function to get data from API
async function fetchData() {
    const response = await fetch("http://localhost:8080/api/posts");
    const json = await response.json();
    return json;
}

//
export function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(
        () => { 
            fetchData()
                .then(json => setPosts(json.items)) 
        },
        []
    );

    return (
        <ul>
            {posts.map(post =>
            <li>
                <Post data={post}/>
            </li>)}
        </ul>
    );
}


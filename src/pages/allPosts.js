import React, {useState, useEffect} from 'react';
import {Post} from '../classes/Post.js';
import '../styles/allPosts.scss';
import {Link} from 'react-router-dom';

async function fetchData() {
    const response = (await fetch("http://localhost:8080/api/posts")).json();
    return response;
}

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
        <div className="postList">
        <ul>
            {posts.map(post =>
            <li>
                <Post data={post}/>
            </li>)}
        </ul>
        </div>
    );
}

export function NewPostLink() {
    return <Link to='/createPost'>New Post</Link>
}


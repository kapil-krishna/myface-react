import React, {useState, useEffect} from 'react';

async function fetchData() {
    const response = await fetch("http://localhost:8080/api/posts");
    const json = await response.json();
    return json;
}

function Post(props) {
    return (
        props.message,
        props.id,
        props.senderId,
        props.postedAt,
        props.image,
        props.receiver
    )
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
        <ul>
            {posts.map(post =>
            <li>Post: {post.message}</li>)}
        </ul>
    );
}

